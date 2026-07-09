import { meals } from "../data/meals";
import { MealCard } from "../components/MealCard";
import { SegmentedControl } from "../components/SegmentedControl";
import { recommend } from "../lib/recommend";
import type { Mode, Timing } from "../types";

interface Props {
  fridge: string[];
  mode: Mode;
  onModeChange: (mode: Mode) => void;
  timing: Timing;
  onTimingChange: (timing: Timing) => void;
}

const TIMING_OPTIONS: { value: Timing; label: string }[] = [
  { value: "pre-workout", label: "Vor dem Training" },
  { value: "post-workout", label: "Nach dem Training" },
  { value: "general", label: "Allgemein" }
];

export function TodayScreen({ fridge, mode, onModeChange, timing, onTimingChange }: Props) {
  const results = recommend(meals, timing, mode, fridge);
  const top = results[0];

  return (
    <div className="space-y-5 px-4 pb-28 pt-4">
      <header>
        <p className="text-[13px] font-medium text-ios-secondary">Hey 👋</p>
        <h1
          className="bg-clip-text text-[32px] font-bold leading-tight text-transparent"
          style={{ backgroundImage: "linear-gradient(135deg, #FFFFFF, #8E8E93)" }}
        >
          Was isst du jetzt?
        </h1>
      </header>

      <SegmentedControl options={TIMING_OPTIONS} value={timing} onChange={onTimingChange} />

      <div className="flex items-center justify-between rounded-card bg-ios-surface border border-ios-border px-4 py-3">
        <span className="text-[14px] text-ios-secondary">Modus</span>
        <SegmentedControl
          options={[
            { value: "student" as Mode, label: "🎓 Student" },
            { value: "normal" as Mode, label: "🛒 Normal" }
          ]}
          value={mode}
          onChange={onModeChange}
        />
      </div>

      {top ? (
        <div>
          <p className="mb-2 px-1 text-[13px] font-semibold uppercase tracking-wide text-ios-secondary">
            Beste Empfehlung
          </p>
          <MealCard meal={top} fridge={fridge} highlight />
        </div>
      ) : (
        <p className="text-center text-ios-secondary">Keine Vorschläge für diese Kombination.</p>
      )}

      {results.length > 1 && (
        <div>
          <p className="mb-2 px-1 text-[13px] font-semibold uppercase tracking-wide text-ios-secondary">
            Weitere Ideen
          </p>
          <div className="space-y-3">
            {results.slice(1, 4).map((meal) => (
              <MealCard key={meal.id} meal={meal} fridge={fridge} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
