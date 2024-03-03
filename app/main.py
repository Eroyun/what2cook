from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
from qdrant_client import models, QdrantClient
from sentence_transformers import SentenceTransformer
from app.helpers.filter_helpers import get_time_range
from typing import Optional
import os
from typing import List

app = FastAPI()

origins = [
    "http://localhost:8081"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

qdrant = QdrantClient(
    url=os.environ["QDRANT_URL"],
    api_key=os.environ["QDRANT_KEY"],
)

encoder = SentenceTransformer(
    "all-MiniLM-L6-v2", device="cpu", cache_folder="./models_cache")


@app.post('/search')
async def search(query: Optional[str] = Body(None), limit: Optional[int] = Body(10)):
    hits = qdrant.search(
        collection_name="recipes",
        query_vector=encoder.encode(query).tolist() if query else [],
        limit=limit,
        search_params=models.SearchParams(
            quantization=models.QuantizationSearchParams(
                ignore=False,
                rescore=False
            )
        ),
    )
    return [{**hit.payload, 'score': hit.score} for hit in hits]


@app.post('/filter')
async def filter(totalTime: Optional[int] = Body(None), ingredients: Optional[List[str]] = Body(None)):

    must = []

    if totalTime is not None:
        gt, gte, lt, lte = get_time_range(totalTime)

        must.append(models.FieldCondition(
            key="TotalTime",
            range=models.Range(
                gt=gt,
                gte=gte,
                lt=lt,
                lte=lte
            )
        ))

    if ingredients is not None:
        for ingredient in ingredients:
            must.append(models.FieldCondition(
                key="RecipeIngredientParts",
                match=models.MatchText(text=ingredient)
            ))

    hits = qdrant.scroll(
        collection_name="recipes",
        scroll_filter=models.Filter(
            must=must
        ),
    )[0]
    return [hit.payload for hit in hits]


@app.get('/filter-category')
async def filterCategory(category: str):
    categories = ['Breakfast', 'Beverages', 'Dessert']
    if category not in categories:
        hits = qdrant.search(
            collection_name="recipes",
            query_vector=encoder.encode(category.lower()).tolist(),
            search_params=models.SearchParams(
                quantization=models.QuantizationSearchParams(
                    ignore=False,
                    rescore=False
                )
            )
        )
    else:
        hits = qdrant.scroll(
            collection_name="recipes",
            scroll_filter=models.Filter(
                must=[
                    models.FieldCondition(
                        key="RecipeCategory",
                        match=models.MatchText(text=category)
                    ),
                    models.FieldCondition(
                        key="ReviewCount",
                        range=models.Range(gte=100)
                    )
                ]
            )
        )[0]

    return [hit.payload for hit in hits]
