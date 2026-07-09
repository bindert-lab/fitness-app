import { useState } from "react";
import { TabBar, type Tab } from "./components/TabBar";
import { TodayScreen } from "./screens/TodayScreen";
import { NutritionScreen } from "./screens/NutritionScreen";
import { TrainingScreen } from "./screens/TrainingScreen";
import { useLocalStorage } from "./hooks/useLocalStorage";
import type { Mode, Timing, WorkoutSet } from "./types";

export default function App() {
  const [tab, setTab] = useState<Tab>("today");
  const [fridge, setFridge] = useLocalStorage<string[]>("fridge", ["eier", "haferflocken", "banane", "milch"]);
  const [mode, setMode] = useLocalStorage<Mode>("mode", "student");
  const [timing, setTiming] = useState<Timing>("pre-workout");
  const [log, setLog] = useLocalStorage<WorkoutSet[]>("workout-log", []);

  return (
    <div className="min-h-full bg-ios-bg font-sans text-ios-label">
      <div className="mx-auto max-w-md pt-[env(safe-area-inset-top)]">
        {tab === "today" && (
          <TodayScreen
            fridge={fridge}
            mode={mode}
            onModeChange={setMode}
            timing={timing}
            onTimingChange={setTiming}
          />
        )}
        {tab === "nutrition" && (
          <NutritionScreen
            fridge={fridge}
            onFridgeAdd={(item) => setFridge((f) => (f.includes(item) ? f : [...f, item]))}
            onFridgeRemove={(item) => setFridge((f) => f.filter((i) => i !== item))}
            mode={mode}
            onModeChange={setMode}
          />
        )}
        {tab === "training" && (
          <TrainingScreen
            log={log}
            onAdd={(entry) => setLog((l) => [entry, ...l])}
            onRemove={(id) => setLog((l) => l.filter((e) => e.id !== id))}
          />
        )}
      </div>
      <TabBar active={tab} onChange={setTab} />
    </div>
  );
}
