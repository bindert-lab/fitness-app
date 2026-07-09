import { meals } from "../data/meals";
import { MealCard } from "../components/MealCard";
import { FridgeChips } from "../components/FridgeChips";
import { SegmentedControl } from "../components/SegmentedControl";
import { recommend } from "../lib/recommend";
import type { Mode, Timing } from "../types";

interface Props {
  fridge: string[];
  onFridgeAdd: (item: string) => void;
  onFridgeRemove: (item: string) => void;
  mode: Mode;
  onModeChange: (mode: Mode) => void;
}

export function NutritionScreen({ fridge, onFridgeAdd, onFridgeRemove, mode, onModeChange }: Props) {
  const timings: Timing[] = ["pre-workout", "post-workout", "general"];
  const labels: Record<Timing, string> = {
    "pre-workout": "🔋 Vor dem Training",
    "post-workout": "💪 Nach dem Training",
    general: "🍽️ Allgemein"
  };

  return (
    <div className="space-y-5 px-4 pb-28 pt-4">
      <header className="flex items-center justify-between">
        <h1 className="text-[28px] font-bold text-ios-label">Ernährung</h1>
        <SegmentedControl
          options={[
            { value: "student" as Mode, label: "🎓" },
            { value: "normal" as Mode, label: "🛒" }
          ]}
          value={mode}
          onChange={onModeChange}
        />
      </header>

      <FridgeChips fridge={fridge} onAdd={onFridgeAdd} onRemove={onFridgeRemove} />

      {timings.map((timing) => {
        const results = recommend(meals, timing, mode, fridge);
        if (results.length === 0) return null;
        return (
          <div key={timing}>
            <p className="mb-2 px-1 text-[13px] font-semibold uppercase tracking-wide text-ios-secondary">
              {labels[timing]}
            </p>
            <div className="space-y-3">
              {results.map((meal) => (
                <MealCard key={meal.id} meal={meal} fridge={fridge} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
