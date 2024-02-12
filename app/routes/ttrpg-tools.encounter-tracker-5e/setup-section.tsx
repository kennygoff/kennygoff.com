import type { ChangeEvent, FormEvent } from "react";
import { useRef, useState } from "react";
import { useEncounterContext } from "./encounter-context";
import type { Actor } from "./encounters/actor";
import { newActor } from "./encounters/actor";
import { processImport } from "./encounters/sqc-export";
import { generateShortId } from "./utils";

export const SetupSection = () => {
  const [showCreate, setShowCreate] = useState<"import" | "add" | null>(null);
  const [actorForm, setActorForm] = useState<Actor>(newActor());
  const [numberOfCopies, setNumberOfCopies] = useState(1);
  const [, dispatch] = useEncounterContext();

  const jsonImportRef = useRef(null);

  const handleAddActor = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (numberOfCopies <= 1) {
      dispatch({ type: "add-actor", actor: actorForm });
    } else {
      for (let i = 1; i <= numberOfCopies; i++) {
        dispatch({
          type: "add-actor",
          actor: { ...actorForm, name: `${actorForm.name} (${i})` },
        });
      }
    }
    setActorForm(newActor());
    setNumberOfCopies(1);
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
        if (importedData !== null) {
          if (importedData.encounter) {
            const actorsWithIds = importedData.encounter?.actors.map(
              (actor) => ({ ...actor, shortid: generateShortId() }),
            );
            dispatch({
              type: "import",
              actors: actorsWithIds,
            });
            setShowCreate(null);
            e.target.value = "";
          }
        }
      } catch {}
    };
    reader.readAsText(e.target.files[0]);
  };

  return (
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
                  actorForm.initiative === undefined ? "" : actorForm.initiative
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
            <div className="flex flex-col">
              <label className="text-sm font-semibold" htmlFor="numberOfCopies">
                Number of copies
              </label>
              <input
                type="number"
                value={numberOfCopies}
                className="px-2 py-1 rounded text-white bg-slate-900 border border-slate-600 outline-none focus:border-slate-300"
                id="numberOfCopies"
                name="numberOfCopies"
                data-form-type="other"
                autoComplete="off"
                min={1}
                step={1}
                onChange={(e) => {
                  setNumberOfCopies(parseInt(e.target.value, 10));
                }}
              />
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
  );
};
