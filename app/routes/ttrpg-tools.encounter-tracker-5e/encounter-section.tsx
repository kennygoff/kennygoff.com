import {
  ArrowUturnLeftIcon,
  CheckIcon,
  ClockIcon,
  ForwardIcon,
  HashtagIcon,
  PlayIcon,
  StopIcon,
} from "@heroicons/react/24/solid";
import { useEncounterContext } from "./encounter-context";
import { ActorRow } from "./components/actor-row";

export const EncounterSection = () => {
  const [{ encounter, actors }, dispatch] = useEncounterContext();

  return (
    <div className="bg-slate-800 rounded m-2">
      <div className="p-2 grid grid-cols-2 sm:flex sm:flex-row gap-2">
        {encounter.state === "new" ? (
          <button
            className="px-4 py-2 col-span-full justify-center sm:w-auto rounded-md font-bold bg-emerald-600 hover:bg-emerald-800 flex flex-row items-center gap-1"
            onClick={() =>
              dispatch({
                type: "start-encounter",
              })
            }
          >
            <PlayIcon className="w-4 h-4 text-white" />
            Start
          </button>
        ) : null}
        {encounter.state === "active" ? (
          <>
            <button
              className="px-4 py-2 rounded-md font-bold bg-slate-600 hover:bg-slate-900 flex flex-row items-center gap-1"
              onClick={() =>
                dispatch({
                  type: "update-encounter",
                  encounter: {
                    currentRound:
                      encounter.currentTurn === actors.length
                        ? encounter.currentRound + 1
                        : encounter.currentRound,
                    currentTurn:
                      encounter.currentTurn === actors.length
                        ? 1
                        : encounter.currentTurn + 1,
                  },
                })
              }
            >
              <ForwardIcon className="w-4 h-4 text-white" />
              Next
            </button>
            <button
              className="px-4 py-2 rounded-md font-bold bg-rose-600 hover:bg-rose-800 flex flex-row items-center gap-1"
              onClick={() =>
                dispatch({
                  type: "update-encounter",
                  encounter: { state: "finished" },
                })
              }
            >
              <StopIcon className="w-4 h-4 text-white" />
              Finish
            </button>
          </>
        ) : null}
        {encounter.state === "finished" ? (
          <>
            <div className="px-4 py-2 rounded-md font-bold bg-slate-700 flex flex-row items-center gap-1">
              <CheckIcon className="w-4 h-4 text-white" />
              Completed
            </div>
            <button
              className="px-4 py-2 rounded-md font-bold bg-slate-600 hover:bg-slate-900 flex flex-row items-center gap-1"
              onClick={() =>
                dispatch({
                  type: "update-encounter",
                  encounter: {
                    state: "new",
                    currentRound: 1,
                    currentTurn: 1,
                  },
                })
              }
            >
              <ArrowUturnLeftIcon className="w-4 h-4 text-white" />
              Reset
            </button>
          </>
        ) : null}
      </div>
      {encounter.state !== "new" ? (
        <div className="p-2 grid grid-cols-2 sm:flex sm:flex-row">
          <div className="px-4 py-2 rounded-l font-bold bg-slate-600 flex flex-row items-center gap-1">
            <ClockIcon className="w-4 h-4 text-white" />
            Round {encounter.currentRound}
          </div>
          <div className="px-4 py-2 rounded-r font-bold bg-slate-700 flex flex-row items-center gap-1">
            <HashtagIcon className="w-4 h-4 text-white" />
            Turn {encounter.currentTurn}
          </div>
        </div>
      ) : null}
      <div className="grid grid-cols-1 sm:grid-cols-[0fr_0fr_1fr_0fr] p-2 gap-0 sm:gap-y-0.5">
        <>
          <div className="hidden sm:flex pl-3 items-center justify-center">
            <HashtagIcon className="w-4 h-4 text-slate-300" />
          </div>
          <div className="hidden sm:block px-2 py-1 text-sm font-bold text-slate-300 text-center">
            <span className="hidden sm:inline">Init.</span>
            <span className="sm:hidden">Init.</span>
          </div>
          <div className="hidden sm:block px-2 py-1 text-sm font-bold text-slate-300">
            Name
          </div>
          <div className="hidden sm:block px-2 py-1 text-sm font-bold text-slate-300">
            HP
          </div>
        </>
        {actors.map((actor, i) => (
          <ActorRow
            key={actor.shortid}
            turn={i + 1}
            actor={actor}
            active={encounter.state === "active"}
            currentTurn={
              encounter.state === "active" && encounter.currentTurn - 1 === i
            }
          />
        ))}
      </div>
    </div>
  );
};
