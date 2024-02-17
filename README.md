## Setup

1. **Create a virtual environment**

   ```bash
   python -m venv qdrantenv
   # or
   py -3.9 -m venv qdrantenv
   ```

2. **Activate the virtual environment**

   On Windows (Command Prompt):

   ```bash
   qdrantenv\Scripts\activate
   ```

   On Windows (Git Bash):

   ```bash
   source qdrantenv/Scripts/activate
   ```

3. **Deactivate the virtual environment**

   ```bash
   deactivate
   ```

4. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

5. **If you install other libraries save dependencies**

   ```bash
   pip freeze > requirements.txt
   ```
