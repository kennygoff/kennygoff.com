import { ActorsProvider } from "./actors";
import { SetupSection } from "./setup-section";
import { ExportSection } from "./export-section";
import { EncounterSection } from "./encounter-section";

export default function EncounterTracker5e() {
  return (
    <ActorsProvider>
      <main>
        <h1 className="px-2 py-2 bg-sky-700 font-semibold">
          Encounter Tracker (5e)
        </h1>
        <SetupSection />
        <EncounterSection />
        <ExportSection />
      </main>
    </ActorsProvider>
  );
}
