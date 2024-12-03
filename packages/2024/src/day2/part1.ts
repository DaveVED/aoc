import { readFileLines } from "aoc-helpers";
import path from "path";

const filePath = path.resolve(__dirname, "input.txt");
const input = await readFileLines(filePath);

// Function to validate a line based on its numbers
const isLineSafe = (line: string): boolean => {
  const numbers: number[] = line.split(" ").map(Number);

  // Determine validation type (increasing or decreasing)
  const validationType = numbers[0] > numbers[1] ? "decreasing" : "increasing";

  // Check each pair of adjacent numbers
  for (let i = 0; i < numbers.length - 1; i++) {
    const current = numbers[i];
    const next = numbers[i + 1];

    const difference = Math.abs(current - next);

    // Validate difference and order based on validation type
    if (difference <= 0 || difference > 3) return false;
    if (validationType === "increasing" && current >= next) return false;
    if (validationType === "decreasing" && current <= next) return false;
  }

  return true;
};

// Use reduce to count safe lines
const safeCount = input.reduce((count: number, line: string) => {
  return isLineSafe(line) ? count + 1 : count;
}, 0);

console.log(`Total safe lines: ${safeCount}`);
