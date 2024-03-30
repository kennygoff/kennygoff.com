// import { evaluate } from "mathjs";

import { evaluate } from "./evaluate";

export const safeEval = (expr: string): number | null => {
  try {
    return evaluate(expr) ?? null;
  } catch {
    return null;
  }
};
