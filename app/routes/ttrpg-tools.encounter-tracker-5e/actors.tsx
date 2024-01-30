import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";
import { Actor } from "./encounters/actor";

// https://www.aleksandrhovhannisyan.com/blog/managing-complex-state-react-usereducer/
// https://designcode.io/react-hooks-handbook-usereducer-with-usecontext-1
// https://medium.com/@seb_5882/a-short-guide-to-reacts-powerful-duo-usereducer-and-usecontext-23cea6f9ab35
// https://frontend.turing.edu/lessons/module-3/advanced-react-hooks.html
// https://react.dev/learn/scaling-up-with-reducer-and-context

type State = {
  actors: Actor[];
};
type Action =
  | { type: "add"; actor: Actor }
  | { type: "import"; actors: Actor[] }
  | { type: "replace-by-name"; name: string; actor: Actor };

export const initialActors = {
  actors: [],
};

// See: https://stackoverflow.com/questions/59432133/how-to-type-state-and-dispatch-for-usereducer-typescript-and-react
const ActorsContext = createContext<[State, React.Dispatch<Action>]>([
  initialActors,
  () => {},
]);

export const actorsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "add": {
      return { ...state, actors: [...state.actors, action.actor] };
    }
    case "import": {
      return { ...state, actors: action.actors };
    }
    case "replace-by-name": {
      return {
        ...state,
        actors: [
          ...state.actors.filter((a) => a.name !== action.name),
          action.actor,
        ],
      };
    }
  }
};

export const ActorsProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(actorsReducer, initialActors);

  return (
    <ActorsContext.Provider value={[state, dispatch]}>
      {children}
    </ActorsContext.Provider>
  );
};

export const useActorsContext = () => {
  return useContext(ActorsContext);
};
