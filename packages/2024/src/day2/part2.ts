import { readFileLines } from "aoc-helpers";
import path from "path";

const filePath = path.resolve(__dirname, "input.txt");
const input = await readFileLines(filePath);

type ValidationType = "increasing" | "decreasing";

interface LineResponse {
    valid: boolean;
}

const isLineSafe = (numbers: number[]): LineResponse => {
    if (numbers.length < 2) return { valid: false }; // A single number isn't safe

    const validationType: ValidationType = numbers[0] > numbers[1] ? "decreasing" : "increasing";

    for (let i = 0; i < numbers.length - 1; i++) {
        const current = numbers[i];
        const next = numbers[i + 1];

        const difference = Math.abs(current - next);

        if (difference < 1 || difference > 3) return { valid: false };
        if (validationType === "increasing" && current >= next) return { valid: false };
        if (validationType === "decreasing" && current <= next) return { valid: false };
    }

    return { valid: true };
};

const safeCount = input.reduce((count: number, line: string) => {
    const numbers: number[] = line.split(" ").map(Number);
    let validLine = isLineSafe(numbers);

    if (validLine.valid) {
        return count + 1;
    }

    /**
     * Is there really no better way to do this? A shallow copy?
     */
    for (let index = 0; index < numbers.length; index++) {
        const tempNumbers = [...numbers];
        tempNumbers.splice(index, 1);
        if (isLineSafe(tempNumbers).valid) {
            return count + 1;
        }
    }

    return count;
}, 0);

console.log(`Total safe lines: ${safeCount}`);
