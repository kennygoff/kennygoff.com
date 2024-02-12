import { generateShortId } from "../utils";

export enum Condition {
  Blinded = "Blinded",
  Charmed = "Charmed",
  Deafened = "Deafened",
  Exhaustion = "Exhaustion",
  Frightened = "Frightened",
  Grappled = "Grappled",
  Incapacitated = "Incapacitated",
  Invisible = "Invisible",
  Paralyzed = "Paralyzed",
  Poisoned = "Poisoned",
  Prone = "Prone",
  Restrained = "Restrained",
  Stunned = "Stunned",
  Unconscious = "Unconscious",
}

export type Concentration = {
  roundStarted: number;
  duration: number;
} & (
  | { type: "basic" }
  | {
      type: "single-target";
      target: string;
    }
  | {
      type: "multi-target";
      targets: string[];
    }
  | {
      type: "area-of-effect";
      area: string;
    }
);

export type Actor = {
  shortid?: string;
  name: string;
  hp?: number;
  maxHp?: number;
  dexterity?: number;
  initiative?: number;
  conditions: Condition[];
  concentration?: Concentration;
  player: boolean;
};

export const newActor = (): Actor => ({
  shortid: generateShortId(),
  name: "",
  conditions: [],
  player: false,
});

export const newActorForm = (): Actor => ({
  name: "",
  conditions: [],
  player: false,
});
