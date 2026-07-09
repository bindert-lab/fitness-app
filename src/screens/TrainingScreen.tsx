import { useState } from "react";
import type { CardioEntry, StrengthEntry, WorkoutEntry } from "../types";
import { SegmentedControl } from "../components/SegmentedControl";

interface Props {
  log: WorkoutEntry[];
  onAdd: (entry: WorkoutEntry) => void;
  onRemove: (id: string) => void;
}

const EXERCISE_PRESETS = ["Bankdrücken", "Kniebeuge", "Kreuzheben", "Klimmzüge", "Schulterdrücken", "Rudern"];
const ACTIVITY_PRESETS = ["Laufen", "Radfahren", "Schwimmen", "Wandern"];

export function TrainingScreen({ log, onAdd, onRemove }: Props) {
  const [kind, setKind] = useState<"strength" | "cardio">("strength");

  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState(3);
  const [reps, setReps] = useState(10);
  const [weight, setWeight] = useState(20);

  const [activity, setActivity] = useState("Laufen");
  const [distanceKm, setDistanceKm] = useState(5);
  const [durationMin, setDurationMin] = useState(30);

  function addEntry() {
    const date = new Date().toISOString().slice(0, 10);
    if (kind === "strength") {
      const name = exercise.trim();
      if (!name) return;
      onAdd({ id: crypto.randomUUID(), kind: "strength", exercise: name, sets, reps, weight, date });
      setExercise("");
    } else {
      onAdd({ id: crypto.randomUUID(), kind: "cardio", activity, distanceKm, durationMin, date });
    }
  }

  const grouped = log.reduce<Record<string, WorkoutEntry[]>>((acc, entry) => {
    (acc[entry.date] ??= []).push(entry);
    return acc;
  }, {});
  const dates = Object.keys(grouped).sort((a, b) => (a < b ? 1 : -1));

  return (
    <div className="space-y-5 px-4 pb-28 pt-4">
      <header>
        <h1 className="text-[28px] font-bold text-ios-label">Training</h1>
        <p className="text-[13px] text-ios-secondary">Kraft oder Ausdauer — halte fest, was du machst.</p>
      </header>

      <div className="rounded-card bg-ios-surface border border-ios-border p-4">
        <SegmentedControl
          options={[
            { value: "strength" as const, label: "🏋️ Kraft" },
            { value: "cardio" as const, label: "🏃 Ausdauer" }
          ]}
          value={kind}
          onChange={setKind}
        />

        {kind === "strength" ? (
          <>
            <input
              value={exercise}
              onChange={(e) => setExercise(e.target.value)}
              placeholder="Übung eingeben…"
              className="mt-3 w-full rounded-pill bg-ios-surface2 px-4 py-2.5 text-[15px] text-ios-label placeholder:text-ios-secondary outline-none focus:ring-2 focus:ring-ios-blue"
            />
            <div className="mt-2 flex flex-wrap gap-1.5">
              {EXERCISE_PRESETS.map((name) => (
                <button
                  key={name}
                  onClick={() => setExercise(name)}
                  className="rounded-pill border border-ios-border px-3 py-1.5 text-[13px] text-ios-secondary active:opacity-70"
                >
                  {name}
                </button>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <Field label="Sätze" value={sets} onChange={setSets} />
              <Field label="Wdh." value={reps} onChange={setReps} />
              <Field label="kg" value={weight} onChange={setWeight} />
            </div>
          </>
        ) : (
          <>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {ACTIVITY_PRESETS.map((name) => (
                <button
                  key={name}
                  onClick={() => setActivity(name)}
                  className={`rounded-pill px-3 py-1.5 text-[13px] ${
                    activity === name ? "bg-ios-blue text-white" : "border border-ios-border text-ios-secondary"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Field label="km" value={distanceKm} onChange={setDistanceKm} step={0.1} />
              <Field label="Minuten" value={durationMin} onChange={setDurationMin} />
            </div>
          </>
        )}

        <button
          onClick={addEntry}
          className="mt-4 w-full rounded-pill bg-ios-blue py-2.5 text-[15px] font-semibold text-white active:opacity-70"
        >
          Eintragen
        </button>
      </div>

      {dates.length === 0 ? (
        <p className="text-center text-ios-secondary">Noch keine Einträge. Leg direkt los! 💪</p>
      ) : (
        dates.map((date) => (
          <div key={date}>
            <p className="mb-2 px-1 text-[13px] font-semibold uppercase tracking-wide text-ios-secondary">
              {formatDate(date)}
            </p>
            <div className="space-y-2">
              {grouped[date].map((entry) => (
                <div
                  key={entry.id}
                  className="flex items-center justify-between rounded-card bg-ios-surface border border-ios-border px-4 py-3"
                >
                  {entry.kind === "strength" ? (
                    <div>
                      <p className="text-[15px] font-medium text-ios-label">🏋️ {entry.exercise}</p>
                      <p className="text-[13px] text-ios-secondary">
                        {entry.sets} × {entry.reps} Wdh. · {entry.weight} kg
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-[15px] font-medium text-ios-label">🏃 {entry.activity}</p>
                      <p className="text-[13px] text-ios-secondary">
                        {entry.distanceKm} km · {entry.durationMin} Min
                        {entry.distanceKm > 0 && ` · ${(entry.durationMin / entry.distanceKm).toFixed(1)} min/km`}
                      </p>
                    </div>
                  )}
                  <button onClick={() => onRemove(entry.id)} className="text-[13px] text-ios-red active:opacity-70">
                    Löschen
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  step
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  step?: number;
}) {
  return (
    <label className="flex flex-col items-center gap-1">
      <span className="text-[11px] text-ios-secondary">{label}</span>
      <input
        type="number"
        step={step ?? 1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full rounded-xl bg-ios-surface2 px-2 py-2 text-center text-[15px] text-ios-label outline-none focus:ring-2 focus:ring-ios-blue"
      />
    </label>
  );
}

function formatDate(iso: string) {
  const today = new Date().toISOString().slice(0, 10);
  if (iso === today) return "Heute";
  return new Date(iso).toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" });
}
