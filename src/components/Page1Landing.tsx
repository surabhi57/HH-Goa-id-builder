import React from 'react';
import { Sparkles } from 'lucide-react';

interface Page1LandingProps {
  onEnter: () => void;
  onTryDemo: () => void;
}

export const Page1Landing: React.FC<Page1LandingProps> = ({ onEnter, onTryDemo }) => {
  return (
    <div className="landing-page-container fade-in">
      <div className="landing-hero-content relative">
        {/* Ambient Floating Sparkle Particles */}
        <div className="particle particle-1" />
        <div className="particle particle-2" />
        <div className="particle particle-3" />
        <div className="particle particle-4" />

        {/* Wide-Open Tropical Beach Hero Illustration (No Big Trees) */}
        <div className="goa-scene-illustration my-3 overflow-hidden rounded-3xl relative">
          <svg
            viewBox="0 0 850 360"
            className="w-full max-w-2xl mx-auto filter drop-shadow-2xl"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="skyGradWorld" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0B3C2D" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#0F4C3A" stopOpacity="0.4" />
              </linearGradient>

              <linearGradient id="laptopScreenGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#052E22" />
                <stop offset="100%" stopColor="#0B3C2D" />
              </linearGradient>

              <linearGradient id="oceanGradWorld" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0B3C2D" />
                <stop offset="50%" stopColor="#34D399" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#062E22" />
              </linearGradient>
            </defs>

            {/* Sky Background */}
            <rect width="850" height="270" fill="url(#skyGradWorld)" rx="18" />

            {/* 🌊 Ocean Waves Horizon */}
            <path
              d="M 0 230 Q 212 210 425 230 T 850 230 L 850 360 L 0 360 Z"
              fill="url(#oceanGradWorld)"
            />
            <path
              className="wave-ripple-smooth"
              d="M 0 245 Q 212 228 425 245 T 850 245"
              fill="none"
              stroke="#FACC15"
              strokeWidth="2.5"
              opacity="0.85"
            />
            <path
              className="wave-ripple-smooth-delay"
              d="M 0 262 Q 220 250 425 262 T 850 262"
              fill="none"
              stroke="#F43F5E"
              strokeWidth="2"
              opacity="0.7"
            />

            {/* 🏠 1. Traditional Goan House (Left Side) */}
            <g transform="translate(65, 130)">
              <rect x="0" y="30" width="110" height="80" fill="#0B3C2D" stroke="#FACC15" strokeWidth="2.5" rx="5" />
              <polygon points="-12,30 55,-18 122,30" fill="#F43F5E" stroke="#FACC15" strokeWidth="2" />
              <line x1="55" y1="-18" x2="55" y2="30" stroke="#FACC15" strokeWidth="1.5" opacity="0.6" />
              <path d="M 38 110 L 38 68 A 17 17 0 0 1 72 68 L 72 110 Z" fill="#FACC15" />
              <rect x="12" y="48" width="18" height="22" rx="3" fill="#F43F5E" stroke="#FACC15" strokeWidth="1.5" />
              <rect x="80" y="48" width="18" height="22" rx="3" fill="#F43F5E" stroke="#FACC15" strokeWidth="1.5" />
            </g>

            {/* 💻 2. Sleek Laptop / Computer Screen Displaying Builder Code (Center) */}
            <g transform="translate(320, 100)">
              {/* Laptop Bezel */}
              <rect x="0" y="0" width="210" height="135" rx="10" fill="#1E293B" stroke="#FACC15" strokeWidth="3" />
              {/* Inner Laptop Screen */}
              <rect x="8" y="8" width="194" height="119" rx="6" fill="url(#laptopScreenGrad)" />

              {/* IDE Header */}
              <rect x="8" y="8" width="194" height="18" fill="#052E22" />
              <circle cx="18" cy="17" r="3" fill="#F43F5E" />
              <circle cx="28" cy="17" r="3" fill="#FACC15" />
              <circle cx="38" cy="17" r="3" fill="#34D399" />
              <text x="105" y="21" fontFamily="monospace" fontSize="8" fill="#A7F3D0" textAnchor="middle">
                hh_goa_2026.ts
              </text>

              {/* Code Lines & Developer Avatar */}
              <g transform="translate(20, 35)">
                <rect x="0" y="5" width="60" height="4" rx="2" fill="#FACC15" opacity="0.8" />
                <rect x="0" y="14" width="85" height="4" rx="2" fill="#34D399" opacity="0.7" />
                <rect x="0" y="23" width="70" height="4" rx="2" fill="#F43F5E" opacity="0.8" />
                <rect x="0" y="32" width="50" height="4" rx="2" fill="#FDE047" opacity="0.7" />

                <circle cx="130" cy="25" r="16" fill="#FACC15" />
                <path d="M 116 52 C 116 38 130 36 130 36 C 130 36 144 38 144 52 Z" fill="#F43F5E" />
                <text x="130" y="29" fontSize="11" textAnchor="middle">💻</text>
              </g>

              {/* Laptop Keyboard & Trackpad */}
              <path d="M -20 135 L 230 135 L 245 152 L -35 152 Z" fill="#0F172A" stroke="#FACC15" strokeWidth="2" />
              <rect x="85" y="139" width="40" height="8" rx="2" fill="#334155" />
            </g>

            {/* 🦜 3. Goan Mascot Character with Speech Bubble */}
            <g transform="translate(575, 80)" className="mascot-character">
              <g transform="translate(-140, -10)">
                <rect x="0" y="0" width="165" height="38" rx="14" fill="#FACC15" stroke="#052E22" strokeWidth="2" />
                <polygon points="120,38 135,38 130,48" fill="#FACC15" />
                <text x="82" y="23" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="10" fill="#052E22" textAnchor="middle">
                  Hey Builder! Join HH Goa! 🌴
                </text>
              </g>

              <circle cx="20" cy="65" r="22" fill="#F43F5E" stroke="#FACC15" strokeWidth="2" />
              <circle cx="14" cy="58" r="4" fill="#FFFFFF" />
              <circle cx="14" cy="58" r="2" fill="#000000" />
              <polygon points="6,62 0,67 8,72" fill="#FACC15" />
              <path d="M 20 87 C 0 87 5 130 25 130 C 45 130 50 87 20 87 Z" fill="#34D399" stroke="#FACC15" strokeWidth="2" />
              <rect x="10" y="54" width="18" height="8" rx="2" fill="#052E22" />
            </g>

            {/* 🛵 4. Classic Goan Vespa Scooter (Center Beach) */}
            <g transform="translate(210, 195)">
              <path d="M 0 35 Q 25 10 55 25 Q 75 15 90 35 L 75 45 L 10 45 Z" fill="#F43F5E" stroke="#FACC15" strokeWidth="2" />
              <circle cx="20" cy="45" r="14" fill="#052E22" stroke="#FACC15" strokeWidth="3" />
              <circle cx="20" cy="45" r="5" fill="#FACC15" />
              <circle cx="75" cy="45" r="14" fill="#052E22" stroke="#FACC15" strokeWidth="3" />
              <circle cx="75" cy="45" r="5" fill="#FACC15" />
              <line x1="25" y1="18" x2="15" y2="-5" stroke="#FACC15" strokeWidth="3" strokeLinecap="round" />
              <circle cx="12" cy="-7" r="7" fill="#FACC15" />
              <rect x="35" y="12" width="30" height="8" rx="4" fill="#FACC15" />
            </g>

            {/* 🌿 5. Foreground Tropical Foliage */}
            <g fill="#0F4C3A" stroke="#FACC15" strokeWidth="1.5">
              <path d="M 30 290 Q 0 245 45 235 Q 60 265 30 290 Z" fill="#F43F5E" opacity="0.85" />
              <path d="M 810 290 Q 840 245 795 235 Q 780 265 810 290 Z" fill="#34D399" opacity="0.85" />
            </g>
          </svg>
        </div>

        {/* Refined Editorial Typography */}
        <h1 className="landing-title mt-3">
          <span className="block text-emerald-200 font-serif italic font-normal text-3xl sm:text-4xl md:text-5xl tracking-wide">
            Welcome to
          </span>
          <span className="block text-yellow-400 font-serif font-normal text-4xl sm:text-6xl md:text-7xl uppercase tracking-wider mt-1 drop-shadow-lg">
            HACKER HOUSE
          </span>
          <span className="block text-rose-400 font-script font-bold text-4xl sm:text-6xl md:text-7xl capitalize mt-1 drop-shadow-md">
            Goa 2026
          </span>
        </h1>

        {/* Subtitle */}
        <p className="landing-subtitle max-w-md mx-auto mt-4 text-emerald-200 text-sm sm:text-base font-medium">
          The ultimate tropical builder experience. Generate your official collectible HH Goa Builder ID Pass.
        </p>

        {/* Animated Glow/Pulse "CLICK HERE TO JOIN" Button */}
        <div className="landing-actions mt-8">
          <button
            onClick={onEnter}
            className="btn-primary-gradient landing-cta-btn pulse-glow-cta text-base sm:text-lg font-bold uppercase tracking-wider"
          >
            <span>CLICK HERE TO JOIN</span>
          </button>
        </div>

        {/* Sample Pass Demo Link */}
        <div className="mt-6">
          <button
            onClick={onTryDemo}
            className="text-xs text-yellow-300 hover:text-yellow-100 underline underline-offset-4 inline-flex items-center gap-1 font-semibold transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Or test with a sample pass demo</span>
          </button>
        </div>
      </div>
    </div>
  );
};
