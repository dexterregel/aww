Running this project requires the following:
- A .env file in the project's root directory, which contains:
  - VITE_GOOGLE_MAPS_API_KEY: this is an API key from Google Cloud

After pushing code to the main branch, a GitHub Action builds the code and sends it to an AWS S3 bucket.