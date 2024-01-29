import { ChangeEvent, FormEvent, Fragment, useRef, useState } from "react";
import { createExport, processImport } from "./encounters/sqc-export";
import { Actor, newActor } from "./encounters/actor";
import { exportData, initiativeSort } from "./utils";
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
import { Encounter } from "./encounters/encounter";
import { DiceInput } from "./dice-input";
import { twMerge } from "tailwind-merge";

export default function EncounterTracker5e() {
  const [actors, setActors] = useState<Actor[]>([]);
  const [actorForm, setActorForm] = useState<Actor>(newActor());
  const [showData, setShowData] = useState(false);
  const [showCreate, setShowCreate] = useState<"import" | "add" | null>(null);
  const [encounter, setEncounter] = useState<Encounter>({
    state: "new",
    currentRound: 1,
    currentTurn: 1,
  });

  const jsonImportRef = useRef(null);

  const handleAddActor = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setActors([...actors, actorForm]);
    setActorForm(newActor());
  };

  const handleImportActors = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target === null) return;
    if (!e.target.files) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        if (event.target === null) return;
        const str = event.target.result;
        if (str === null) return;
        if (typeof str !== "string") return;
        const json = JSON.parse(str);
        const importedData = processImport(json);
        console.log(importedData);
        if (importedData !== null) {
          if (importedData.encounter) {
            setActors(importedData.encounter?.actors);
            setShowCreate(null);
            e.target.value = "";
          }
        }
      } catch {}
    };
    reader.readAsText(e.target.files[0]);
  };

  return (
    <main>
      <h1 className="px-2 py-2 bg-sky-700 font-semibold">
        Encounter Tracker (5e)
      </h1>
      <div className="p-2 m-2 rounded-md bg-slate-800">
        <div className="flex flex-row gap-2">
          <button
            className="px-3 py-1 rounded bg-slate-600 hover:bg-slate-900"
            onClick={() =>
              showCreate === "import"
                ? setShowCreate(null)
                : setShowCreate("import")
            }
          >
            Import from JSON file
          </button>
          <button
            className="px-3 py-1 rounded bg-slate-600 hover:bg-slate-900"
            onClick={() =>
              showCreate === "add" ? setShowCreate(null) : setShowCreate("add")
            }
          >
            Add Actor
          </button>
        </div>
        {showCreate === "import" ? (
          <>
            <h2 className="mt-2 mb-1 font-semibold">Import from JSON file</h2>
            <div className="flex flex-col">
              <input
                type="file"
                id="file"
                accept=".json"
                ref={jsonImportRef}
                onChange={handleImportActors}
              />
            </div>
          </>
        ) : null}
        {showCreate === "add" ? (
          <form onSubmit={handleAddActor}>
            <h2 className="mt-2 mb-1 font-semibold">Add Actor</h2>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col">
                <label className="text-sm font-semibold" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  value={actorForm.name}
                  className="px-2 py-1 rounded text-white bg-slate-900 border border-slate-600 outline-none focus:border-slate-300"
                  id="name"
                  name="name"
                  data-form-type="other"
                  autoComplete="off"
                  onChange={(e) => {
                    setActorForm({ ...actorForm, name: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold" htmlFor="hp">
                  HP
                </label>
                <input
                  type="number"
                  value={actorForm.hp === undefined ? "" : actorForm.hp}
                  className="px-2 py-1 rounded text-white bg-slate-900 border border-slate-600 outline-none focus:border-slate-300"
                  placeholder={
                    actorForm.maxHp !== undefined ? `${actorForm.maxHp}` : ""
                  }
                  id="hp"
                  name="hp"
                  data-form-type="other"
                  autoComplete="off"
                  onChange={(e) => {
                    setActorForm({
                      ...actorForm,
                      hp:
                        e.target.value !== ""
                          ? parseInt(e.target.value ?? 0, 10)
                          : undefined,
                    });
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold" htmlFor="maxhp">
                  Max HP
                </label>
                <input
                  type="number"
                  value={actorForm.maxHp === undefined ? "" : actorForm.maxHp}
                  className="px-2 py-1 rounded text-white bg-slate-900 border border-slate-600 outline-none focus:border-slate-300"
                  id="maxhp"
                  name="maxhp"
                  data-form-type="other"
                  autoComplete="off"
                  onChange={(e) => {
                    setActorForm({
                      ...actorForm,
                      maxHp:
                        e.target.value !== ""
                          ? parseInt(e.target.value ?? 0, 10)
                          : undefined,
                    });
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold" htmlFor="initiative">
                  Initiative
                </label>
                <input
                  type="number"
                  value={
                    actorForm.initiative === undefined
                      ? ""
                      : actorForm.initiative
                  }
                  className="px-2 py-1 rounded text-white bg-slate-900 border border-slate-600 outline-none focus:border-slate-300"
                  id="initiative"
                  name="initiative"
                  data-form-type="other"
                  autoComplete="off"
                  onChange={(e) => {
                    setActorForm({
                      ...actorForm,
                      initiative:
                        e.target.value !== ""
                          ? parseInt(e.target.value ?? 0, 10)
                          : undefined,
                    });
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold" htmlFor="dexterity">
                  Dexterity Score (DEX)
                </label>
                <input
                  type="number"
                  value={
                    actorForm.dexterity === undefined ? "" : actorForm.dexterity
                  }
                  className="px-2 py-1 rounded text-white bg-slate-900 border border-slate-600 outline-none focus:border-slate-300"
                  id="dexterity"
                  name="dexterity"
                  data-form-type="other"
                  autoComplete="off"
                  onChange={(e) => {
                    setActorForm({
                      ...actorForm,
                      dexterity:
                        e.target.value !== ""
                          ? parseInt(e.target.value ?? 0, 10)
                          : undefined,
                    });
                  }}
                />
              </div>
              <div className="flex flex-row gap-1.5 items-center">
                <input
                  type="checkbox"
                  checked={actorForm.player}
                  className="px-2 py-1 rounded text-white bg-slate-900 border border-slate-600 outline-none focus:border-slate-300"
                  data-form-type="other"
                  autoComplete="off"
                  id="player"
                  name="player"
                  onChange={(e) => {
                    setActorForm({
                      ...actorForm,
                      player: e.target.checked,
                    });
                  }}
                />
                <label className="text-sm font-semibold" htmlFor="player">
                  Player
                </label>
              </div>
            </div>
            <div className="mt-2">
              <button
                className="px-3 py-1 rounded bg-sky-600 hover:bg-sky-800"
                type="submit"
              >
                Add Actor
              </button>
            </div>
          </form>
        ) : null}
      </div>

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
                      encounter.currentTurn === actors.length
                        ? encounter.currentRound + 1
                        : encounter.currentRound,
                    currentTurn:
                      encounter.currentTurn === actors.length
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
                onClick={() =>
                  setEncounter({ ...encounter, state: "finished" })
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
            <div className="px-2 py-1 text-sm font-bold text-slate-300">
              Name
            </div>
            <div className="px-2 py-1 text-sm font-bold text-slate-300">
              Concentration
            </div>
            <div className="px-2 py-1 text-sm font-bold text-slate-300">HP</div>
          </>
          {actors.sort(initiativeSort).map((actor, i) => (
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
                    setActors([
                      ...actors.filter((a) => a.name !== actor.name),
                      { ...actor, initiative: newInitiative },
                    ])
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
                      setActors([
                        ...actors.filter((a) => a.name !== actor.name),
                        { ...actor, hp: newHP },
                      ])
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
      <div className="p-2 m-2 rounded-md bg-slate-800">
        <div className="flex flex-row gap-2">
          <button
            className="px-3 py-1 rounded bg-slate-600 hover:bg-slate-900"
            onClick={() => setShowData(!showData)}
          >
            Show Data
          </button>
          <button
            className="px-3 py-1 rounded bg-slate-600 hover:bg-slate-900"
            onClick={() => exportData(actors)}
          >
            Export
          </button>
        </div>
        {showData ? (
          <pre className="mt-2 p-1 bg-slate-900 rounded-sm font-mono">
            {JSON.stringify(createExport(actors), null, 2)}
          </pre>
        ) : null}
      </div>
    </main>
  );
}
