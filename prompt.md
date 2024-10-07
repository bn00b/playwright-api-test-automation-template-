# Playwright API Test Script Generation

## Project Structure
Assume the following project structure:

```
/tests
    [ENDPOINT_NAME].test.ts
/page-objects
    [ENDPOINT_NAME]Page.ts
/utils
    env.ts
```
Adhere to the `.cursorrules` file for the project.

## Step 1: Environment Setup

1. Extract all environment variables defined in the Postman collection.
2. Create a `.env` file with these variables.
3. Create an `env.ts` file in the `/utils` folder to load and export these variables.

Output for Step 1:
1. Content of the `.env` file
2. Content of the `env.ts` file

Ask for confirmation when you're ready to proceed to Step 2.

## Step 2: Load Endpoints

1. Parse the Postman collection JSON file.
2. Extract all unique endpoints from the collection.
3. Create a list of endpoint names, removing any duplicates.
4. Define the endpoints in `endPoints` object in the `endPoints.ts` file in the `/utils` folder.

Output for Step 2:
1. Content of the `endPoints.ts` file.
2. List of all unique endpoints found in the Postman collection.

Ask for confirmation when you're ready to proceed to Step 3.

## Step 3: Generate Test and Page Object for Each Endpoint

I will now generate the test and page object for one endpoint at a time. After each endpoint is processed, I'll ask for your confirmation to proceed to the next one.

Make sure to create test scripts only for the examples mentioned in the collection for all endpoints. DO NOT make any modifications to the examples.

For the current endpoint:

1. Create a Page Object class file ([ENDPOINT_NAME]Page.ts) in the `/page-objects` folder:
   - Import necessary modules (Playwright, Faker, env variables).
   - Create a class with methods for API operations.
   - Use `getFullUrl` method to get the full URL for the endpoint.
   - Implement methods for generating test data using Faker.
   - Add utility methods for common operations and assertions.

2. Create a test file ([ENDPOINT_NAME].test.ts) in the `/tests` folder:
   - Import necessary modules and the corresponding Page Object
   - Set up the test context, including authentication
   - Define test cases based on examples in the Postman collection
   - Use async Page Object methods for API interactions and assertions
   - The `testName` variable should be defined on the describe block of the spec file.
   - Use Page Object methods for API interactions and assertions
   - Handle dynamic data and authorization as specified in Postman collection comments
   - Use utility functions (readJsonFile, writeJsonFile, getSpecFilePath) for data handling

Requirements for both files:
- Use Playwright's APIRequestContext for API requests.
- Ensure methods are defined as `async`.
- Implement error handling and logging best practices.
- Include clear comments and follow Playwright's recommended patterns.
- For dynamic data or authorization, refer to Postman collection comments.
- Use the project structure and naming conventions as specified earlier.

Additional Notes:
- Assume common utilities and authentication functions are available in a separate 'utils' module
- Use Faker for generating dynamic test data
- Log test data and response data to files for analysis
- Pay special attention to Postman collection comments for dynamic data and authorization guidance
- Use `readJsonFile` and `writeJsonFile` from `fileUtils.ts` for data handling
- Use `filePath.ts` to define and get the file path for the json file. Use `fileNameDefinitions` method to define the file name for the json file. Use `getSpecFilePath` method to get the file path for the json file.
- Use file read/write methods for token management, ensuring to use `testName` for file path generation

Generate Playwright API test scripts from the `Postman collection`. 
Each Endpoint test should be in a separate file in the `tests` folder.

Output for the current endpoint:
1. Content of the Page Object class file ([ENDPOINT_NAME]Page.ts)
2. Content of the test file ([ENDPOINT_NAME].test.ts)

Focus solely on implementing tests only for the examples provided in the Postman collection, ensuring to handle dynamic data and authorization as specified in the collection's comments.

After presenting the output for the current endpoint, I'll ask if you want to proceed to the next endpoint or if you need any modifications to the current one.

