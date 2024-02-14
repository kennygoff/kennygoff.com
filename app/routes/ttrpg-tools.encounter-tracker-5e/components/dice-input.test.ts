import { describe, expect, test } from "vitest";
import { safeEval } from "./dice-input";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const testPatterns = `
0
20
20-10
20+10
20/2
20*2
(20-10)+2
1d2
1d4
1d6
1d8
1d12
1d20
1d100
1d20:adv
1d20:dis
1d20:adv
(1d20:adv+2)
(4d8+2)/2
4d8+2d6+2
invalid
1-d20
d20
x1d20
`;

describe("safeEval", () => {
  test("converts strings to numbers", () => {
    expect(safeEval("20")).toBe(20);
  });

  test("evaluates simple mathematical expressions", () => {
    expect(safeEval("20-10")).toBe(10);
    expect(safeEval("20+10")).toBe(30);
    expect(safeEval("20/2")).toBe(10);
    expect(safeEval("20*2")).toBe(40);
    expect(safeEval("(20-10)+2")).toBe(12);
  });

  test("returns null for invalid expressions", () => {
    expect(safeEval("invalid")).toBe(null);
    expect(safeEval("")).toBe(null);
  });
});
