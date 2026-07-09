export function GradientBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-32 -left-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ background: "#0A84FF" }}
      />
      <div
        className="absolute top-40 -right-28 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ background: "#BF5AF2" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "#30D158" }}
      />
    </div>
  );
}
