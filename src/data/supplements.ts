export interface Supplement {
  id: string;
  name: string;
  emoji: string;
  recommended: boolean;
  evidence: string;
  dosage?: string;
  pricePerMonth?: string;
  esnExample?: string;
}

export const supplements: Supplement[] = [
  {
    id: "kreatin",
    name: "Kreatin-Monohydrat",
    emoji: "⚡️",
    recommended: true,
    evidence:
      "Laut ISSN Position Stand das wirksamste frei verfügbare Supplement zur Steigerung von Hochintensitäts-Leistung und fettfreier Masse — Sicherheit bis 30 g/Tag über 5 Jahre gut belegt.",
    dosage: "3–5 g täglich, dauerhaft (Aufsättigung nicht nötig)",
    pricePerMonth: "≈ 8–10 €",
    esnExample: "ESN Ultrapure Creatine Monohydrate"
  },
  {
    id: "whey",
    name: "Molkenprotein (Whey)",
    emoji: "🥤",
    recommended: true,
    evidence:
      "ISSN empfiehlt 1,4–2,2 g Protein/kg Körpergewicht täglich. Whey hat hohen PDCAAS-Wert und schnelle Aminosäure-Kinetik — 20–40 g maximieren die Muskelproteinsynthese pro Portion.",
    dosage: "20–40 g pro Portion, wenn Alltagsernährung nicht reicht",
    pricePerMonth: "≈ 15–30 €",
    esnExample: "ESN Basic Whey"
  },
  {
    id: "koffein",
    name: "Koffein",
    emoji: "☕️",
    recommended: true,
    evidence:
      "ISSN Position Stand bestätigt konsistente Leistungssteigerung (Kraft, Ausdauer, Sprints) bei 3–6 mg/kg Körpergewicht vor dem Training.",
    dosage: "3–6 mg/kg, ca. 30–60 Min vor dem Training",
    pricePerMonth: "≈ 3–5 €",
    esnExample: "ESN Caffeine Caps"
  },
  {
    id: "beta-alanin",
    name: "Beta-Alanin",
    emoji: "🔋",
    recommended: true,
    evidence:
      "4–6 g/Tag über 2–4 Wochen erhöht Muskel-Carnosin und verbessert die Leistung bei 1–4-minütigen hochintensiven Belastungen.",
    dosage: "4–6 g/Tag, aufgeteilt (Kribbeln ist normal, ungefährlich)",
    pricePerMonth: "≈ 4–5 €",
    esnExample: "ESN Beta-Alanine"
  },
  {
    id: "omega-3",
    name: "Omega-3 (Fischöl)",
    emoji: "🐟",
    recommended: true,
    evidence:
      "Solide Evidenz für Herz-Kreislauf-Gesundheit und Entzündungsregulation, moderate Evidenz für Regeneration — eher Gesundheits- als reines Leistungssupplement.",
    dosage: "≈ 1–2 g EPA/DHA täglich",
    pricePerMonth: "≈ 10–15 €",
    esnExample: "ESN Super Omega-3"
  },
  {
    id: "bcaa",
    name: "BCAA",
    emoji: "🚫",
    recommended: false,
    evidence:
      "Whey-Protein enthält bereits ausreichend Leucin/BCAAs. Meta-Analysen zeigen keinen Zusatznutzen gegenüber vollständigem Protein — neben Whey meist überflüssig."
  },
  {
    id: "testo-booster",
    name: "Testosteron-Booster (Tribulus, ZMA …)",
    emoji: "🚫",
    recommended: false,
    evidence:
      "Kaum belastbare Humandaten für relevante Hormon- oder Kraftsteigerung bei gesunden jungen Männern — Wirkung überwiegend Marketing."
  },
  {
    id: "fatburner",
    name: "Fatburner / L-Carnitin oral",
    emoji: "🚫",
    recommended: false,
    evidence:
      "Schwache, inkonsistente Evidenz bei normaler Carnitin-Versorgung. Kaloriendefizit + Training schlagen das bei Weitem."
  }
];
