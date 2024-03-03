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


@app.post('/search')
async def search(query: Optional[str] = Body(None), limit: Optional[int] = Body(10)):
    encoder = SentenceTransformer("all-MiniLM-L6-v2")
    hits = qdrant.search(
        collection_name="recipes",
        query_vector=encoder.encode(query).tolist() if query else [],
        limit=limit,
        search_params=models.SearchParams(
            quantization=models.QuantizationSearchParams(
                ignore=False,
                rescore=True,
                oversampling=2.0
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
    categories = ['Breakfast', 'Lunch/Snack', 'Beverages', 'Dessert']
    gte = 100.0

    while gte >= 0:
        if category not in categories:
            scroll_filter = models.Filter(
                must_not=[
                    models.FieldCondition(
                        key="RecipeCategory",
                        match=models.MatchAny(any=categories),
                    )
                ],
                must=[
                    models.FieldCondition(
                        key="ReviewCount",
                        range=models.Range(gte=gte)
                    )
                ]
            )
        else:
            scroll_filter = models.Filter(
                must=[
                    models.FieldCondition(
                        key="RecipeCategory",
                        match=models.MatchText(text=category)
                    ),
                    models.FieldCondition(
                        key="ReviewCount",
                        range=models.Range(gte=gte)
                    )
                ]
            )

        hits = qdrant.scroll(
            collection_name="recipes",
            scroll_filter=scroll_filter,
        )[0]

        if len(hits) >= 10 or gte == 0:
            break

        gte -= 25.0

    return [hit.payload for hit in hits]
