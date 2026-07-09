import type { Meal, Mode, Timing } from "../types";

export function matchRatio(meal: Meal, fridge: string[]): number {
  const have = meal.ingredients.filter((i) => fridge.includes(i)).length;
  return have / meal.ingredients.length;
}

export function recommend(meals: Meal[], timing: Timing, mode: Mode, fridge: string[]): Meal[] {
  return meals
    .filter((m) => m.timing.includes(timing))
    .filter((m) => mode === "normal" || !m.needsShopping)
    .sort((a, b) => matchRatio(b, fridge) - matchRatio(a, fridge));
}
