from datasets import load_dataset
from qdrant_client import models, QdrantClient
from sentence_transformers import SentenceTransformer
from itertools import islice
import os

encoder = SentenceTransformer("all-MiniLM-L6-v2")

dataset = load_dataset('csv', data_files='data/collection/modified_recipes.csv',
                       split="train", streaming=True)

client = QdrantClient(
    url=os.environ["QDRANT_URL"],
    api_key=os.environ["QDRANT_KEY"],
)

client.create_collection(
    collection_name="recipes",
    vectors_config=models.VectorParams(
        # Vector size is defined by used model
        size=encoder.get_sentence_embedding_dimension(),
        distance=models.Distance.COSINE,
        # Store vectors on disk to save RAM (at the cost of speed)
        on_disk=True
    ),
    # Setting indexing_threshold to 0 disables indexing, which makes the upload faster
    # We will enable indexing after the upload
    optimizers_config=models.OptimizersConfigDiff(
        indexing_threshold=0,
        memmap_threshold=20000
    ),
    hnsw_config=models.HnswConfigDiff(on_disk=True),
    quantization_config=models.BinaryQuantization(
        binary=models.BinaryQuantizationConfig(
            always_ram=False
        )
    ),
    on_disk_payload=True,
    shard_number=4,  # Shards enable uploading large datasets in a parallel way
)


def batched(iterable, n):
    iterator = iter(iterable)
    while batch := list(islice(iterator, n)):
        yield batch


batch_size = 100

for batch in batched(dataset, batch_size):
    ids = [point["RecipeId"] for point in batch]
    vectors = [encoder.encode(
        point["Name"]+point["RecipeInstructions"]).tolist() for point in batch]

    client.upsert(
        collection_name="recipes",
        points=models.Batch(
            ids=ids,
            vectors=vectors,
            payloads=batch,
        ),
    )
