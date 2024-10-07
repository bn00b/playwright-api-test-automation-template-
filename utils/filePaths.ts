/**
 * @returns An object containing file name definitions
 */
export async function fileNameDefinitions(): Promise<{
  [key: string]: string;
}> {
  // Define the file names here.
  return {
    // loginData: "loginData.json",
    // profileData: "profileData.json",
  };
}

/**
 * Generates a file path for a specific test and file. This method helps to generate dynamic file path according to the test name and file name.
 * 
 * The testName should be defined for each test describe block on the spec file.
 * 
 * The fileName should be defined in the fileNameDefinitions method.
 * 
 * When calling this method, pass the testName: defined on the test spec file and the fileName: defined in the fileNameDefinitions method.
 * 
 * @param testName The name of the test
 * @param fileName The key of the file in fileNameDefinitions
 * @returns The generated file path.
 */
export async function getSpecFilePath(
  testName: string,
  fileName: string
): Promise<string> {
  const definitions = await fileNameDefinitions();
  if (!(fileName in definitions)) {
    throw new Error(`Invalid fileName: ${String(fileName)}`);
  }
  return `data/${testName}/${definitions[fileName as string]}`;
}
