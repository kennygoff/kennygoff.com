import { CheckIcon, PlayIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { DiceInput } from "./dice-input";
import { Actor } from "../encounters/actor";
import { useActorsContext } from "../actors";
import { twMerge } from "tailwind-merge";
import { clamp, hpPercentage } from "../utils";

type Props = {
  actor: Actor;
  active: boolean;
  currentTurn: boolean;
  turn: number;
};

export const ActorRow = ({ actor, active, currentTurn, turn }: Props) => {
  const [, dispatch] = useActorsContext();

  return (
    <Fragment key={actor.name}>
      <div
        className={twMerge(
          "px-2 sm:pl-3 sm:pr-0 py-1 flex items-center bg-slate-700 rounded-l-sm",
          "justify-start",
          "sm:justify-center",
          currentTurn ? "bg-slate-600" : null,
        )}
      >
        {currentTurn ? (
          <PlayIcon className="w-4 h-4 text-emerald-500" />
        ) : (
          <div className="text-sm leading-4 font-bold text-slate-300">
            {turn}
          </div>
        )}
      </div>
      <div
        className={twMerge(
          "px-2 py-1 bg-slate-700 flex flex-row justify-between items-center sm:justify-center",
          currentTurn ? "bg-slate-600" : null,
        )}
      >
        <div className="text-sm font-bold text-slate-300 sm:hidden">
          Initiative
        </div>
        {active ? (
          <div className="text-white outline-none focus:border-slate-300 font-bold">
            {actor.initiative}
          </div>
        ) : (
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
        )}
      </div>
      <div
        className={twMerge(
          "px-2 py-1 flex flex-col items-start justify-center bg-slate-600",
          currentTurn ? "bg-slate-600" : null,
        )}
      >
        <span className="font-bold">{actor.name}</span>
      </div>
      <div
        className={twMerge(
          "p-1 bg-slate-700",
          "flex flex-col col-span-full rounded-b-sm mb-1",
          "sm:col-auto sm:rounded-r-sm sm:rounded-l-none sm:mb-0",
          currentTurn ? "bg-slate-600" : null,
        )}
      >
        <div className="px-2 py-1 flex flex-row justify-between items-center">
          <div className="text-sm font-bold text-slate-300 sm:hidden">HP</div>
          <div className="flex flex-row gap-1 items-center">
            <DiceInput
              value={actor.hp ?? actor.maxHp ?? 0}
              range={[0, actor.maxHp]}
              onChangeValue={(newHP) => {
                console.log("newHP", newHP);
                dispatch({
                  type: "replace-by-name",
                  name: actor.name,
                  actor: { ...actor, hp: newHP },
                });
              }}
            />
            <span>/</span>
            <span>{actor.maxHp}</span>
          </div>
        </div>
        <div className="px-2 pb-1">
          <div className="rounded-full bg-slate-900 w-full h-1 overflow-hidden">
            <div
              className={twMerge(
                `h-full`,
                hpPercentage(actor.hp, actor.maxHp) < 0.5
                  ? "bg-red-500"
                  : "bg-emerald-500",
              )}
              style={{
                width: `${clamp(hpPercentage(actor.hp, actor.maxHp) * 100, 0, 100)}%`,
              }}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
