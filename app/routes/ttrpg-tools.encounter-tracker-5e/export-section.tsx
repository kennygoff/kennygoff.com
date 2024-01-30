import { useState } from "react";
import { useActorsContext } from "./actors";
import { exportData } from "./utils";
import { createExport } from "./encounters/sqc-export";

export const ExportSection = () => {
  const [showData, setShowData] = useState(false);
  const [state] = useActorsContext();

  return (
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
          onClick={() => exportData(state.actors)}
        >
          Export
        </button>
      </div>
      {showData ? (
        <pre className="mt-2 p-1 bg-slate-900 rounded-sm font-mono">
          {JSON.stringify(createExport(state.actors), null, 2)}
        </pre>
      ) : null}
    </div>
  );
};
