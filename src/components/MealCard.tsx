import type { Meal } from "../types";
import { ingredientLabel } from "../data/ingredients";

interface Props {
  meal: Meal;
  fridge: string[];
  highlight?: boolean;
}

export function MealCard({ meal, fridge, highlight }: Props) {
  const have = meal.ingredients.filter((i) => fridge.includes(i));
  const missing = meal.ingredients.filter((i) => !fridge.includes(i));
  const matchRatio = have.length / meal.ingredients.length;

  const card = (
    <div
      className={`rounded-card bg-ios-surface p-4 shadow-card ${
        highlight ? "border border-transparent" : "border border-ios-border"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex shrink-0 items-center justify-center rounded-2xl ${
            highlight ? "h-20 w-20 text-4xl" : "h-16 w-16 text-3xl"
          }`}
          style={{
            backgroundColor: `${meal.color}26`,
            boxShadow: highlight ? `0 0 24px ${meal.color}55` : undefined
          }}
        >
          {meal.emoji}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className={`font-semibold text-ios-label leading-tight ${highlight ? "text-[20px]" : "text-[17px]"}`}>
              {meal.name}
            </h3>
            {meal.needsShopping ? (
              <span className="shrink-0 rounded-pill bg-ios-orange/15 px-2.5 py-1 text-[11px] font-medium text-ios-orange">
                🛒 Einkauf nötig
              </span>
            ) : (
              <span className="shrink-0 rounded-pill bg-ios-green/15 px-2.5 py-1 text-[11px] font-medium text-ios-green">
                ✅ Alltags-Zutaten
              </span>
            )}
          </div>

          <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5 text-[13px] text-ios-secondary">
            <span>{meal.kcal} kcal</span>
            <span>{meal.protein} g Protein</span>
            <span>{meal.carbs} g Kohlenhydrate</span>
            <span>{meal.prepMinutes} Min</span>
          </div>

          <p className="mt-2 text-[13px] leading-snug text-ios-secondary">{meal.rationale}</p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {have.map((i) => (
              <span key={i} className="rounded-pill bg-ios-green/15 px-2 py-0.5 text-[11px] text-ios-green">
                {ingredientLabel(i)}
              </span>
            ))}
            {missing.map((i) => (
              <span key={i} className="rounded-pill bg-ios-surface2 px-2 py-0.5 text-[11px] text-ios-secondary">
                {ingredientLabel(i)}
              </span>
            ))}
          </div>

          {fridge.length > 0 && (
            <div className="mt-2 h-1 w-full overflow-hidden rounded-pill bg-ios-surface2">
              <div
                className="h-full rounded-pill bg-ios-blue transition-all"
                style={{ width: `${Math.round(matchRatio * 100)}%` }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (!highlight) return card;

  return (
    <div
      className="rounded-card p-[1.5px]"
      style={{ background: `linear-gradient(135deg, ${meal.color}, #0A84FF)` }}
    >
      {card}
    </div>
  );
}
