# what2cook

## Back End Architecture

This application's back end utilizes a two-branch modular design:

**1. qdrant-collection**:

- Focuses on data preparation for efficient searching in Qdrant.
- Handles:
  - **Cleaning:** Removing unnecessary data and unwanted values.
  - **Preparation:** Modifying the values in some columns to enable range search.
  - **Collection Management:** Creating and maintaining the data collection within Qdrant. This aplication uses free tier so it aims to use less RAM and more disk. If you have more resources you can remove on_disk attributes to use more RAM to increase speed.

**2.1 fastapi-search**:

- Provides APIs for searching and filtering the Qdrant collection using FastAPI.
- Key functionalities:
  - **FastAPI Endpoints:** Accepts search queries and filter parameters. FastAPI's automatic interactive API documentation allows you to directly try out the endpoint at `localhost:5000/docs`.
  - **Qdrant Integration:** Executes searches and filters using Qdrant capabilities. FastAPI's asynchronous nature can potentially improve the performance of these operations.
  - **Data Delivery:** Returns results as JSON for consumption by various applications. FastAPI's automatic request and response conversion (using Pydantic models) simplifies this process.

The `fastapi-search` branch outperforms `flask-search` with a simpler design and faster execution. It includes an interactive endpoint testing at `localhost:5000/docs`. With FastAPI's built-in features, it enhances project clarity and maintainability. This approach supports independent updates and ensures efficient integration of search and filter functionalities.

**2.2 flask-search**:

- Provides APIs for searching and filtering the Qdrant collection.
- Key functionalities:
  - **Flask Endpoints:** Accepts search queries and filter parameters.
  - **Qdrant Integration:** Executes searches and filters using Qdrant capabilities.
  - **Data Delivery:** Returns results as JSON for consumption by various applications.

This modular approach promotes clarity, maintainability, and scalability. It allows independent development and updates while ensuring seamless integration between data preparation and search functionalities.
