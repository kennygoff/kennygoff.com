import { Actor } from "./actor";

export type SQCExport = {
  type: "SQC";
  version: string;
  encounter?: {
    actors: Actor[];
  };
};

export const createExport = (actors: Actor[]) => {
  return {
    type: "SQC",
    version: "0.0-dev",
    encounter: {
      actors,
    },
  };
};

export const isSQCExport = (data: any): data is SQCExport => {
  return (
    typeof data.type === "string" &&
    data.type === "SQC" &&
    typeof data.version === "string"
  );
};

export const processImport = (data: unknown): SQCExport | null => {
  if (isSQCExport(data)) {
    return data;
  }

  return null;
};
