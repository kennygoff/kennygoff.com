import type { Actor } from "./actor";

export type Encounter = {
  actors?: Actor[];
  state: "new" | "active" | "finished";
  initiativeOrder?: string[];
  currentRound: number;
  currentTurn: number;
};
