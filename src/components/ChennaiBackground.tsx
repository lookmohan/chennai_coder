import type { CSSProperties } from "react";

const BLUE = "#2F5FE0";
const CYAN = "#0E8CA8";

// CSS custom properties for per-element animation timing.
const timing = (dur: string, delay: string) =>
  ({ "--dur": dur, "--delay": delay }) as CSSProperties;

function wavePath(y: number, amp: number, len = 2880, seg = 180) {
  let d = `M0 ${y} Q${seg / 2} ${y - amp} ${seg} ${y} `;
  for (let x = seg * 2; x <= len; x += seg) d += `T${x} ${y} `;
  return `${d}V320 H0Z`;
}

// IT-corridor style towers: [x, y, width, height]
const towers: [number, number, number, number][] = [
  [60, 170, 42, 130],
  [108, 128, 50, 172],
  [164, 192, 36, 108],
  [1150, 150, 48, 150],
  [1204, 188, 40, 112],
  [1250, 118, 56, 182],
  [1312, 172, 44, 128],
  [1362, 214, 50, 86],
];

function TowerWindows() {
  const dots: JSX.Element[] = [];
  towers.forEach(([x, y, w, h], t) => {
    const cols = Math.floor((w - 10) / 12);
    const rows = Math.floor((h - 16) / 18);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const twinkles = (c * 7 + r * 3 + t) % 4 === 0;
        dots.push(
          <circle
            key={`${t}-${r}-${c}`}
            cx={x + 9 + c * 12}
            cy={y + 14 + r * 18}
            r={1.7}
            fill={CYAN}
            fillOpacity={twinkles ? 0.15 : 0.28}
            className={twinkles ? "anim-twinkle" : undefined}
            style={twinkles ? { animationDelay: `${(c + r * 2 + t) * 0.45}s` } : undefined}
          />
        );
      }
    }
  });
  return <>{dots}</>;
}

// Temple gopuram: stacked, narrowing tiers with a finial on top.
function Gopuram() {
  const cx = 720;
  const baseY = 268;
  const tiers: string[] = [];
  for (let i = 0; i < 7; i++) {
    const w = 132 - i * 15;
    const h = 24;
    const yb = baseY - i * h;
    const top = w - 10;
    tiers.push(
      `M${cx - w / 2} ${yb} L${cx + w / 2} ${yb} L${cx + top / 2} ${yb - h} L${cx - top / 2} ${yb - h}Z`
    );
  }
  return (
    <g fill={BLUE} fillOpacity={0.12}>
      <rect x={cx - 80} y={baseY} width={160} height={40} />
      {tiers.map((d, i) => (
        <path key={i} d={d} />
      ))}
      <ellipse cx={cx} cy={91} rx={6} ry={9} />
      <rect x={cx - 1} y={76} width={2} height={8} />
      <path d={`M${cx - 14} ${baseY + 40} V${baseY + 16} a14 14 0 0 1 28 0 V${baseY + 40}Z`} fill="#fff" fillOpacity={0.6} />
    </g>
  );
}

function Palm({ x, h, delay }: { x: number; h: number; delay: string }) {
  const fronds = [
    [-30, -8, -46, 16],
    [-24, -26, -44, -10],
    [30, -8, 46, 16],
    [24, -26, 44, -10],
    [-14, 4, -30, 26],
    [14, 4, 30, 26],
  ];
  return (
    <g transform={`translate(${x} 300)`}>
      <g className="anim-palm" style={{ animationDelay: delay }}>
        <path d={`M0 0 Q7 ${-h * 0.5} -2 ${-h}`} stroke={BLUE} strokeOpacity={0.17} strokeWidth={5} fill="none" strokeLinecap="round" />
        {fronds.map(([cx, cy, ex, ey], i) => (
          <path
            key={i}
            d={`M-2 ${-h} q${cx} ${cy} ${ex} ${ey}`}
            stroke={BLUE}
            strokeOpacity={0.17}
            strokeWidth={3.5}
            fill="none"
            strokeLinecap="round"
          />
        ))}
      </g>
    </g>
  );
}

function Cloud({ top, dur, delay, scale }: { top: string; dur: string; delay: string; scale: number }) {
  return (
    <div className="absolute left-0 anim-cloud" style={{ top, ...timing(dur, delay) }}>
      <svg width={240 * scale} height={80 * scale} viewBox="0 0 240 80">
        <g fill={BLUE} fillOpacity={0.07}>
          <circle cx="70" cy="48" r="26" />
          <circle cx="110" cy="34" r="32" />
          <circle cx="152" cy="46" r="26" />
          <rect x="60" y="48" width="112" height="26" rx="13" />
        </g>
      </svg>
    </div>
  );
}

function Bird({ top, dur, delay }: { top: string; dur: string; delay: string }) {
  return (
    <div className="absolute left-0 anim-bird-fly" style={{ top, ...timing(dur, delay) }}>
      <div className="anim-bird-bob" style={timing("3.4s", "0s")}>
        <svg width="28" height="14" viewBox="0 0 28 14">
          <path
            className="anim-flap"
            d="M1 9 Q7 0 14 8 Q21 0 27 9"
            fill="none"
            stroke={BLUE}
            strokeOpacity={0.4}
            strokeWidth={1.8}
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

// A stylized Chennai scene that runs constantly behind every page:
// temple gopuram, San Thome-style spire, Marina-style lighthouse with a
// sweeping beam, a Central-style clock tower, IT-corridor towers, palms,
// a train, rolling waves, and a sun, clouds and gulls overhead.
export default function ChennaiBackground() {
  return (
    <div className="ambient fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Sun */}
      <div className="absolute top-28 right-[8%] h-24 w-24 sm:h-36 sm:w-36">
        <div
          className="absolute inset-0 rounded-full anim-sun-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(251,191,36,0.5) 0%, rgba(251,191,36,0.16) 45%, rgba(251,191,36,0) 70%)",
          }}
        />
        <svg viewBox="0 0 100 100" className="absolute inset-0 anim-slow-spin">
          <circle cx="50" cy="50" r="31" fill="none" stroke="#F59E0B" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="2 5" strokeLinecap="round" />
          <circle cx="50" cy="50" r="43" fill="none" stroke="#F59E0B" strokeOpacity="0.28" strokeWidth="1" strokeDasharray="1 7" strokeLinecap="round" />
        </svg>
        <div
          className="absolute left-1/2 top-1/2 h-8 w-8 sm:h-10 sm:w-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle at 35% 35%, #FDE68A, #F59E0B)", opacity: 0.55 }}
        />
      </div>

      <Cloud top="14%" dur="80s" delay="-25s" scale={1} />
      <Cloud top="30%" dur="110s" delay="-70s" scale={0.7} />
      <Cloud top="8%" dur="95s" delay="-50s" scale={0.55} />

      <Bird top="20%" dur="26s" delay="-8s" />
      <Bird top="26%" dur="34s" delay="-20s" />
      <Bird top="16%" dur="30s" delay="-2s" />

      {/* Skyline. Wider than a phone screen, centred, so phones see the middle. */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="xMidYMax meet"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full min-w-[900px] max-h-[44vh]"
      >
        <defs>
          <linearGradient id="beamL" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0" stopColor={CYAN} stopOpacity="0.5" />
            <stop offset="1" stopColor={CYAN} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beamR" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor={CYAN} stopOpacity="0.5" />
            <stop offset="1" stopColor={CYAN} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* IT-corridor towers (back layer) */}
        <g fill={BLUE} fillOpacity={0.06}>
          {towers.map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} />
          ))}
        </g>
        <TowerWindows />

        {/* Central-style building with a clock tower */}
        <g fill={BLUE} fillOpacity={0.11}>
          <rect x={250} y={228} width={170} height={72} />
          <rect x={322} y={150} width={26} height={80} />
          <polygon points="322,150 335,118 348,150" />
          <circle cx={264} cy={228} r={11} />
          <circle cx={406} cy={228} r={11} />
        </g>
        <circle cx={335} cy={176} r={8} fill="#fff" fillOpacity={0.65} stroke={BLUE} strokeOpacity={0.3} />
        <path d="M335 176 V171 M335 176 L339 178" stroke={BLUE} strokeOpacity={0.4} strokeWidth={1.2} strokeLinecap="round" />

        {/* San Thome-style church spires */}
        <g fill={BLUE} fillOpacity={0.12}>
          <rect x={480} y={215} width={80} height={85} />
          <polygon points="520,96 534,215 506,215" />
          <polygon points="488,160 496,215 480,215" />
          <polygon points="552,160 560,215 544,215" />
        </g>
        <path d="M520 96 V80 M514 87 H526" stroke={BLUE} strokeOpacity={0.3} strokeWidth={1.8} strokeLinecap="round" />

        <Gopuram />

        {/* Lighthouse with alternating sweeping beams */}
        <polygon points="930,134 720,104 720,164" fill="url(#beamL)" className="anim-beam" style={timing("6s", "0s")} />
        <polygon points="930,134 1140,104 1140,164" fill="url(#beamR)" className="anim-beam" style={timing("6s", "-3s")} />
        <g fill={BLUE} fillOpacity={0.13}>
          <polygon points="918,300 942,300 936,150 924,150" />
          <rect x={917} y={144} width={26} height={6} />
          <rect x={925} y={124} width={10} height={20} />
          <polygon points="922,124 938,124 930,110" />
        </g>
        <circle cx={930} cy={134} r={5} fill={CYAN} className="anim-twinkle" style={{ animationDuration: "2s" }} />

        {/* Palms along the beach */}
        <Palm x={1040} h={96} delay="0s" />
        <Palm x={1096} h={74} delay="-1.6s" />

        {/* Train running across the scene */}
        <g className="anim-train">
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(${i * 54} 0)`}>
              <rect x={0} y={262} width={50} height={20} rx={3} fill={BLUE} fillOpacity={0.17} />
              {[0, 1, 2].map((j) => (
                <rect key={j} x={6 + j * 14} y={268} width={9} height={6} rx={1} fill="#fff" fillOpacity={0.75} />
              ))}
            </g>
          ))}
        </g>

        {/* Waves */}
        <g className="anim-wave" style={timing("14s", "0s")}>
          <path d={wavePath(282, 7)} fill={CYAN} fillOpacity={0.1} />
        </g>
        <g className="anim-wave" style={timing("9s", "-3s")}>
          <path d={wavePath(292, 6)} fill={BLUE} fillOpacity={0.12} />
        </g>
      </svg>
    </div>
  );
}
