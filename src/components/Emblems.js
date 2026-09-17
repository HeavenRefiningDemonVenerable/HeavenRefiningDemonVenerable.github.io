// src/components/Emblems.js
//
// Small, original decorative marks (not reproductions of any book cover,
// logo, or character). Each is a plain currentColor SVG so it inherits
// whatever color is set on its wrapper.

export function ValknutIcon(props) {
  // Norse — three interlocking triangles, a historical symbol (not a
  // trademark), associated with fate and the god Odin.
  return (
    <svg width="24" height="24" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" {...props}>
      <polygon points="50,12 82,66 18,66" />
      <polygon points="50,34 78,82 22,82" transform="rotate(15 50 58)" />
      <polygon points="50,34 78,82 22,82" transform="rotate(-15 50 58)" />
    </svg>
  );
}

export function LaurelIcon(props) {
  // Greek — a laurel sprig, classical shorthand for honor and achievement.
  return (
    <svg width="24" height="24" viewBox="0 0 100 100" fill="currentColor" stroke="none" {...props}>
      {Array.from({ length: 5 }).map((_, i) => (
        <ellipse
          key={`l${i}`}
          cx={30 - i * 4}
          cy={20 + i * 15}
          rx="9"
          ry="5"
          transform={`rotate(${-40 + i * 6} ${30 - i * 4} ${20 + i * 15})`}
        />
      ))}
      {Array.from({ length: 5 }).map((_, i) => (
        <ellipse
          key={`r${i}`}
          cx={70 + i * 4}
          cy={20 + i * 15}
          rx="9"
          ry="5"
          transform={`rotate(${40 - i * 6} ${70 + i * 4} ${20 + i * 15})`}
        />
      ))}
      <path
        d="M50 15 C 46 45, 46 65, 50 90"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
}

export function SkullIcon(props) {
  // A quiet nod to detective-skeleton fiction — an original, generic
  // skull-and-cravat mark, not a reproduction of any book's cover art.
  return (
    <svg width="24" height="24" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" {...props}>
      <path d="M50 12 C 26 12 16 30 16 46 C 16 58 22 66 30 72 L 30 82 L 70 82 L 70 72 C 78 66 84 58 84 46 C 84 30 74 12 50 12 Z" />
      <circle cx="36" cy="46" r="6" fill="currentColor" stroke="none" />
      <circle cx="64" cy="46" r="6" fill="currentColor" stroke="none" />
      <path d="M50 54 L 46 64 L 54 64 Z" fill="currentColor" stroke="none" />
      <path d="M38 82 L 30 96 M50 82 L 50 96 M62 82 L 70 96" />
    </svg>
  );
}

export function ToriiIcon(props) {
  // A torii gate — a widely recognized cultural silhouette, not tied to
  // any specific studio, series, or character.
  return (
    <svg width="24" height="24" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5" {...props}>
      <line x1="10" y1="28" x2="90" y2="28" />
      <line x1="16" y1="18" x2="84" y2="18" />
      <line x1="30" y1="28" x2="30" y2="88" />
      <line x1="70" y1="28" x2="70" y2="88" />
      <line x1="50" y1="28" x2="50" y2="60" />
    </svg>
  );
}

// Rune-inspired marks (angular, straight-line strokes, as real runes were
// carved) used in place of generic icons on the Experience timeline.
export function AnsuzRune(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" {...props}>
      <line x1="70" y1="10" x2="70" y2="90" />
      <line x1="70" y1="26" x2="34" y2="12" />
      <line x1="70" y1="50" x2="34" y2="36" />
    </svg>
  );
}

export function FehuRune(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" {...props}>
      <line x1="30" y1="10" x2="30" y2="90" />
      <line x1="30" y1="26" x2="66" y2="12" />
      <line x1="30" y1="50" x2="66" y2="36" />
    </svg>
  );
}
