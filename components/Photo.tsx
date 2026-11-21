import type { ReactNode } from "react";

export type ArtKind = "fire" | "plate" | "interior" | "olive" | "bread";
export type Tone = "dark" | "warm" | "olive";

const BG: Record<Tone, string> = { dark: "#1D1B19", warm: "#E9DDC6", olive: "#5F6540" };

function Scene({ kind, tone }: { kind: ArtKind; tone: Tone }) {
  const dark = tone === "dark";
  const olive = tone === "olive";
  const ink = dark || olive ? "#F6F1E7" : "#1D1B19";
  const leaf = olive ? "#B9BE96" : "#5F6540";

  switch (kind) {
    case "fire":
      return (
        <>
          <defs>
            <radialGradient id={`glow-${tone}`} cx="50%" cy="72%" r="55%">
              <stop offset="0" stopColor="#A3482A" stopOpacity="0.55" />
              <stop offset="1" stopColor="#A3482A" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="800" height="800" fill={`url(#glow-${tone})`} />
          <g className="flame">
            <path d="M400 150 C480 290 570 340 545 480 C528 590 460 650 400 650 C340 650 272 590 255 480 C230 340 320 290 400 150 Z" fill="#A3482A" />
            <path d="M400 260 C455 355 505 395 490 490 C480 565 440 615 400 615 C360 615 320 565 310 490 C295 395 345 355 400 260 Z" fill="#E08A57" />
            <path d="M400 390 C428 440 450 465 442 520 C437 565 420 590 400 590 C380 590 363 565 358 520 C350 465 372 440 400 390 Z" fill="#F6E2B8" />
          </g>
          {[[300, 250], [520, 210], [610, 330], [210, 360], [470, 120], [350, 140]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i % 2 ? 4 : 6} fill="#E08A57" opacity={0.8} />
          ))}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <rect key={i} x={110 + i * 80} y="690" width="14" height="110" fill="#0E0D0C" />
          ))}
          <rect x="90" y="700" width="620" height="10" fill="#0E0D0C" />
        </>
      );
    case "plate":
      return (
        <>
          <circle cx="400" cy="420" r="300" fill="#000" opacity="0.08" />
          <circle cx="400" cy="400" r="290" fill="#F8F3E8" />
          <circle cx="400" cy="400" r="235" fill="#EFE6D2" stroke="#D9CCB0" strokeWidth="3" />
          {[-30, 0, 30].map((r, i) => (
            <g key={i} transform={`rotate(${r - 20} 400 400) translate(${i * 14 - 14} ${i * -6})`}>
              <rect x="255" y={340 + i * 48} width="280" height="38" rx="19" fill="#C9693A" />
              <rect x="255" y={340 + i * 48} width="60" height="38" rx="19" fill="#B05A30" />
            </g>
          ))}
          <ellipse cx="470" cy="330" rx="70" ry="38" fill="#FBF8F0" />
          {[[330, 300], [520, 440], [300, 470], [470, 280], [380, 520]].map(([x, y], i) => (
            <ellipse key={i} cx={x} cy={y} rx="22" ry="9" fill={leaf} transform={`rotate(${i * 38} ${x} ${y})`} />
          ))}
          {Array.from({ length: 22 }).map((_, i) => (
            <circle key={i} cx={300 + ((i * 53) % 230)} cy={300 + ((i * 71) % 230)} r="3" fill="#8A5A2E" opacity="0.7" />
          ))}
        </>
      );
    case "interior":
      return (
        <>
          {[170, 400, 630].map((x, i) => (
            <path key={i} d={`M${x - 85} 620 V320 A85 85 0 0 1 ${x + 85} 320 V620 Z`} fill={dark ? "#3A332B" : "#F6F1E7"} opacity={dark ? 1 : 0.85} />
          ))}
          {[170, 400, 630].map((x, i) => (
            <path key={i} d={`M${x - 55} 620 V330 A55 55 0 0 1 ${x + 55} 330 V620`} fill="none" stroke={dark ? "#E08A57" : "#5F6540"} strokeWidth="3" opacity="0.7" />
          ))}
          {[[270, 150], [530, 190]].map(([x, h], i) => (
            <g key={i}>
              <line x1={x} y1="0" x2={x} y2={h} stroke={ink} strokeWidth="3" opacity="0.7" />
              <path d={`M${x - 50} ${h + 55} A50 50 0 0 1 ${x + 50} ${h + 55} Z`} fill="#A3482A" />
              <ellipse cx={x} cy={h + 70} rx="30" ry="10" fill="#F6E2B8" />
            </g>
          ))}
          <rect x="0" y="620" width="800" height="180" fill={dark ? "#0E0D0C" : "#C9B992"} opacity="0.55" />
          <rect x="60" y="640" width="680" height="14" fill={ink} opacity="0.55" />
          {[200, 400, 600].map((x) => (
            <ellipse key={x} cx={x} cy="632" rx="46" ry="9" fill="#F8F3E8" />
          ))}
        </>
      );
    case "olive":
      return (
        <>
          <path d="M130 700 C 260 560 330 440 440 330 C 520 250 620 200 700 110" fill="none" stroke={leaf} strokeWidth="9" strokeLinecap="round" />
          {[[200, 640, -40], [260, 560, 30], [320, 500, -50], [380, 430, 25], [440, 350, -55], [500, 300, 20], [560, 245, -45], [630, 190, 15]].map(([x, y, r], i) => (
            <g key={i}>
              <ellipse cx={x} cy={y} rx="62" ry="17" fill={leaf} transform={`rotate(${r} ${x} ${y})`} opacity="0.9" />
              <ellipse cx={x + 30} cy={y + 40} rx="62" ry="17" fill={leaf} transform={`rotate(${r + 70} ${x + 30} ${y + 40})`} opacity="0.75" />
            </g>
          ))}
          {[[300, 590], [470, 400], [590, 285]].map(([x, y], i) => (
            <ellipse key={i} cx={x} cy={y} rx="20" ry="26" fill={olive ? "#2B2F1C" : "#3E4228"} />
          ))}
        </>
      );
    case "bread":
      return (
        <>
          <ellipse cx="400" cy="610" rx="300" ry="40" fill="#000" opacity="0.12" />
          <ellipse cx="400" cy="440" rx="290" ry="190" fill="#C98F52" />
          <ellipse cx="400" cy="400" rx="270" ry="165" fill="#D9A769" />
          {[-130, -50, 30, 110].map((dx, i) => (
            <path key={i} d={`M${400 + dx - 40} ${470} Q ${400 + dx} 330 ${400 + dx + 40} ${300}`} fill="none" stroke="#F3DDB8" strokeWidth="14" strokeLinecap="round" />
          ))}
          {Array.from({ length: 18 }).map((_, i) => (
            <circle key={i} cx={210 + ((i * 97) % 380)} cy={300 + ((i * 59) % 190)} r="3" fill="#F6F1E7" opacity="0.6" />
          ))}
        </>
      );
  }
}

/**
 * A picture slot. Without `src` it shows a drawn placeholder; give it a real photo path and it shows the photo.
 */
export default function Photo({
  kind,
  tone = "warm",
  alt,
  src,
  className = "",
  children,
}: {
  kind: ArtKind;
  tone?: Tone;
  alt: string;
  src?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden ${className}`} style={{ background: BG[tone] }}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <svg role="img" aria-label={alt} viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
          <Scene kind={kind} tone={tone} />
        </svg>
      )}
      {children}
    </div>
  );
}
