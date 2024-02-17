# **What2Cook**

## **Getting Started**

### **Prerequisites:**

- Python 3.9 (or later)
- Docker
- Docker Compose

### **Installation:**

1. **Create a virtual environment:**

   ```bash
   python -m venv flaskenv
   ```

   If you have multiple Python versions, specify Python 3.9 explicitly:

   ```bash
   py -3.9 -m venv flaskenv
   ```

2. **Activate the virtual environment:**

   ```bash
   source flaskenv/Scripts/activate
   ```

3. **Install dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

### **Building and running the application:**

```bash
docker compose up
```

If you made changes in the code:

```bash
docker compose up --build
```

Watch your changes:

```bash
docker compose watch
```

Debug your code:

```bash
docker compose -f compose.debug.yaml up
```

### **Updating Dependencies:**

1. **Install any new dependencies:**

```bash
pip install <new-dependency>
```

2. **Update the requirements file:**

   ```bash
   pip freeze > requirements.txt
   ```

### **Pushing to an Azure Container Registry:**

1. **Enable Admin User:**

   - Access your container registry in the Azure portal.
   - Navigate to **Access keys** under **Settings**.
   - Enable the **Admin user** option.
   - Note down the username and password that will be displayed, as you'll need them for logging in.

2. **Log in to the container registry:**

   Replace `<registry_name>` with the actual name of your container registry.

   ```bash
   docker login <registry_name>
   ```

   Enter the username and password you noted down in the previous step when prompted.

3. **Tag the Docker image:**

   ```bash
   docker tag what2cook <registry_name>/what2cook
   ```

4. **Push the image to the registry:**

   ```bash
   docker push <registry_name>/what2cook
   ```
