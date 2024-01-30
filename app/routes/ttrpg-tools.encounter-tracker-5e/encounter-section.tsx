import { Fragment, useState } from "react";
import { Encounter } from "./encounters/encounter";
import {
  ArrowUturnLeftIcon,
  CheckIcon,
  ClockIcon,
  ForwardIcon,
  HashtagIcon,
  PlayCircleIcon,
  PlayIcon,
  StopIcon,
} from "@heroicons/react/24/solid";
import { DiceInput } from "./components/dice-input";
import { twMerge } from "tailwind-merge";
import { useActorsContext } from "./actors";
import { initiativeSort } from "./utils";

export const EncounterSection = () => {
  const [encounter, setEncounter] = useState<Encounter>({
    state: "new",
    currentRound: 1,
    currentTurn: 1,
  });
  const [state, dispatch] = useActorsContext();

  return (
    <div className="bg-slate-800 rounded m-2">
      <div className="p-2 flex flex-row gap-2">
        {encounter.state === "new" ? (
          <button
            className="px-4 py-2 rounded-md font-bold bg-emerald-600 hover:bg-emerald-800 flex flex-row items-center gap-1"
            onClick={() =>
              setEncounter({
                ...encounter,
                state: "active",
                currentRound: 1,
                currentTurn: 1,
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
                setEncounter({
                  ...encounter,
                  currentRound:
                    encounter.currentTurn === state.actors.length
                      ? encounter.currentRound + 1
                      : encounter.currentRound,
                  currentTurn:
                    encounter.currentTurn === state.actors.length
                      ? 1
                      : encounter.currentTurn + 1,
                })
              }
            >
              <ForwardIcon className="w-4 h-4 text-white" />
              Next
            </button>
            <button
              className="px-4 py-2 rounded-md font-bold bg-rose-600 hover:bg-rose-800 flex flex-row items-center gap-1"
              onClick={() => setEncounter({ ...encounter, state: "finished" })}
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
                setEncounter({
                  ...encounter,
                  state: "new",
                  currentRound: 1,
                  currentTurn: 1,
                })
              }
            >
              <ArrowUturnLeftIcon className="w-4 h-4 text-white" />
              Reset
            </button>
          </>
        ) : null}
        {encounter.state !== "new" ? (
          <>
            <div className="px-4 py-2 rounded-md font-bold bg-slate-700 flex flex-row items-center gap-1">
              <ClockIcon className="w-4 h-4 text-white" />
              Round {encounter.currentRound}
            </div>
            <div className="px-4 py-2 rounded-md font-bold bg-slate-700 flex flex-row items-center gap-1">
              <HashtagIcon className="w-4 h-4 text-white" />
              Turn {encounter.currentTurn}
            </div>
          </>
        ) : null}
      </div>
      <div className="grid grid-cols-[0fr_0fr_1fr_0fr_0fr]">
        <>
          <div className="px-2 flex items-center justify-center">
            <PlayCircleIcon className="w-4 h-4 text-slate-300" />
          </div>
          <div className="px-2 py-1 text-sm font-bold text-slate-300">
            Initiative
          </div>
          <div className="px-2 py-1 text-sm font-bold text-slate-300">Name</div>
          <div className="px-2 py-1 text-sm font-bold text-slate-300">
            Concentration
          </div>
          <div className="px-2 py-1 text-sm font-bold text-slate-300">HP</div>
        </>
        {[...state.actors].sort(initiativeSort).map((actor, i) => (
          <Fragment key={actor.name}>
            <div className="px-2 flex items-center justify-center">
              {encounter.state === "active" &&
              encounter.currentTurn - 1 === i ? (
                <PlayIcon className="w-4 h-4 text-emerald-500" />
              ) : null}
            </div>
            <div className="px-2 py-1">
              <DiceInput
                value={actor.initiative}
                onChangeValue={(newInitiative) =>
                  dispatch({
                    type: "replace-by-name",
                    name: actor.name,
                    actor: { ...actor, initiative: newInitiative },
                  })
                }
              />
            </div>
            <div className="px-2 py-1 flex items-center gap-2">
              {actor.name}
              {actor.player ? (
                <span className="rounded-sm px-1 inline-block font-bold bg-sky-500 text-white text-xs">
                  PC
                </span>
              ) : null}
            </div>
            <div className="px-2 py-1">
              {actor.concentration ? (
                <CheckIcon className="w-4 h-4 text-white" />
              ) : null}
            </div>
            <div className="flex flex-col">
              <div className="px-2 py-1 flex flex-row gap-1 items-center">
                <DiceInput
                  value={actor.hp ?? actor.maxHp ?? 0}
                  onChangeValue={(newHP) =>
                    dispatch({
                      type: "replace-by-name",
                      name: actor.name,
                      actor: { ...actor, hp: newHP },
                    })
                  }
                />
                <span>/</span>
                <span>{actor.maxHp}</span>
              </div>
              <div className="px-2 pb-1">
                <div className="rounded-full bg-slate-700 w-full h-1 overflow-hidden">
                  <div
                    className={twMerge(
                      `h-full`,
                      Math.floor(actor.hp ?? actor.maxHp ?? 100) /
                        Math.floor(actor.maxHp ?? 100) <
                        0.5
                        ? "bg-red-500"
                        : "bg-emerald-500",
                    )}
                    style={{
                      width: `${(Math.floor(actor.hp ?? actor.maxHp ?? 100) / Math.floor(actor.maxHp ?? 100)) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
