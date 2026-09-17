import React from "react";
import "../styles/AmbientField.css";

// Fixed, deterministic positions/timings so the effect doesn't
// re-randomize (and potentially jump) on every render or route change.
const PETALS = [
  { left: "4%", duration: "15s", delay: "0s", size: 20 },
  { left: "14%", duration: "19s", delay: "3s", size: 24 },
  { left: "26%", duration: "16s", delay: "7s", size: 17 },
  { left: "38%", duration: "21s", delay: "1.5s", size: 22 },
  { left: "50%", duration: "17s", delay: "9s", size: 19 },
  { left: "62%", duration: "20s", delay: "4.5s", size: 24 },
  { left: "74%", duration: "18s", delay: "11s", size: 17 },
  { left: "86%", duration: "22s", delay: "2s", size: 22 },
  { left: "94%", duration: "16.5s", delay: "8s", size: 19 },
];

const HAMMERS = [
  { left: "10%", duration: "26s", delay: "5s", size: 24 },
  { left: "34%", duration: "29s", delay: "13s", size: 20 },
  { left: "58%", duration: "25s", delay: "2s", size: 24 },
  { left: "82%", duration: "28s", delay: "10s", size: 20 },
];

function Petal({ left, duration, delay, size }) {
  return (
    <span
      className="petal"
      style={{
        left,
        width: size,
        height: size,
        animationDuration: duration,
        animationDelay: delay,
      }}
    />
  );
}

// A simple original Mjölnir (Thor's hammer) silhouette: a rectangular
// head, a short handle, and wrap-binding lines — not a reproduction of
// any studio or brand's stylized version.
function Hammer({ left, duration, delay, size }) {
  return (
    <svg
      className="hammer"
      viewBox="0 0 100 100"
      style={{
        left,
        width: size,
        height: size,
        animationDuration: duration,
        animationDelay: delay,
      }}
      aria-hidden="true"
    >
      <rect x="18" y="12" width="64" height="28" rx="4" />
      <rect x="43" y="40" width="14" height="48" rx="3" />
      <rect x="40" y="47" width="20" height="4" opacity="0.55" />
      <rect x="40" y="59" width="20" height="4" opacity="0.55" />
      <rect x="40" y="71" width="20" height="4" opacity="0.55" />
    </svg>
  );
}

function AmbientField() {
  return (
    <div className="ambient-field" aria-hidden="true">
      {PETALS.map((p, i) => (
        <Petal key={`petal-${i}`} {...p} />
      ))}
      {HAMMERS.map((h, i) => (
        <Hammer key={`hammer-${i}`} {...h} />
      ))}
    </div>
  );
}

export default AmbientField;
