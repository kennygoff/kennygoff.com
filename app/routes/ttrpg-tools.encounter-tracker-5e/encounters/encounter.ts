export type Encounter = {
  state: "new" | "active" | "finished";
  currentRound: number;
  currentTurn: number;
  options: {
    autoSort: boolean;
  };
};
