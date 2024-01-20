from flask import Blueprint, request, jsonify
from qdrant_client import models, QdrantClient
from sentence_transformers import SentenceTransformer
import os

qdrant = QdrantClient(
    url=os.environ["QDRANT_URL"],
    api_key=os.environ["QDRANT_KEY"],
)

bp = Blueprint('search', __name__)


@bp.route('/search', methods=['POST'])
def search():
    encoder = SentenceTransformer("all-MiniLM-L6-v2")
    data = request.get_json()
    query = data.get('query', '')
    limit = data.get('limit', 10)
    hits = qdrant.search(
        collection_name="recipes",
        query_vector=encoder.encode(query).tolist(),
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
    return jsonify(results)
