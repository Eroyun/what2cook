from flask import Blueprint, request, jsonify
from qdrant_client import models, QdrantClient
from web.helpers.filter_helpers import get_time_range
import os

bp = Blueprint('filter', __name__)

qdrant = QdrantClient(
    url=os.environ["QDRANT_URL"],
    api_key=os.environ["QDRANT_KEY"],
)


@bp.route('/filter', methods=['POST'])
def filter():

    data = request.get_json()

    must = []
    totalTime = data.get('totalTime')

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

    hits = qdrant.scroll(
        collection_name="recipes",
        scroll_filter=models.Filter(
            must=must
        ),
    )[0]
    results = [hit.payload for hit in hits]
    return jsonify(results)
