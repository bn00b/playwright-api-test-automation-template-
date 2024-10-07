import fs from "fs";
import path from "path";

/**
 * Reads and parses a JSON file.
 * @param filePath The path to the JSON file.
 * @returns The parsed JSON data.
 * @throws Error if the file cannot be read or parsed.
 */
export const readJsonFile = async (filePath: string): Promise<any> => {
  const absolutePath = path.resolve(filePath);
  try {
    const rawData = fs.readFileSync(absolutePath, "utf-8");
    return JSON.parse(rawData);
  } catch (error) {
    throw new Error(`Error reading file from path: ${absolutePath} : ${error}`);
  }
};

/**
 * Writes data to a JSON file.
 * @param filePath The path where the JSON file should be written.
 * @param data The data to be written to the file.
 * @throws Error if the file cannot be written.
 */
export const writeJsonFile = async (
  filePath: string,
  data: any
): Promise<void> => {
  const absolutePath = path.resolve(filePath);
  const directory = path.dirname(absolutePath);

  try {
    // Create directory recursively if it doesn't exist
    fs.mkdirSync(directory, { recursive: true });

    fs.writeFileSync(absolutePath, JSON.stringify(data, null, 2), "utf-8");
    console.log(`File written to path: ${absolutePath}`);
  } catch (error) {
    throw new Error(`Error writing file to path: ${absolutePath} : ${error}`);
  }
};

/**
 * Checks if a file exists at the given path.
 * @param filePath The path of the file to check.
 * @returns A boolean indicating if the file exists.
 */
export const checkFileExists = async (filePath: string): Promise<boolean> => {
  try {
    return fs.statSync(filePath).isFile();
  } catch (error) {
    return false;
  }
};
