import { useState } from "react";
import { TabBar, type Tab } from "./components/TabBar";
import { GradientBackdrop } from "./components/GradientBackdrop";
import { TodayScreen } from "./screens/TodayScreen";
import { NutritionScreen } from "./screens/NutritionScreen";
import { TrainingScreen } from "./screens/TrainingScreen";
import { SupplementsScreen } from "./screens/SupplementsScreen";
import { useLocalStorage } from "./hooks/useLocalStorage";
import type { Mode, Timing, WorkoutEntry } from "./types";

function today() {
  return new Date().toISOString().slice(0, 10);
}

export default function App() {
  const [tab, setTab] = useState<Tab>("today");
  const [fridge, setFridge] = useLocalStorage<string[]>("fridge", ["eier", "haferflocken", "banane", "milch"]);
  const [mode, setMode] = useLocalStorage<Mode>("mode", "student");
  const [timing, setTiming] = useState<Timing>("pre-workout");
  const [log, setLog] = useLocalStorage<WorkoutEntry[]>("workout-log", []);
  const [supplementLog, setSupplementLog] = useLocalStorage<Record<string, string[]>>("supplement-log", {});

  const takenToday = supplementLog[today()] ?? [];

  return (
    <div className="min-h-full bg-ios-bg font-sans text-ios-label">
      <GradientBackdrop />
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
        {tab === "supplements" && (
          <SupplementsScreen
            takenToday={takenToday}
            onToggle={(id) =>
              setSupplementLog((log) => {
                const day = today();
                const current = log[day] ?? [];
                const next = current.includes(id) ? current.filter((i) => i !== id) : [...current, id];
                return { ...log, [day]: next };
              })
            }
          />
        )}
      </div>
      <TabBar active={tab} onChange={setTab} />
    </div>
  );
}
