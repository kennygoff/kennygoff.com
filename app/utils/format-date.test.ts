import { describe, expect, test } from "vitest";
import { formatDate } from "./format-date";

describe("formatDate", () => {
  test.for([
    ["2024-01-01", "1/1/2024"],
    ["2024-01-31", "1/31/2024"],
    ["2024-11-11", "11/11/2024"],
    ["2024-12-01", "12/1/2024"],
    ["2024-12-31", "12/31/2024"],
  ])('formatDate("%s") -> "%s"', ([isoDate, formattedDate]) => {
    expect(formatDate(isoDate)).toBe(formattedDate);
  });
});
