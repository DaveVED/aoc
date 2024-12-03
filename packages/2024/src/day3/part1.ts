import { readFile } from "aoc-helpers";
import path from "path";

export const sumValidMultiplications = (input: string): number => {
  // Regular expression to find valid mul(X,Y) instructions
  const pattern = /mul\((\d+),(\d+)\)/g;

  // Match all valid instructions
  const matches = input.matchAll(pattern);

  // Calculate the results of valid instructions and sum them up
  let total = 0;
  for (const match of matches) {
    const x = parseInt(match[1], 10);
    const y = parseInt(match[2], 10);
    total += x * y;
  }

  return total;
};

// Example corrupted memory input (replace with your puzzle input)
const filePath = path.resolve(__dirname, "input.txt");
const input = await readFile(filePath);
console.log(input);
const result = sumValidMultiplications(input);
console.log(`The total is: ${result}`);
