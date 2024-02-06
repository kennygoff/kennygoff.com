import type { PropsWithChildren } from "react";
import { createContext, useContext, useReducer } from "react";
import type { Actor } from "./encounters/actor";
import type { Encounter } from "./encounters/encounter";

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
  | { type: "update-encounter"; encounter: Partial<Encounter> };

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

export const encounterReducer = (state: State, action: Action) => {
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
