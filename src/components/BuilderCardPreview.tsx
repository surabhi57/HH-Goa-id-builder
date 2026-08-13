// BuilderCardPreview.tsx
import React, { useState, useMemo, useId } from 'react';
import type { BuilderData } from '../types';
import { PRESET_ROLES, PRESET_VIBES, CARD_THEMES } from '../types';

import { CardBack } from './card/CardBack';
import { RotateCcw } from 'lucide-react';
import palmCorner from '../assets/palm-corner.png';
import { Scooter } from './card/BeachMotifs';

interface BuilderCardPreviewProps {
  data: BuilderData;
  isUnlocked?: boolean;
  className?: string;
}

function useCredentialId(seed: string) {
  return useMemo(() => {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
    return `HH26-${String(hash % 1000000).padStart(6, '0')}`;
  }, [seed]);
}

export const BuilderCardPreview: React.FC<BuilderCardPreviewProps> = ({
  data,
  isUnlocked = false,
  className = '',
}) => {
  const [flipped, setFlipped] = useState(false);
  const patternId = useId();

  const themeObj = CARD_THEMES.find((t) => t.id === data.theme) || CARD_THEMES[0];
  const roleObj = PRESET_ROLES.find((r) => r.id === data.role);
  const roleLabel = data.role === 'other' ? data.customRole || 'Builder' : roleObj?.label || 'Full Stack';
  const vibeObj = PRESET_VIBES.find((v) => v.id === data.vibe) || PRESET_VIBES[0];

  const displayName = data.name || 'YOUR BUILDER NAME';
  const displayHandle = data.handle || '@builder_handle';
  const displayTitle = data.generatedTitle || 'Goa Code Alchemist';
  const unlockedState = isUnlocked || data.unlocked;

  const credentialId = useCredentialId(displayHandle + displayName);
  const accent = themeObj.accentColor;

  const flip = () => setFlipped((f) => !f);

  return (
    <div className={className} style={{ position: 'relative', width: '100%', minWidth: 220 }}>
      <div style={{ perspective: '2000px' }}>
        <div
          role="button"
          tabIndex={0}
          aria-label="Flip credential card"
          onClick={flip}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              flip();
            }
          }}
          style={{
            position: 'relative',
            width: '100%',
            cursor: 'pointer',
            userSelect: 'none',
            aspectRatio: '0.7',
            transformStyle: 'preserve-3d',
            transition: 'transform 650ms cubic-bezier(0.4, 0.0, 0.2, 1)',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
            {/* FRONT */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: 16,
                overflow: 'visible',
                display: 'flex',
                flexDirection: 'column',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                background: '#0A2619',
                color: '#f5ead2',
                boxShadow: unlockedState
                  ? `0 24px 48px -16px rgba(0,0,0,0.55), 0 0 0 1px #d2ae7580`
                  : '0 24px 48px -16px rgba(0,0,0,0.55)',
                padding: 6, // p-1.5
              }}
            >
              {/* Noise Texture */}
              <div style={{ position: 'absolute', inset: 0, opacity: 0.12, mixBlendMode: 'overlay', pointerEvents: 'none', zIndex: 1 }}>
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <filter id="noiseFilter">
                    <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" stitchTiles="stitch" />
                  </filter>
                  <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
              </div>

              {/* Ambient lighting */}
              <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.1) 0%, transparent 60%)', zIndex: 2 }} />

              {/* Palm Corners (Background Layer) */}
              <img src={palmCorner} alt="" style={{ position: 'absolute', top: -8, left: -24, width: 144, transform: 'scaleX(-1)', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5)) contrast(1.1) brightness(0.9)', opacity: 0.8, pointerEvents: 'none', zIndex: 0 }} />
              <img src={palmCorner} alt="" style={{ position: 'absolute', top: -8, right: -24, width: 144, filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5)) contrast(1.1) brightness(0.9)', opacity: 0.8, pointerEvents: 'none', zIndex: 0 }} />

              {/* Outer Thin Gold Border */}
              <div style={{ width: '100%', height: '100%', border: '1px solid rgba(212, 175, 55, 0.4)', borderRadius: 12, padding: 4, position: 'relative', display: 'flex', flexDirection: 'column', zIndex: 10 }}>
                
                {/* Inner Thin Gold Border */}
                <div style={{ width: '100%', height: '100%', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 10, padding: '20px 16px', background: 'rgba(10, 38, 25, 0.6)', backdropFilter: 'blur(4px)' }}>
                  
                  {/* Top Text */}
                  <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.15em', color: '#D4AF37', textTransform: 'uppercase', marginBottom: 4 }}>
                    HH GOA 2026 • OFFICIAL BUILDER PASS
                  </div>
                  <div style={{ fontSize: '7px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>
                    HACKER HOUSE GOA • MARCH 2026
                  </div>

                  {/* Avatar with specific green/gold ring and red dot */}
                  <div style={{ position: 'relative', marginBottom: 12 }}>
                    <div style={{ width: 68, height: 68, borderRadius: '50%', border: '3px solid #0A2619', outline: '1px solid #D4AF37', background: '#051A10', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                      {data.photoUrl ? (
                        <img src={data.photoUrl} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: `scale(${data.photoZoom}) translate(${data.photoOffsetX}px, ${data.photoOffsetY}px)` }} />
                      ) : (
                        <span style={{ color: '#D4AF37', fontSize: '20px', fontFamily: 'serif' }}>Y</span>
                      )}
                    </div>
                    {/* Red Status Dot */}
                    <div style={{ position: 'absolute', bottom: 0, right: 0, width: 14, height: 14, background: '#F43F5E', borderRadius: '50%', border: '2px solid #0A2619' }} />
                  </div>

                  {/* Name & Handle (Lowercase serif name) */}
                  <h2 style={{ fontFamily: 'serif', fontSize: '24px', fontWeight: 700, color: '#F3EFE0', letterSpacing: '0.05em', marginBottom: 4, textTransform: 'lowercase' }}>
                    {displayName}
                  </h2>
                  <p style={{ fontSize: '9px', color: '#34D399', fontFamily: 'monospace', letterSpacing: '0.1em', marginBottom: 16 }}>
                    {displayHandle}
                  </p>

                  {/* Builder Title (Thin Gold Pill) */}
                  <div style={{ width: '100%', border: '1px solid #D4AF37', borderRadius: 9999, padding: '6px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
                    <span style={{ fontSize: '9px', fontWeight: 700, color: '#D4AF37', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                      {displayTitle}
                    </span>
                  </div>

                  {/* Roles & Vibes (Off-white pills with stars) */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', marginBottom: 16 }}>
                    <span style={{ color: '#D4AF37', fontSize: '12px' }}>★</span>
                    
                    <div style={{ display: 'flex', gap: 8 }}>
                      <div style={{ padding: '4px 12px', borderRadius: 9999, background: '#F3EFE0', fontSize: '8px', fontWeight: 700, color: '#5C4A26', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 4, textTransform: 'uppercase', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                        <span style={{ color: '#D4AF37' }}>✦</span> {roleLabel}
                      </div>
                      <div style={{ color: '#D4AF37', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>;</div>
                      <div style={{ padding: '4px 12px', borderRadius: 9999, background: '#F3EFE0', fontSize: '8px', fontWeight: 700, color: '#5C4A26', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 4, textTransform: 'uppercase', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                        <span>{vibeObj.emoji}</span> {vibeObj.label}
                      </div>
                    </div>

                    <span style={{ color: '#D4AF37', fontSize: '12px' }}>★</span>
                  </div>

                  {/* Top Wave Divider */}
                  <div style={{ color: '#D4AF37', fontSize: '20px', letterSpacing: '0.1em', opacity: 0.35, marginBottom: 'auto' }}>
                    〰〰〰
                  </div>

                  {/* CENTER FILLER - VESPA IMAGE */}
                  <div style={{ flex: 1, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', margin: '4px 0', zIndex: 0, opacity: 0.9 }}>
                    <div style={{ transform: 'scale(1.8)', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))' }}>
                      <Scooter accent="#D4AF37" size={60} opacity={1} />
                    </div>
                  </div>

                  {/* Bottom Wave Divider (pushes footer down) */}
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#D4AF37', opacity: 0.35, fontSize: '18px', marginBottom: 12 }}>
                    <span style={{ fontSize: '14px' }}>☆</span>
                    <span>〰〰〰〰〰</span>
                    <span style={{ fontSize: '14px' }}>☆</span>
                  </div>

                  {/* Footer Area - NO WHITE BOX! */}
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: 4, borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: 12 }}>
                    <div style={{ fontSize: '9px', fontWeight: 700, color: '#D4AF37', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                      #FrameInGoa
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                      <div style={{ fontSize: '8px', fontWeight: 700, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 2 }}>
                        GOA, INDIA
                      </div>
                      <div style={{ fontSize: '7px', fontFamily: 'monospace', color: 'rgba(212, 175, 55, 0.8)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                        ID • {credentialId}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          {/* BACK */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 12,
              overflow: 'hidden',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              background: themeObj.cardBgGradient,
              border: `1px solid ${accent}40`,
              color: themeObj.textColor,
              boxShadow: '0 24px 48px -16px rgba(0,0,0,0.55)',
            }}
          >
            <CardBack
              patternId={`${patternId}-back`}
              credentialId={credentialId}
              displayName={displayName}
              displayHandle={displayHandle}
              roleLabel={roleLabel}
              vibeLabel={vibeObj.label}
              unlocked={unlockedState}
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          flip();
        }}
        style={{
          margin: '12px auto 0',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          fontSize: '10px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          padding: '6px 12px',
          borderRadius: 9999,
          border: `1px solid ${accent}40`,
          color: accent,
          background: 'transparent',
          cursor: 'pointer',
        }}
      >
        <RotateCcw style={{ width: 12, height: 12 }} />
        {flipped ? 'View Front' : 'View Back'}
      </button>
    </div>
  );
};