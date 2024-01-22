import { Actor } from "./encounters/actor";
import { createExport } from "./encounters/sqc-export";

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
