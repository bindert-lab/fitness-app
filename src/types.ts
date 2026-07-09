export type Timing = "pre-workout" | "post-workout" | "general";
export type Mode = "student" | "normal";

export interface Meal {
  id: string;
  name: string;
  emoji: string;
  color: string;
  timing: Timing[];
  kcal: number;
  protein: number;
  carbs: number;
  prepMinutes: number;
  ingredients: string[];
  needsShopping: boolean;
  rationale: string;
}

export interface WorkoutSet {
  id: string;
  exercise: string;
  sets: number;
  reps: number;
  weight: number;
  date: string;
}
