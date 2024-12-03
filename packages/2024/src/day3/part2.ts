import { readFile } from "aoc-helpers";
import path from "path";

export const sumValidMultiplications = (input: string): number => {
  // Combined regex to find all valid instructions in order
  const instructionPattern = /(mul\((\d+),(\d+)\)|do\(\)|don't\(\))/g;

  // Match all instructions in order
  const matches = input.matchAll(instructionPattern);

  // Initialize state
  let isEnabled = true;
  let total = 0;

  console.log("Instructions found in order:");
  for (const match of matches) {
    const instruction = match[0];

    if (instruction === "do()") {
      // Enable future mul instructions
      console.log("do(): Enabling multiplications");
      isEnabled = true;
    } else if (instruction === "don't()") {
      // Disable future mul instructions
      console.log("don't(): Disabling multiplications");
      isEnabled = false;
    } else if (instruction.startsWith("mul")) {
      // Extract X and Y from mul(X,Y)
      const x = parseInt(match[2], 10);
      const y = parseInt(match[3], 10);

      if (isEnabled) {
        const product = x * y;
        console.log(`mul(${x},${y}): ${x} * ${y} = ${product}`);
        total += product;
      } else {
        console.log(`mul(${x},${y}): Skipped (multiplications disabled)`);
      }
    }
  }

  return total;
};

// Example corrupted memory input (replace with your puzzle input)
const filePath = path.resolve(__dirname, "input.txt");
const input = await readFile(filePath);
const result = sumValidMultiplications(input);
console.log(`The total sum is: ${result}`);
