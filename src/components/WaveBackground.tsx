import React from 'react';

export const WaveBackground: React.FC = () => {
  return (
    <div className="wave-bg-container" aria-hidden="true">
      {/* Deep Green Ambient Gradient Canvas */}
      <div className="gradient-canvas" />

      {/* ☀️ Big Glowing Fixed Top-Right Sun (Below Navbar) */}
      <div className="top-right-sun-wrapper">
        <div className="top-right-sun-aura" />
        <div className="top-right-sun-disc" />
        <div className="top-right-sun-ring" />
      </div>

      {/* ☁️ Crisp High-Visibility Small Cute Clouds Drifting Across Upper Sky (Below Navbar) */}
      <div className="fullpage-clouds-layer">
        <svg className="w-full h-64 absolute inset-x-0" viewBox="0 0 1440 240" preserveAspectRatio="none">
          {/* Cloud 1 - Bright White Top Left */}
          <g className="cloud-drift-1">
            <path
              d="M 60 40 Q 82 20 112 26 Q 130 10 158 26 Q 175 18 195 32 Q 208 46 188 60 Q 162 66 80 62 Q 60 60 60 40 Z"
              fill="#FFFFFF"
              opacity="0.88"
            />
          </g>
          {/* Cloud 2 - Warm Sun Yellow Top Right */}
          <g className="cloud-drift-2">
            <path
              d="M 800 35 Q 822 15 852 21 Q 870 10 898 22 Q 915 14 935 27 Q 948 41 928 55 Q 902 59 820 57 Q 800 55 800 35 Z"
              fill="#FDE047"
              opacity="0.85"
            />
          </g>
          {/* Cloud 3 - Mint Tint Mid Left */}
          <g className="cloud-drift-3">
            <path
              d="M 300 70 Q 318 53 345 59 Q 365 45 392 59 Q 410 49 432 65 Q 444 80 422 91 Q 398 95 315 91 Q 298 85 300 70 Z"
              fill="#A7F3D0"
              opacity="0.85"
            />
          </g>
          {/* Cloud 4 - Pure White Mid Right */}
          <g className="cloud-drift-4">
            <path
              d="M 1100 50 Q 1118 35 1144 39 Q 1160 27 1182 41 Q 1198 33 1216 47 Q 1228 61 1208 71 Q 1188 75 1112 73 Q 1098 69 1100 50 Z"
              fill="#FFFFFF"
              opacity="0.88"
            />
          </g>
          {/* Cloud 5 - Sun Yellow Far Left */}
          <g className="cloud-drift-5">
            <path
              d="M -20 30 Q -2 15 24 20 Q 40 9 64 21 Q 78 13 94 27 Q 105 39 88 49 Q 68 53 0 51 Q -18 47 -20 30 Z"
              fill="#FACC15"
              opacity="0.8"
            />
          </g>
          {/* Cloud 6 - Soft Mint Lower Center */}
          <g className="cloud-drift-6">
            <path
              d="M 560 85 Q 578 70 602 75 Q 618 63 640 77 Q 654 69 672 83 Q 684 97 664 107 Q 644 111 575 109 Q 558 103 560 85 Z"
              fill="#34D399"
              opacity="0.8"
            />
          </g>
        </svg>
      </div>

      {/* 🐦 Continuous Sparrows Flying Directly On The Page (Below Navbar) */}
      <div className="fullpage-birds-layer">
        <svg className="w-full h-56 absolute inset-x-0" viewBox="0 0 1440 220" preserveAspectRatio="none">
          {/* Sparrow 1 - Vibrant Sun Yellow */}
          <g className="bird-fly-1">
            <path d="M 160 45 Q 170 33 180 45 Q 190 33 200 45" fill="none" stroke="#FACC15" strokeWidth="3.5" strokeLinecap="round" />
          </g>
          {/* Sparrow 2 - Hot Rose Pink */}
          <g className="bird-fly-2">
            <path d="M 600 60 Q 610 48 620 60 Q 630 48 640 60" fill="none" stroke="#F43F5E" strokeWidth="3.5" strokeLinecap="round" />
          </g>
          {/* Sparrow 3 - Crisp White */}
          <g className="bird-fly-3">
            <path d="M 960 40 Q 970 28 980 40 Q 990 28 1000 40" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
          </g>
          {/* Sparrow 4 - Electric Yellow */}
          <g className="bird-fly-4">
            <path d="M 380 80 Q 388 70 396 80 Q 404 70 412 80" fill="none" stroke="#FACC15" strokeWidth="3" strokeLinecap="round" />
          </g>
          {/* Sparrow 5 - Mint Green */}
          <g className="bird-fly-5">
            <path d="M 1200 55 Q 1208 45 1216 55 Q 1224 45 1232 55" fill="none" stroke="#34D399" strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      {/* ✨ Floating Golden Tropical Particles Across Whole Screen */}
      <div className="bubble bubble-1" />
      <div className="bubble bubble-2" />
      <div className="bubble bubble-3" />
      <div className="bubble bubble-4" />
      <div className="bubble bubble-5" />
      <div className="particle particle-1" />
      <div className="particle particle-2" />
      <div className="particle particle-3" />
      <div className="particle particle-4" />
      <div className="particle particle-5" />

      {/* 🌊 Multi-Layered Ocean Wave Tides Along Viewport Bottom */}
      <svg className="wave wave-1" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="rgba(250, 204, 21, 0.08)"
          d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,165.3C960,149,1056,139,1152,154.7C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <svg className="wave wave-2" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="rgba(244, 63, 94, 0.06)"
          d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,128C672,117,768,139,864,154.7C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <svg className="wave wave-3" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="rgba(52, 211, 153, 0.05)"
          d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,224C840,224,960,192,1080,181.3C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
