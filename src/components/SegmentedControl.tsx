interface Option<T extends string> {
  value: T;
  label: string;
}

interface Props<T extends string> {
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
}

export function SegmentedControl<T extends string>({ options, value, onChange }: Props<T>) {
  return (
    <div className="flex rounded-pill bg-ios-surface2 p-1">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`flex-1 rounded-pill px-3 py-1.5 text-[13px] font-medium transition-colors ${
            value === opt.value ? "bg-ios-blue text-white" : "text-ios-secondary"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
