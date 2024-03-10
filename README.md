# **What2Cook**

## **Before Starting**

### **Setting Up Qdrant Credentials**

Follow these steps to create and get Qdrant credentials:

1. Go to [Qdrant's login page](https://cloud.qdrant.io/login) and sign up for an account.
2. After logging in, navigate to the `Data Access Control` tab and create a new API key. Make sure to save this key somewhere safe.
3. Next, go to the `Clusters` tab and create a new cluster. After creating the cluster, it will provide you with a URL.
4. Copy the API key and the cluster URL.
5. Open the `.env` file in your project root directory and add the following lines:

   ```properties
   QDRANT_URL=<your_cluster_url>
   QDRANT_KEY=<your_api_key>
   ```

### **Prerequisites**

- Docker ([Install Docker Desktop](https://www.docker.com/products/docker-desktop/))

## **Getting Started**

For local development, it's important to run the backend and frontend applications in separate terminal instances. This allows both applications to run concurrently without interfering with each other's processes.

### **Building and Running the Backend Application**

To build and run the backend application, use the following Docker command:

```bash
docker compose up
```

If you've made changes to the code that necessitate a rebuild, use the --build flag:

```bash
docker compose up --build
```

To debug your code, use the following command:

```bash
docker compose -f compose.debug.yaml up
```

**Note**: Docker might hang during the attaching process. If this happens, start your debugger in Visual Studio Code to resolve the issue.

### **Setting Up and Running the Frontend Application**

To set up the frontend application, first navigate to the react-app directory and install the necessary packages:

```bash
cd react-app
npm install
```

After setting up the frontend application and installing the necessary packages, you need to create a .env file in the react-app directory. This file should contain the EXPO_PUBLIC_QDRANT_URL key. The value for this key can be either http://localhost:5000 or the IP address of your device in your local network, such as http://192.168.1.x:5000. Here's how you can do it:

```
echo EXPO_PUBLIC_QDRANT_URL=http://localhost:5000 > .env
```

Replace http://localhost:5000 with your local network IP address if needed.

Once the packages are installed, you can run the Expo app with the following command:

```bash
npm start
```

Remember to ensure that your Docker and Node.js environments are properly set up before running these commands.

### **Pushing to an Azure Container Registry (Optional)**

1. **Enable Admin User**

   - Access your container registry in the Azure portal.
   - Navigate to **Access keys** under **Settings**.
   - Enable the **Admin user** option.
   - Note down the username and password that will be displayed, as you'll need them for logging in.

2. **Log in to the container registry**

   Replace `<registry_name>` with the actual name of your container registry.

   ```bash
   docker login <registry_name>
   ```

   Enter the username and password you noted down in the previous step when prompted.

3. **Tag the Docker image**

   ```bash
   docker tag what2cook <registry_name>/what2cook
   ```

4. **Push the image to the registry**

   ```bash
   docker push <registry_name>/what2cook
   ```
