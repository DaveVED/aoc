import path from "path";
import { readFileLines } from "aoc-helpers";

const filePath = path.resolve(__dirname, "input.txt");
const lines = await readFileLines(filePath);

const leftNumbers: number[] = [];
const rightNumbers: number[] = [];
lines.forEach((line: string) => {
  const [left, right] = line.split("   ");
  const leftNumber = parseInt(left, 10);
  const rightNumber = parseInt(right, 10);

  // Ensure valid numbers
  if (!isNaN(leftNumber) && !isNaN(rightNumber)) {
    leftNumbers.push(leftNumber);
    rightNumbers.push(rightNumber);
  }
});

leftNumbers.sort((a: number, b: number) => a - b);
rightNumbers.sort((a: number, b: number) => a - b);

const sum = leftNumbers.reduce(
  (sum: number, number: number, index: number) => sum + Math.abs(number - rightNumbers[index]),
  0,
);

console.log(sum);

