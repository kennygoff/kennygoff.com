import type { Actor } from "./encounters/actor";
import { createExport } from "./encounters/sqc-export";
import { customAlphabet } from "nanoid/non-secure";

export const exportData = (data: any) => {
  const exportObj = createExport(data);
  const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
    JSON.stringify(exportObj),
  )}`;
  const link = document.createElement("a");
  link.href = jsonString;
  link.download = "data.json";

  link.click();
};

export const initiativeSort = (a: Actor, b: Actor) =>
  (b.initiative ?? 0) - (a.initiative ?? 0);

export const hpPercentage = (hp?: number, maxHp?: number) => {
  if (maxHp === undefined || maxHp <= 0 || (hp !== undefined && hp <= 0)) {
    return 0;
  }

  if (hp === undefined) {
    return 1;
  }

  return hp / maxHp;
};

export const clamp = function (value: number, min?: number, max?: number) {
  if (min === undefined && max === undefined) {
    return value;
  }

  const val = min !== undefined ? Math.max(value, min) : value;
  const val2 = max !== undefined ? Math.min(val, max) : val;

  return val2;
};

const alphabet =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
export const generateShortId = customAlphabet(alphabet, 8);
