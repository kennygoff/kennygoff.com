export type Actor = {
  name: string;
  hp?: number;
  maxHp?: number;
  initiative?: number;
  player: boolean;
};

export const newActor = (): Actor => ({
  name: "",
  hp: undefined,
  maxHp: undefined,
  initiative: undefined,
  player: false,
});
