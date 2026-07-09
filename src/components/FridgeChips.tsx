import { useState } from "react";
import { QUICK_ADD_IDS, ingredientLabel, ingredients, normalizeIngredient } from "../data/ingredients";

interface Props {
  fridge: string[];
  onAdd: (item: string) => void;
  onRemove: (item: string) => void;
}

export function FridgeChips({ fridge, onAdd, onRemove }: Props) {
  const [input, setInput] = useState("");

  function submit() {
    const value = normalizeIngredient(input);
    if (value && !fridge.includes(value)) onAdd(value);
    setInput("");
  }

  const known = ingredients.map((i) => i.id);
  const unrecognized = fridge.filter((f) => !known.includes(f));

  return (
    <div className="rounded-card bg-ios-surface border border-ios-border p-4">
      <h2 className="text-[15px] font-semibold text-ios-label">🧊 Dein Kühlschrank</h2>
      <p className="mt-0.5 text-[13px] text-ios-secondary">
        Trag ein, was du gerade da hast — die Vorschläge passen sich automatisch an. Über {ingredients.length} Zutaten
        werden erkannt, inkl. gängiger Alternativnamen (z. B. „Naturjoghurt“ → Joghurt).
      </p>

      <div className="mt-3 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder="z. B. Skyr, Hähnchenbrust…"
          className="flex-1 rounded-pill bg-ios-surface2 px-4 py-2.5 text-[15px] text-ios-label placeholder:text-ios-secondary outline-none focus:ring-2 focus:ring-ios-blue"
        />
        <button
          onClick={submit}
          className="rounded-pill bg-ios-blue px-4 py-2.5 text-[15px] font-medium text-white active:opacity-70"
        >
          +
        </button>
      </div>

      {fridge.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {fridge.map((item) => (
            <button
              key={item}
              onClick={() => onRemove(item)}
              className="flex items-center gap-1 rounded-pill bg-ios-blue/15 px-3 py-1.5 text-[13px] text-ios-blue active:opacity-70"
            >
              {ingredientLabel(item)} <span className="text-ios-blue/60">✕</span>
            </button>
          ))}
        </div>
      )}

      {unrecognized.length > 0 && (
        <p className="mt-2 text-[12px] text-ios-secondary">
          ℹ️ {unrecognized.map(ingredientLabel).join(", ")} kennt die App noch nicht als Zutat in Rezepten — wird
          trotzdem gespeichert, matcht aber aktuell keine Vorschläge.
        </p>
      )}

      <div className="mt-3 flex flex-wrap gap-1.5">
        {QUICK_ADD_IDS.filter((q) => !fridge.includes(q)).map((id) => (
          <button
            key={id}
            onClick={() => onAdd(id)}
            className="rounded-pill border border-ios-border px-3 py-1.5 text-[13px] text-ios-secondary active:opacity-70"
          >
            + {ingredientLabel(id)}
          </button>
        ))}
      </div>
    </div>
  );
}
