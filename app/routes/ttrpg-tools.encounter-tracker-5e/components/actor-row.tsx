import { CheckIcon, PlayIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { DiceInput } from "./dice-input";
import { Actor } from "../encounters/actor";
import { useActorsContext } from "../actors";
import { twMerge } from "tailwind-merge";

type Props = {
  actor: Actor;
  active: boolean;
  turn: number;
};

export const ActorRow = ({ actor, active, turn }: Props) => {
  const [, dispatch] = useActorsContext();

  return (
    <Fragment key={actor.name}>
      <div
        className={twMerge(
          "pl-3 py-1 flex items-center justify-center bg-slate-700 rounded-l-sm",
          active ? "bg-slate-600" : null,
        )}
      >
        {active ? (
          <PlayIcon className="w-4 h-4 text-emerald-500" />
        ) : (
          <div className="text-sm font-bold text-slate-300">{turn}</div>
        )}
      </div>
      <div
        className={twMerge(
          "px-2 py-1 bg-slate-700 flex items-center justify-center",
          active ? "bg-slate-600" : null,
        )}
      >
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
      <div
        className={twMerge(
          "px-2 py-1 flex flex-col items-start justify-center bg-slate-700",
          active ? "bg-slate-600" : null,
        )}
      >
        <span className="font-bold">{actor.name}</span>
      </div>
      <div
        className={twMerge(
          "flex flex-col bg-slate-700 rounded-r-sm p-1",
          active ? "bg-slate-600" : null,
        )}
      >
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
          <div className="rounded-full bg-slate-900 w-full h-1 overflow-hidden">
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
  );
};
