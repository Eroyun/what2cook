from qdrant_client import QdrantClient, models
import os

client = QdrantClient(
    url=os.environ["QDRANT_URL"],
    api_key=os.environ["QDRANT_KEY"],
)

client.create_payload_index(
    collection_name="recipes",
    field_name="TotalTime",
    field_schema="integer"
)

client.create_payload_index(
    collection_name="recipes",
    field_name="RecipeIngredientParts",
    field_schema="text"
)

client.create_payload_index(
    collection_name="recipes",
    field_name="RecipeCategory",
    field_schema=models.TextIndexParams(
        type=models.TextIndexType.TEXT,
        tokenizer=models.TokenizerType.WORD
    )
)
