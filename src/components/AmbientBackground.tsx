export default function AmbientBackground() {
  return (
    <div className="ambient fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="bg-orb animate-orb-1 h-[420px] w-[420px] bg-primary/20 -top-32 -left-24" />
      <div className="bg-orb animate-orb-2 h-[380px] w-[380px] bg-accent/20 top-1/3 -right-24" />
      <div
        className="bg-orb animate-orb-1 h-[320px] w-[320px] bg-primary/10 bottom-0 left-1/3"
        style={{ animationDelay: "4s" }}
      />
    </div>
  );
}
