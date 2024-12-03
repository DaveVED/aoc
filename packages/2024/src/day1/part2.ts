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

const rightNumberCounts = new Map<number, number>();
rightNumbers.forEach((number: number) => {
  rightNumberCounts.set(number, (rightNumberCounts.get(number) || 0) + 1);
});
const sum = leftNumbers.reduce((sum: number, number: number) => {
  const count = rightNumberCounts.get(number) || 0;
  return sum + number * count;
}, 0);

console.log(sum);
