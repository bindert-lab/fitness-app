export interface Ingredient {
  id: string;
  label: string;
  emoji: string;
  synonyms: string[];
}

export const ingredients: Ingredient[] = [
  { id: "eier", label: "Eier", emoji: "🥚", synonyms: ["ei", "eigelb"] },
  { id: "haferflocken", label: "Haferflocken", emoji: "🌾", synonyms: ["hafer", "porridge", "oats"] },
  { id: "banane", label: "Banane", emoji: "🍌", synonyms: ["bananen"] },
  { id: "quark", label: "Quark", emoji: "🥣", synonyms: ["magerquark", "speisequark"] },
  { id: "skyr", label: "Skyr", emoji: "🥛", synonyms: [] },
  { id: "joghurt", label: "Joghurt", emoji: "🥛", synonyms: ["naturjoghurt", "griechischer joghurt", "joghurt natur"] },
  { id: "milch", label: "Milch", emoji: "🥛", synonyms: ["vollmilch", "hafermilch", "milch pflanzlich"] },
  { id: "reis", label: "Reis", emoji: "🍚", synonyms: ["basmatireis", "vollkornreis"] },
  { id: "toast", label: "Toast", emoji: "🍞", synonyms: ["toastbrot"] },
  { id: "brot", label: "Brot", emoji: "🍞", synonyms: ["vollkornbrot", "vollkorntoast"] },
  { id: "erdnussbutter", label: "Erdnussbutter", emoji: "🥜", synonyms: ["peanut butter", "erdnussmus"] },
  { id: "honig", label: "Honig", emoji: "🍯", synonyms: [] },
  { id: "hähnchenbrust", label: "Hähnchenbrust", emoji: "🍗", synonyms: ["hühnchen", "chicken", "putenbrust", "hähnchenfilet"] },
  { id: "thunfisch", label: "Thunfisch", emoji: "🐟", synonyms: ["thunfischdose", "tuna"] },
  { id: "lachs", label: "Lachs", emoji: "🐟", synonyms: ["lachsfilet"] },
  { id: "nudeln", label: "Nudeln", emoji: "🍝", synonyms: ["pasta", "spaghetti"] },
  { id: "apfel", label: "Apfel", emoji: "🍎", synonyms: ["äpfel"] },
  { id: "linsen", label: "Linsen", emoji: "🫘", synonyms: ["rote linsen"] },
  { id: "kichererbsen", label: "Kichererbsen", emoji: "🫘", synonyms: ["kichererbse"] },
  { id: "avocado", label: "Avocado", emoji: "🥑", synonyms: [] },
  { id: "paprika", label: "Paprika", emoji: "🫑", synonyms: [] },
  { id: "zwiebel", label: "Zwiebel", emoji: "🧅", synonyms: ["zwiebeln"] },
  { id: "käse", label: "Käse", emoji: "🧀", synonyms: ["gouda", "scheibenkäse"] },
  { id: "hüttenkäse", label: "Hüttenkäse", emoji: "🧀", synonyms: ["cottage cheese"] },
  { id: "proteinpudding", label: "Proteinpudding", emoji: "🍮", synonyms: ["protein pudding", "eiweißpudding"] },
  { id: "nüsse", label: "Nüsse", emoji: "🥜", synonyms: ["mandeln", "walnüsse", "cashewkerne"] },
  { id: "olivenöl", label: "Olivenöl", emoji: "🫒", synonyms: ["öl"] },
  { id: "butter", label: "Butter", emoji: "🧈", synonyms: [] },
  { id: "spinat", label: "Spinat", emoji: "🥬", synonyms: ["blattspinat", "tk-spinat"] },
  { id: "gemüse", label: "Gemüse", emoji: "🥦", synonyms: ["tk-gemüse", "gemüsemix"] },
  { id: "kartoffeln", label: "Kartoffeln", emoji: "🥔", synonyms: ["kartoffel"] },
  { id: "süßkartoffel", label: "Süßkartoffel", emoji: "🍠", synonyms: ["süßkartoffeln", "sweet potato"] },
  { id: "rinderhack", label: "Rinderhack", emoji: "🥩", synonyms: ["hackfleisch"] },
  { id: "tomaten", label: "Tomaten", emoji: "🍅", synonyms: ["tomate", "cherrytomaten"] },
  { id: "gurke", label: "Gurke", emoji: "🥒", synonyms: [] },
  { id: "mais", label: "Mais", emoji: "🌽", synonyms: ["maiskörner"] },
  { id: "chiasamen", label: "Chiasamen", emoji: "🌱", synonyms: ["chia"] },
  { id: "beeren", label: "Beeren", emoji: "🫐", synonyms: ["blaubeeren", "himbeeren", "tk-beeren"] },
  { id: "ananas", label: "Ananas", emoji: "🍍", synonyms: [] }
];

const synonymIndex = new Map<string, string>();
for (const ing of ingredients) {
  synonymIndex.set(ing.id, ing.id);
  for (const s of ing.synonyms) synonymIndex.set(s, ing.id);
}

export function normalizeIngredient(raw: string): string {
  const key = raw.trim().toLowerCase();
  return synonymIndex.get(key) ?? key;
}

export function ingredientLabel(id: string): string {
  return ingredients.find((i) => i.id === id)?.label ?? id;
}

export const QUICK_ADD_IDS = [
  "eier", "haferflocken", "banane", "quark", "skyr", "milch",
  "reis", "toast", "erdnussbutter", "joghurt", "apfel", "honig",
  "hähnchenbrust", "hüttenkäse"
];
