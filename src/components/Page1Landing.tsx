import React from 'react';
import { Sparkles } from 'lucide-react';

interface Page1LandingProps { onEnter: () => void; onTryDemo: () => void; }

export const Page1Landing: React.FC<Page1LandingProps> = ({ onEnter, onTryDemo }) => (
  <section className="landing-page-container fade-in">
    <div className="landing-beach-background" aria-hidden="true">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" role="img">
        <defs>
          <linearGradient id="landingSky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#043d2e"/><stop offset=".68" stopColor="#096046"/><stop offset="1" stopColor="#0c7a59"/></linearGradient>
          <linearGradient id="landingSea" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#56d0a3"/><stop offset="1" stopColor="#087255"/></linearGradient>
          <linearGradient id="landingSand" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#f8e4ae"/><stop offset="1" stopColor="#cda965"/></linearGradient>
        </defs>
        <rect width="1440" height="900" fill="url(#landingSky)"/>
        <path d="M0 555 Q160 525 325 548 T650 542 T980 550 T1440 528 V745 H0Z" fill="url(#landingSea)"/>
        <g fill="none" stroke="#e8ffe8" strokeWidth="4" opacity=".72"><path d="M0 590 Q105 570 210 591 T420 590 T630 588"/><path d="M720 595 Q840 574 950 594 T1170 590 T1440 590"/><path d="M35 634 Q130 614 230 635 T435 634"/><path d="M860 640 Q960 620 1070 640 T1320 636"/></g>
        <path d="M0 655 Q170 610 350 666 T710 655 T1080 666 T1440 638 V900 H0Z" fill="url(#landingSand)"/>
        <g fill="#d0b170" opacity=".8"><circle cx="340" cy="758" r="4"/><circle cx="565" cy="828" r="3"/><circle cx="932" cy="744" r="4"/><circle cx="1133" cy="801" r="3"/><circle cx="786" cy="863" r="5"/></g>
        <g className="landing-svg-palm landing-svg-palm-left"><path d="M84 740 Q123 462 188 308" stroke="#765232" strokeWidth="27" fill="none"/><g fill="#1b7953" stroke="#0a4d39" strokeWidth="4"><path d="M180 324 Q42 266 0 319 Q101 364 183 347"/><path d="M184 318 Q68 177 28 235 Q118 325 182 339"/><path d="M189 314 Q216 151 255 175 Q246 293 202 342"/><path d="M190 323 Q326 203 352 263 Q242 354 194 347"/></g></g>
        <g className="landing-svg-palm landing-svg-palm-right"><path d="M1323 760 Q1287 474 1210 325" stroke="#765232" strokeWidth="28" fill="none"/><g fill="#1b7953" stroke="#0a4d39" strokeWidth="4"><path d="M1215 337 Q1075 257 1040 319 Q1144 361 1216 357"/><path d="M1209 330 Q1091 174 1060 237 Q1150 331 1215 351"/><path d="M1210 327 Q1212 151 1262 173 Q1256 300 1221 350"/><path d="M1212 337 Q1359 209 1397 269 Q1280 355 1218 356"/></g></g>
        <g transform="translate(930 531)"><rect x="0" y="55" width="245" height="133" rx="5" fill="#fff1cf" stroke="#07503a" strokeWidth="6"/><path d="M-19 58 L120 -15 264 58Z" fill="#f36f91" stroke="#07503a" strokeWidth="6"/><path d="M12 57H234" stroke="#facc15" strokeWidth="17" strokeDasharray="22 11"/><rect x="88" y="104" width="60" height="84" fill="#07503a"/><rect x="25" y="90" width="43" height="44" fill="#63d0a4" stroke="#07503a" strokeWidth="4"/><rect x="168" y="90" width="43" height="44" fill="#63d0a4" stroke="#07503a" strokeWidth="4"/><rect x="70" y="28" width="102" height="31" rx="4" fill="#f33e76"/><text x="121" y="50" textAnchor="middle" fontFamily="monospace" fontWeight="bold" fontSize="16" fill="#fff8d9">GOA CAFE</text><path d="M-40 190H283" stroke="#b98d57" strokeWidth="17"/></g>
        <g stroke="#5e452a" strokeWidth="7" fill="none"><path d="M810 708v86M760 791h100"/><path d="M620 720v73M583 790h74"/><path d="M400 710v91M358 798h84"/></g>
        <g><path d="M735 710 Q800 624 865 710Z" fill="#facc15" stroke="#07503a" strokeWidth="5"/><path d="M555 724 Q620 641 685 724Z" fill="#f36f91" stroke="#07503a" strokeWidth="5"/><path d="M340 714 Q405 630 470 714Z" fill="#facc15" stroke="#07503a" strokeWidth="5"/></g>
        <g fill="#1d7956" stroke="#07503a" strokeWidth="5"><path d="M710 760h74l-13 78h-50z"/><path d="M535 766h65l-12 70h-44z"/><path d="M325 756h72l-14 82h-48z"/></g>
        <g className="landing-beach-shells" fill="#f7e1bb" stroke="#bb8b5c" strokeWidth="4"><path d="M86 842q42-63 86 0z"/><path d="M112 824v18M135 809v33M156 823v19"/><path d="M1250 838q48-72 97 0z"/><path d="M1275 817v22M1300 803v36M1325 819v20"/><path d="M1190 848l34-44 30 42z" fill="#f38aa1"/></g>
      </svg>
    </div>
    <div className="landing-content-overlay">
      <button type="button" className="landing-back" aria-label="Back">←</button>
      <p className="landing-postmark">BUILD · CONNECT · CREATE</p>
      <h1 className="landing-title landing-retro-title"><span>HACKER HOUSE</span><strong>GOA</strong></h1>
      <p className="landing-date">28 — 31 OCT 2026</p>
      <p className="landing-subtitle">Create your official builder identity<br />and unlock the Hacker House Goa experience.</p>
      <div className="landing-actions"><button onClick={onEnter} className="btn-primary-gradient landing-cta-btn pulse-glow-cta">CREATE YOUR BUILDER PASS</button></div>
      <button onClick={onTryDemo} className="landing-demo"><Sparkles className="w-3.5 h-3.5" /> Try a sample pass</button>
      <div className="landing-traits"><span>VIBRANT</span><span>SUN-KISSED</span><span>SOULFUL</span></div>
    </div>
  </section>
);
