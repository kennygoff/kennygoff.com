import { ChangeEvent, FormEvent, Fragment, useRef, useState } from "react";

type Actor = {
  name: string;
  hp?: number;
  maxHp?: number;
  initiative?: number;
  player: boolean;
};

type SQCExport = {
  type: "SQC";
  version: string;
  encounter?: {
    actors: Actor[];
  };
};

const createExport = (actors: Actor[]) => {
  return {
    type: "SQC",
    version: "0.0-dev",
    encounter: {
      actors,
    },
  };
};

const isSQCExport = (data: any): data is SQCExport => {
  return (
    typeof data.type === "string" &&
    data.type === "SQC" &&
    typeof data.version === "string"
  );
};

const newActor = (): Actor => ({
  name: "",
  hp: undefined,
  maxHp: undefined,
  initiative: undefined,
  player: false,
});

const initiativeSort = (a: Actor, b: Actor) =>
  (b.initiative ?? 0) - (a.initiative ?? 0);

const exportData = (data: any) => {
  const exportObj = createExport(data);
  const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
    JSON.stringify(exportObj),
  )}`;
  const link = document.createElement("a");
  link.href = jsonString;
  link.download = "data.json";

  link.click();
};

const processImport = (data: unknown): SQCExport | null => {
  if (isSQCExport(data)) {
    return data;
  }

  return null;
};

export default function EncounterTracker5e() {
  const [actors, setActors] = useState<Actor[]>([]);
  const [actorForm, setActorForm] = useState<Actor>(newActor());
  const [showData, setShowData] = useState(false);
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
      <div className="p-2 bg-slate-800 m-2 rounded">
        <h2 className="mb-1 font-semibold">Import Actors</h2>
        <div className="flex flex-col">
          <input
            type="file"
            id="file"
            accept=".json"
            ref={jsonImportRef}
            onChange={handleImportActors}
          />
        </div>
      </div>
      <form className="p-2 bg-slate-800 m-2 rounded" onSubmit={handleAddActor}>
        <h2 className="mb-1 font-semibold">Add Actor</h2>
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
      <div className="bg-slate-800 m-2 grid grid-cols-[0fr_1fr_1fr]">
        <>
          <div className="px-2 py-1">Initiative</div>
          <div className="px-2 py-1">Name</div>
          <div className="px-2 py-1">HP</div>
        </>
        {actors.sort(initiativeSort).map((actor) => (
          <Fragment key={actor.name}>
            <div className="px-2 py-1">{actor.initiative}</div>
            <div className="px-2 py-1 flex items-center gap-2">
              {actor.name}
              {actor.player ? (
                <span className="rounded-sm px-1 inline-block font-bold bg-sky-500 text-white text-xs">
                  PC
                </span>
              ) : null}
            </div>
            <div className="px-2 py-1">
              {actor.hp ?? actor.maxHp}/{actor.maxHp}
            </div>
          </Fragment>
        ))}
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
            {createExport(JSON.stringify(actors, null, 2))}
          </pre>
        ) : null}
      </div>
    </main>
  );
}
