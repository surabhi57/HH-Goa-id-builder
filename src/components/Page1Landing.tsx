import React from 'react';
import { Sparkles } from 'lucide-react';

interface Page1LandingProps { onEnter: () => void; onTryDemo: () => void; }

export const Page1Landing: React.FC<Page1LandingProps> = ({ onEnter, onTryDemo }) => (
  <section className="landing-page-container fade-in">
    <div className="landing-natural-scene" aria-hidden="true">
      <div className="landing-ocean" /><div className="landing-sand" />
      <div className="landing-palm landing-palm-left"><i /><b /><em /></div>
      <div className="landing-palm landing-palm-right"><i /><b /><em /></div>
      <div className="landing-hut"><span>GOA CAFE</span><i /><b /><em /></div>
      <div className="landing-umbrella umbrella-one"><i /></div><div className="landing-umbrella umbrella-two"><i /></div>
      <div className="landing-village"><i /><i /><i /><i /></div>
      <div className="landing-postcard-prop postcard-left">GOA<br />POST</div><div className="landing-postcard-prop postcard-right">POST<br />CARD</div>
      <span className="landing-shell shell-one">◒</span><span className="landing-shell shell-two">✦</span><span className="landing-shell shell-three">◔</span>
    </div>
    <div className="landing-hero-content">
      <p className="landing-postmark">GOA, INDIA · 2026</p>
      <h1 className="landing-title landing-retro-title"><span>HACKER HOUSE</span><strong>GOA</strong></h1>
      <p className="landing-subtitle">A tropical builder experience—make your official Hacker House Goa Builder ID.</p>
      <div className="landing-actions"><button onClick={onEnter} className="btn-primary-gradient landing-cta-btn pulse-glow-cta">CREATE YOUR BUILDER PASS</button></div>
      <button onClick={onTryDemo} className="landing-demo"><Sparkles className="w-3.5 h-3.5" /> Try a sample pass</button>
      <div className="landing-traits"><span>VIBRANT</span><span>SUN-KISSED</span><span>SOULFUL</span></div>
    </div>
  </section>
);
