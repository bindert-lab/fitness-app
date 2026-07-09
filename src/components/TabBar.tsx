export type Tab = "today" | "nutrition" | "training" | "supplements";

interface Props {
  active: Tab;
  onChange: (tab: Tab) => void;
}

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: "today", label: "Heute", icon: "✨" },
  { id: "nutrition", label: "Ernährung", icon: "🍽️" },
  { id: "training", label: "Training", icon: "🏋️" },
  { id: "supplements", label: "Supplements", icon: "💊" }
];

export function TabBar({ active, onChange }: Props) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-10 border-t border-ios-border bg-black/70 backdrop-blur-xl pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto flex max-w-md">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className="flex flex-1 flex-col items-center gap-0.5 py-2.5"
          >
            <span className={`text-[22px] transition-opacity ${active === tab.id ? "opacity-100" : "opacity-50"}`}>
              {tab.icon}
            </span>
            <span
              className={`text-[10px] font-medium ${
                active === tab.id ? "text-ios-blue" : "text-ios-secondary"
              }`}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
