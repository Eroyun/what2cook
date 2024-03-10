# **What2Cook**

## **Getting Started**

### **Prerequisites**

- Docker ([Install Docker Desktop](https://www.docker.com/products/docker-desktop/))

### **Before Starting**

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
