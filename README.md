# What2Cook

## Dataset Setup

Before starting, you need to perform the following steps:

1. Create a folder named `data` in the project root directory.
2. Go to [this Kaggle dataset page](https://www.kaggle.com/datasets/irkaal/foodcom-recipes-and-reviews) and download the dataset.
3. Extract the `recipes.csv` file from the downloaded zip file.
4. Place the `recipes.csv` file in the `data` folder you created earlier.

## Setting Up the Environment

Follow the steps below to set up your local development environment:

1. **Create a Virtual Environment**

   Use the following command to create a new virtual environment named `.venv`:

   ```bash
   python -m venv .venv
   # or for specific Python version
   py -3.9 -m venv .venv
   ```

2. **Activate the Virtual Environment**

   Depending on your shell, use one of the following commands to activate the virtual environment:

   On Windows (Command Prompt):

   ```bash
   .venv\Scripts\activate
   ```

   On Windows (Git Bash):

   ```bash
   source .venv/Scripts/activate
   ```

3. **Install Required Dependencies**

   ```bash
   pip install -r requirements.txt
   ```

To deactivate the virtual environment when you're done, use:

```bash
deactivate
```

If you install additional libraries and want to save them as dependencies, use:

```bash
pip freeze > requirements.txt
```

## Selecting the Virtual Environment in VS Code

After setting up and activating the virtual environment, you need to select it as your interpreter in VS Code. Follow these steps:

1. Open the Command Palette (`Ctrl+Shift+P`).
2. Type and select `Python: Select Interpreter`.
3. In the dropdown, choose the interpreter that corresponds to the `.venv` virtual environment you created.

Now, VS Code will use the Python interpreter in the virtual environment for running Python scripts and debugging.

## Data Cleaning

After setting up the environment and the dataset, the next step is to clean and modify the data. Follow these steps:

1. Navigate to `data_cleaning\data_cleaning.py`.
2. Run the `data_cleaning.py` script. This script will perform necessary cleaning and modifications to the `recipes.csv` file inside the `data` folder.
3. After running the script, a new file named `modified_recipes.csv` will be created inside the `data/collection` folder.

## Setting Up Qdrant Collection

After setting up the environment, you need to create a collection in Qdrant. Follow these steps:

1. Go to [Qdrant's login page](https://cloud.qdrant.io/login) and sign up for an account.
2. After logging in, navigate to the `Data Access Control` tab and create a new API key. Make sure to save this key somewhere safe.
3. Next, go to the `Clusters` tab and create a new cluster. After creating the cluster, it will provide you with a URL.
4. Copy the API key and the cluster URL.
5. Open the `.env` file in your project root directory and add the following lines:

   ```properties
   QDRANT_URL=<your_cluster_url>
   QDRANT_KEY=<your_api_key>
   ```
