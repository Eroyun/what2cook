# what2cook

## Back End Architecture

This application's back end utilizes a two-branch modular design:

**1. qdrant-collection**:

- Focuses on data preparation for efficient searching in Qdrant.
- Handles:
  - **Cleaning:** Removing unnecessary data and unwanted values.
  - **Preparation:** Modifying the values in some columns to enable range search.
  - **Collection Management:** Creating and maintaining the data collection within Qdrant. This aplication uses free tier so it aims to use less RAM and more disk. If you have more resources you can remove on_disk attributes to use more RAM to increase speed.

**2. flask-search**:

- Provides APIs for searching and filtering the Qdrant collection.
- Key functionalities:
  - **Flask Endpoints:** Accepts search queries and filter parameters.
  - **Qdrant Integration:** Executes searches and filters using Qdrant capabilities.
  - **Data Delivery:** Returns results as JSON for consumption by various applications.

This modular approach promotes clarity, maintainability, and scalability. It allows independent development and updates while ensuring seamless integration between data preparation and search functionalities.
