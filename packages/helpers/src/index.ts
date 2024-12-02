export const readFileLines = async (filePath: string): Promise<string[]> => {
  try {
    // Read the file using Bun
    const file = Bun.file(filePath);
    const rawText = await file.text();

    // Split the text into lines and remove any empty lines
    const fileLines = rawText.split("\n").filter((line) => line.trim() !== "");
    return fileLines;
  } catch (error) {
    throw new Error(`Unable to read file by lines...`);
  }
};
