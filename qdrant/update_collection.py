from qdrant_client import QdrantClient, models
import os

client = QdrantClient(
    url=os.environ["QDRANT_URL"],
    api_key=os.environ["QDRANT_KEY"],
)

client.update_collection(
    collection_name="recipes",
    optimizer_config=models.OptimizersConfigDiff(
        indexing_threshold=20000),
)
