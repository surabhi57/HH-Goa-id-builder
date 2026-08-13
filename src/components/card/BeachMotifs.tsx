// card/BeachMotifs.tsx
import React from 'react';

interface MotifProps {
  accent: string;
  size?: number;
  opacity?: number;
  style?: React.CSSProperties;
}

export const PalmTree: React.FC<MotifProps> = ({ accent, size = 40, opacity = 0.5, style }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" style={{ opacity, ...style }}>
    <path d="M30 62 L34 30" stroke={accent} strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M32 30 C 20 26, 10 30, 6 22 C 16 20, 24 22, 32 30 Z" fill={accent} />
    <path d="M32 30 C 44 26, 54 30, 58 22 C 48 20, 40 22, 32 30 Z" fill={accent} />
    <path d="M32 30 C 24 18, 20 10, 24 2 C 32 10, 34 20, 32 30 Z" fill={accent} />
    <path d="M32 30 C 40 18, 44 10, 40 2 C 32 10, 30 20, 32 30 Z" fill={accent} />
    <path d="M32 30 C 30 16, 32 8, 32 0 C 34 8, 34 18, 32 30 Z" fill={accent} />
    <circle cx="24" cy="34" r="2.4" fill={accent} />
    <circle cx="29" cy="37" r="2.4" fill={accent} />
  </svg>
);

export const Starfish: React.FC<MotifProps> = ({ accent, size = 24, opacity = 0.5, style }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" style={{ opacity, ...style }}>
    <path
      d="M32 2 L39 22 L60 22 L43 35 L50 58 L32 44 L14 58 L21 35 L4 22 L25 22 Z"
      fill="none"
      stroke={accent}
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <circle cx="26" cy="26" r="1.4" fill={accent} />
    <circle cx="38" cy="26" r="1.4" fill={accent} />
    <circle cx="32" cy="34" r="1.4" fill={accent} />
  </svg>
);

export const Scooter: React.FC<MotifProps> = ({ accent, size = 40, opacity = 0.5, style }) => (
  <svg width={size} height={size} viewBox="0 0 80 48" style={{ opacity, ...style }}>
    <circle cx="14" cy="38" r="7" stroke={accent} strokeWidth="2" fill="none" />
    <circle cx="62" cy="38" r="7" stroke={accent} strokeWidth="2" fill="none" />
    <path
      d="M14 38 L22 38 L30 20 L44 20 M44 20 L44 30 L62 38 M44 20 L50 8 L58 8"
      stroke={accent}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M22 20 L34 20" stroke={accent} strokeWidth="2" strokeLinecap="round" />
    <circle cx="46" cy="16" r="4" fill={accent} />
  </svg>
);

export const WaveLine: React.FC<MotifProps & { width?: number }> = ({
  accent,
  width = 200,
  size = 24,
  opacity = 0.4,
  style,
}) => (
  <svg width={width} height={size} viewBox={`0 0 ${width} 24`} style={{ opacity, ...style }} preserveAspectRatio="none">
    <path
      d={`M0,14 C ${width * 0.125},2 ${width * 0.125},22 ${width * 0.25},14 S ${width * 0.375},22 ${width * 0.5},14 S ${width * 0.625},22 ${width * 0.75},14 S ${width * 0.875},22 ${width},14`}
      stroke={accent}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export const ShellDivider: React.FC<MotifProps> = ({ accent, size = 16, opacity = 0.5, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={{ opacity, ...style }}>
    <path
      d="M12 3 C12 3 4 8 4 15 C4 19 8 21 12 21 C16 21 20 19 20 15 C20 8 12 3 12 3 Z M12 6 L12 21 M8 10 L8 19 M16 10 L16 19"
      stroke={accent}
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);
export const BeachScene: React.FC<{ accent: string; width?: number; height?: number; opacity?: number; style?: React.CSSProperties }> = ({
  accent,
  width = 260,
  height = 140,
  opacity = 1,
  style,
}) => (
  <svg width={width} height={height} viewBox="0 0 260 140" style={{ opacity, ...style }}>
    <defs>
      <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={accent} stopOpacity="0.05" />
        <stop offset="70%" stopColor={accent} stopOpacity="0.25" />
        <stop offset="100%" stopColor={accent} stopOpacity="0.4" />
      </linearGradient>
      <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
        <stop offset="100%" stopColor={accent} stopOpacity="0.55" />
      </linearGradient>
    </defs>

    {/* sky */}
    <rect x="0" y="0" width="260" height="82" fill="url(#skyGrad)" />

    {/* sun */}
    <circle cx="130" cy="62" r="26" fill="none" stroke={accent} strokeWidth="1.6" opacity="0.9" />
    <circle cx="130" cy="62" r="19" fill={accent} opacity="0.18" />

    {/* birds */}
    <path d="M60 30 Q64 25 68 30 Q72 25 76 30" stroke={accent} strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.7" />
    <path d="M175 20 Q178 16 181 20 Q184 16 187 20" stroke={accent} strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.6" />

    {/* sea */}
    <rect x="0" y="82" width="260" height="58" fill="url(#seaGrad)" />
    <path d="M0,82 C20,76 40,88 60,82 S100,88 120,82 S160,88 180,82 S220,88 240,82 S260,82 260,82" stroke={accent} strokeWidth="1.6" fill="none" opacity="0.8" />
    <path d="M0,96 C25,92 45,100 70,96 S110,100 135,96 S175,100 200,96 S240,100 260,96" stroke={accent} strokeWidth="1.2" fill="none" opacity="0.5" />
    <path d="M0,112 C30,108 50,116 80,112 S130,116 160,112 S210,116 260,112" stroke={accent} strokeWidth="1" fill="none" opacity="0.35" />

    {/* left palm silhouette, leaning over scene */}
    <g opacity="0.95">
      <path d="M14 140 L20 78" stroke={accent} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M20 78 C4 70, -10 76, -16 62 C0 60, 14 64, 20 78 Z" fill={accent} />
      <path d="M20 78 C34 66, 50 68, 58 54 C42 54, 28 62, 20 78 Z" fill={accent} />
      <path d="M20 78 C10 60, 10 44, 20 32 C28 46, 26 64, 20 78 Z" fill={accent} />
      <path d="M20 78 C30 58, 34 42, 28 28 C18 42, 16 62, 20 78 Z" fill={accent} />
      <circle cx="14" cy="86" r="3.2" fill={accent} />
      <circle cx="22" cy="90" r="3.2" fill={accent} />
    </g>

    {/* right palm silhouette, smaller, further back */}
    <g opacity="0.7">
      <path d="M246 140 L242 96" stroke={accent} strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M242 96 C254 90, 264 94, 268 84 C258 82, 248 86, 242 96 Z" fill={accent} />
      <path d="M242 96 C230 88, 220 90, 214 80 C224 78, 236 84, 242 96 Z" fill={accent} />
      <path d="M242 96 C248 82, 248 70, 242 60 C236 70, 238 84, 242 96 Z" fill={accent} />
    </g>

    {/* scooter silhouette on the shoreline */}
    <g transform="translate(96,108) scale(0.62)" opacity="0.85">
      <circle cx="14" cy="38" r="7" stroke={accent} strokeWidth="2.4" fill="none" />
      <circle cx="62" cy="38" r="7" stroke={accent} strokeWidth="2.4" fill="none" />
      <path d="M14 38 L22 38 L30 20 L44 20 M44 20 L44 30 L62 38 M44 20 L50 8 L58 8" stroke={accent} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 20 L34 20" stroke={accent} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="46" cy="16" r="4.5" fill={accent} />
    </g>

    {/* starfish on sand */}
    <g transform="translate(180,120) scale(0.4)" opacity="0.8">
      <path d="M32 2 L39 22 L60 22 L43 35 L50 58 L32 44 L14 58 L21 35 L4 22 L25 22 Z" fill={accent} />
    </g>
    <g transform="translate(50,124) scale(0.28)" opacity="0.6">
      <path d="M32 2 L39 22 L60 22 L43 35 L50 58 L32 44 L14 58 L21 35 L4 22 L25 22 Z" fill={accent} />
    </g>
  </svg>
);