import type { PropsWithChildren } from "react";
import { createContext, useContext, useReducer } from "react";
import type { Actor } from "./encounters/actor";
import type { Encounter } from "./encounters/encounter";
import { NotUndefined, initiativeSort } from "./utils";

// https://www.aleksandrhovhannisyan.com/blog/managing-complex-state-react-usereducer/
// https://designcode.io/react-hooks-handbook-usereducer-with-usecontext-1
// https://medium.com/@seb_5882/a-short-guide-to-reacts-powerful-duo-usereducer-and-usecontext-23cea6f9ab35
// https://frontend.turing.edu/lessons/module-3/advanced-react-hooks.html
// https://react.dev/learn/scaling-up-with-reducer-and-context

type State = {
  actors: Actor[];
  encounter: Encounter;
};
type Action =
  | { type: "import"; actors: Actor[] }
  | { type: "add-actor"; actor: Actor }
  | { type: "update-actor"; shortid: Actor["shortid"]; actor: Partial<Actor> }
  | { type: "update-encounter"; encounter: Partial<Encounter> }
  | {
      type: "bump-actor";
      shortid: NotUndefined<Actor["shortid"]>;
      direction: 1 | -1;
    }
  | { type: "start-encounter" };

export const initialState: State = {
  actors: [],
  encounter: {
    state: "new",
    currentRound: 1,
    currentTurn: 1,
    options: {
      autoSort: true,
    },
  },
};

// See: https://stackoverflow.com/questions/59432133/how-to-type-state-and-dispatch-for-usereducer-typescript-and-react
const EncounterContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => {},
]);

export const encounterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "import": {
      return { ...state, actors: action.actors };
    }
    case "add-actor": {
      return { ...state, actors: [...state.actors, action.actor] };
    }
    case "update-actor": {
      return {
        ...state,
        actors: state.actors.map((a) =>
          a.shortid === action.shortid ? { ...a, ...action.actor } : a,
        ),
      };
    }
    case "bump-actor": {
      const index = state.actors.findIndex(
        (actor) => actor.shortid === action.shortid,
      );

      if (
        (index === 0 && action.direction === -1) ||
        (index === state.actors.length - 1 && action.direction === 1)
      ) {
        return state;
      }

      const actor = state.actors[index];
      const shiftedActors = [...state.actors];
      shiftedActors.splice(index, 1);
      shiftedActors.splice(index + action.direction, 0, actor);

      return { ...state, actors: shiftedActors };
    }
    case "start-encounter": {
      return {
        ...state,
        actors: state.encounter.options.autoSort
          ? [...state.actors].sort(initiativeSort)
          : state.actors,
        encounter: {
          ...state.encounter,
          state: "active",
          currentRound: 1,
          currentTurn: 1,
        },
      };
    }
    case "update-encounter": {
      return {
        ...state,
        encounter: {
          ...state.encounter,
          ...action.encounter,
        },
      };
    }
  }
};

export const EncounterProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(encounterReducer, initialState);

  return (
    <EncounterContext.Provider value={[state, dispatch]}>
      {children}
    </EncounterContext.Provider>
  );
};

export const useEncounterContext = () => {
  return useContext(EncounterContext);
};
