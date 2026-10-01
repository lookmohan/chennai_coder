import { useEffect, useRef } from "react";

// Set to true to freeze the globe for visitors whose OS has "reduce motion"
// turned on. Left false so the background is always alive.
const RESPECT_REDUCED_MOTION = false;

type P3 = { x: number; y: number; z: number };

// A slowly rotating network globe drawn on a canvas. Echoes the dot-cluster
// in the Chennai Coder logo: nodes on a sphere, linked by lines, with data
// pulses travelling between them and a satellite orbiting the whole thing.
export default function GlobeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce =
      RESPECT_REDUCED_MOTION &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Points spread over a unit sphere (fewer per row near the poles).
    // Lighter mesh on phones to keep it smooth on low-end devices.
    const mobile = window.innerWidth < 900;
    const linkDist = mobile ? 0.16 : 0.075;
    const pts: P3[] = [];
    const rows = mobile ? 11 : 15;
    for (let i = 1; i < rows; i++) {
      const lat = -Math.PI / 2 + (Math.PI * i) / rows;
      const count = Math.max(6, Math.round(Math.cos(lat) * (mobile ? 28 : 40)));
      for (let j = 0; j < count; j++) {
        const lon = (2 * Math.PI * j) / count + (i % 2) * (Math.PI / count);
        pts.push({
          x: Math.cos(lat) * Math.cos(lon),
          y: Math.sin(lat),
          z: Math.cos(lat) * Math.sin(lon),
        });
      }
    }

    // Link each point to its close neighbours (distances don't change as it spins).
    const edges: [number, number][] = [];
    for (let a = 0; a < pts.length; a++) {
      for (let b = a + 1; b < pts.length; b++) {
        const dx = pts[a].x - pts[b].x;
        const dy = pts[a].y - pts[b].y;
        const dz = pts[a].z - pts[b].z;
        if (dx * dx + dy * dy + dz * dz < linkDist) edges.push([a, b]);
      }
    }

    const pulses = Array.from({ length: 7 }, () => ({
      e: Math.floor(Math.random() * edges.length),
      t: Math.random(),
    }));

    const px = new Float32Array(pts.length);
    const py = new Float32Array(pts.length);
    const pz = new Float32Array(pts.length);

    const TILT = 0.4;
    const cosT = Math.cos(TILT);
    const sinT = Math.sin(TILT);

    let w = 0, h = 0, cx = 0, cy = 0, R = 0, alphaMul = 1;
    let rot = 0;
    let orbit = 0;
    let last = performance.now();
    let raf = 0;

    let lastW = 0;
    let lastH = 0;

    function resize() {
      const nw = window.innerWidth;
      const nh = window.innerHeight;
      // Mobile browsers fire resize as the address bar slides in/out while
      // scrolling; ignore those small height-only changes to avoid flicker.
      if (lastW === nw && Math.abs(lastH - nh) < 200) return;
      lastW = nw;
      lastH = nh;
      const dpr = Math.min(window.devicePixelRatio || 1, nw < 900 ? 1.5 : 2);
      w = nw;
      h = nh;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const wide = w >= 900;
      R = wide ? Math.min(h * 0.46, w * 0.3) : w * 0.5;
      cx = wide ? w * 0.78 : w * 0.88;
      cy = wide ? h * 0.52 : h * 0.42;
      alphaMul = wide ? 1 : 0.6;
    }

    function tilt(x: number, y: number, z: number) {
      return { y: y * cosT - z * sinT, z: y * sinT + z * cosT, x };
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);

      const cosR = Math.cos(rot);
      const sinR = Math.sin(rot);

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const x1 = p.x * cosR + p.z * sinR;
        const z1 = -p.x * sinR + p.z * cosR;
        const t = tilt(x1, p.y, z1);
        px[i] = cx + t.x * R;
        py[i] = cy + t.y * R;
        pz[i] = t.z;
      }

      // Soft halo behind the globe
      const halo = ctx!.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 1.25);
      halo.addColorStop(0, `rgba(47,95,224,${0.1 * alphaMul})`);
      halo.addColorStop(1, "rgba(47,95,224,0)");
      ctx!.fillStyle = halo;
      ctx!.beginPath();
      ctx!.arc(cx, cy, R * 1.25, 0, Math.PI * 2);
      ctx!.fill();

      // Outline ring
      ctx!.strokeStyle = `rgba(47,95,224,${0.16 * alphaMul})`;
      ctx!.lineWidth = 1;
      ctx!.beginPath();
      ctx!.arc(cx, cy, R, 0, Math.PI * 2);
      ctx!.stroke();

      // Links
      ctx!.lineWidth = 1;
      for (let i = 0; i < edges.length; i++) {
        const [a, b] = edges[i];
        const depth = (pz[a] + pz[b]) / 2;
        if (depth < -0.1) continue;
        ctx!.strokeStyle = `rgba(47,95,224,${(0.05 + 0.22 * depth) * alphaMul})`;
        ctx!.beginPath();
        ctx!.moveTo(px[a], py[a]);
        ctx!.lineTo(px[b], py[b]);
        ctx!.stroke();
      }

      // Nodes (back side faint, front side bright)
      for (let i = 0; i < pts.length; i++) {
        const depth = (pz[i] + 1) / 2;
        const alpha = (0.08 + 0.75 * depth) * alphaMul;
        ctx!.fillStyle =
          i % 3 === 0 ? `rgba(14,140,168,${alpha})` : `rgba(47,95,224,${alpha})`;
        ctx!.beginPath();
        ctx!.arc(px[i], py[i], 1 + 2.2 * depth, 0, Math.PI * 2);
        ctx!.fill();
      }

      // Data pulses travelling along links
      for (const pulse of pulses) {
        const [a, b] = edges[pulse.e];
        const depth = (pz[a] + pz[b]) / 2;
        if (depth < -0.1) continue;
        const x = px[a] + (px[b] - px[a]) * pulse.t;
        const y = py[a] + (py[b] - py[a]) * pulse.t;
        ctx!.fillStyle = `rgba(14,140,168,${0.25 * alphaMul})`;
        ctx!.beginPath();
        ctx!.arc(x, y, 8, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.fillStyle = `rgba(14,140,168,${0.95 * alphaMul})`;
        ctx!.beginPath();
        ctx!.arc(x, y, 3.2, 0, Math.PI * 2);
        ctx!.fill();
      }

      // Orbit ring with a satellite
      const roll = 0.45;
      const cosRoll = Math.cos(roll);
      const sinRoll = Math.sin(roll);
      ctx!.strokeStyle = `rgba(14,140,168,${0.2 * alphaMul})`;
      ctx!.setLineDash([4, 6]);
      ctx!.beginPath();
      for (let s = 0; s <= 72; s++) {
        const ang = (s / 72) * Math.PI * 2;
        const ox = Math.cos(ang) * 1.32;
        const oz = Math.sin(ang) * 1.32;
        const rx = ox * cosRoll;
        const ry = ox * sinRoll;
        const t = tilt(rx, ry, oz);
        const X = cx + t.x * R;
        const Y = cy + t.y * R;
        if (s === 0) ctx!.moveTo(X, Y);
        else ctx!.lineTo(X, Y);
      }
      ctx!.stroke();
      ctx!.setLineDash([]);

      const sx = Math.cos(orbit) * 1.32;
      const sz = Math.sin(orbit) * 1.32;
      const st = tilt(sx * cosRoll, sx * sinRoll, sz);
      ctx!.fillStyle = `rgba(47,95,224,${0.95 * alphaMul})`;
      ctx!.beginPath();
      ctx!.arc(cx + st.x * R, cy + st.y * R, 5, 0, Math.PI * 2);
      ctx!.fill();
    }

    function frame(now: number) {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      rot += dt * 0.28;
      orbit += dt * 0.7;
      for (const pulse of pulses) {
        pulse.t += dt * 0.9;
        if (pulse.t >= 1) {
          pulse.t = 0;
          pulse.e = Math.floor(Math.random() * edges.length);
        }
      }
      draw();
      raf = requestAnimationFrame(frame);
    }

    function onVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reduce) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    }

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    if (reduce) {
      draw();
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
