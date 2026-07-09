import { supplements } from "../data/supplements";

interface Props {
  takenToday: string[];
  onToggle: (id: string) => void;
}

export function SupplementsScreen({ takenToday, onToggle }: Props) {
  const recommended = supplements.filter((s) => s.recommended);
  const notRecommended = supplements.filter((s) => !s.recommended);

  return (
    <div className="space-y-5 px-4 pb-28 pt-4">
      <header>
        <h1 className="text-[28px] font-bold text-ios-label">Supplements</h1>
        <p className="text-[13px] text-ios-secondary">
          Wissenschaftlich gut belegte Optionen — recherchiert vom Research Agent (ISSN Position Stands), mit
          ESN als Beispiel-Marke.
        </p>
      </header>

      <div className="space-y-3">
        {recommended.map((s) => {
          const taken = takenToday.includes(s.id);
          return (
            <div key={s.id} className="rounded-card bg-ios-surface border border-ios-border p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ios-blue/15 text-2xl">
                  {s.emoji}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-[16px] font-semibold text-ios-label leading-tight">{s.name}</h3>
                    <button
                      onClick={() => onToggle(s.id)}
                      className={`shrink-0 rounded-pill px-3 py-1 text-[12px] font-medium ${
                        taken ? "bg-ios-green text-white" : "border border-ios-border text-ios-secondary"
                      }`}
                    >
                      {taken ? "✓ Genommen" : "Heute nehmen"}
                    </button>
                  </div>
                  <p className="mt-1.5 text-[13px] leading-snug text-ios-secondary">{s.evidence}</p>
                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-0.5 text-[12px] text-ios-secondary">
                    {s.dosage && <span>💊 {s.dosage}</span>}
                    {s.pricePerMonth && <span>💶 {s.pricePerMonth}</span>}
                  </div>
                  {s.esnExample && (
                    <span className="mt-2 inline-block rounded-pill bg-ios-surface2 px-2.5 py-1 text-[11px] text-ios-secondary">
                      Beispiel: {s.esnExample}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <p className="mb-2 px-1 text-[13px] font-semibold uppercase tracking-wide text-ios-secondary">
          Eher überbewertet
        </p>
        <div className="space-y-2">
          {notRecommended.map((s) => (
            <div key={s.id} className="rounded-card bg-ios-surface2/50 border border-ios-border p-3">
              <p className="text-[14px] font-medium text-ios-secondary">{s.name}</p>
              <p className="mt-1 text-[12px] leading-snug text-ios-secondary">{s.evidence}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
