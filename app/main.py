from fastapi import FastAPI, Body
from qdrant_client import models, QdrantClient
from sentence_transformers import SentenceTransformer
from app.helpers.filter_helpers import get_time_range
from typing import Optional
import os

app = FastAPI()

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
    results = [{'payload': hit.payload, 'score': hit.score}
               for hit in hits]
    return results


@app.post('/filter')
async def filter(totalTime: Optional[int] = Body(None), ingredient: Optional[str] = Body(None)):

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

    if ingredient is not None:
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
    results = [hit.payload for hit in hits]
    return results