// card/CardBack.tsx
import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { PalmTree, Starfish } from './BeachMotifs';

interface CardBackProps {
  patternId: string;
  credentialId: string;
  displayName: string;
  displayHandle: string;
  roleLabel: string;
  vibeLabel: string;
  unlocked: boolean;
}

export const CardBack: React.FC<CardBackProps> = ({
  patternId,
  credentialId,
  displayName,
  displayHandle,
  roleLabel,
  vibeLabel,
  unlocked,
}) => {
  const [qrSrc, setQrSrc] = useState<string>('');
  const verifyUrl = `https://hackerhousegoa.com/verify/${credentialId}`;

  useEffect(() => {
    let cancelled = false;
    QRCode.toDataURL(verifyUrl, { margin: 0, width: 200, color: { dark: '#1a1a1a', light: '#00000000' } })
      .then((url) => !cancelled && setQrSrc(url))
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [verifyUrl]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#092117', color: '#f5ead2' }}>
      
      {/* Noise Texture */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.12, mixBlendMode: 'overlay', pointerEvents: 'none', zIndex: 1 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id={`${patternId}-noise`}><feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" stitchTiles="stitch" /></filter>
          <rect width="100%" height="100%" filter={`url(#${patternId}-noise)`} />
        </svg>
      </div>

      {/* Ambient Glow */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 80% 80%, rgba(210, 174, 117, 0.15) 0%, transparent 50%)', zIndex: 2 }} />

      {/* Outer Border */}
      <div style={{ position: 'absolute', inset: 6, border: '1px solid #d2ae75', borderRadius: 8, opacity: 0.8, pointerEvents: 'none', zIndex: 5 }} />
      
      {/* Inner Border */}
      <div style={{ position: 'absolute', inset: 14, border: '1px solid #d2ae75', borderRadius: 6, opacity: 0.5, pointerEvents: 'none', zIndex: 5 }} />

      {/* Top Header */}
      <div style={{ position: 'relative', zIndex: 10, padding: '24px 24px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid rgba(210, 174, 117, 0.2)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.15em', color: '#d2ae75' }}>HACKER HOUSE GOA</span>
          <span style={{ fontSize: '6px', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.7 }}>Official Builder Pass</span>
        </div>
        <span style={{ fontSize: '8px', fontFamily: 'monospace', color: '#d2ae75', opacity: 0.9 }}>{credentialId}</span>
      </div>

      {/* Center Builder Info */}
      <div style={{ position: 'relative', zIndex: 10, padding: '24px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '7px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#d2ae75', marginBottom: 8, opacity: 0.8 }}>Identity Verified</div>
        
        <h4 style={{ fontFamily: 'var(--font-crimson)', fontSize: '1.6rem', margin: '0 0 4px 0', color: '#f5ead2', fontWeight: 700, lineHeight: 1 }}>{displayName}</h4>
        <div style={{ fontSize: '9px', opacity: 0.8, letterSpacing: '0.05em', marginBottom: 16 }}>{displayHandle}</div>

        <div style={{ fontSize: '6px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#d2ae75', marginBottom: 6, opacity: 0.8 }}>Builder Archetype</div>
        <div style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f5ead2', marginBottom: 12 }}>{roleLabel} · {vibeLabel}</div>
        
        {/* Decorative divider */}
        <svg width="60" height="8" viewBox="0 0 60 8" style={{ margin: '8px 0', opacity: 0.7 }}>
          <path d="M0,4 Q10,0 20,4 T40,4 T60,4" fill="none" stroke="#d2ae75" strokeWidth="1" />
        </svg>

        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: unlocked ? '#22c55e' : '#d2ae75', boxShadow: '0 0 8px rgba(0,0,0,0.5)' }} />
          <span style={{ fontSize: '6.5px', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.8 }}>
            {unlocked ? 'Credential Unlocked' : 'Active Credential'}
          </span>
        </div>
      </div>

      {/* QR Code and Coastal Motif (Mid/Lower) */}
      <div style={{ position: 'relative', zIndex: 10, padding: '0 24px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        
        {/* Coastal motif */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, opacity: 0.7 }}>
          <PalmTree accent="#d2ae75" size={42} opacity={0.8} />
          <Starfish accent="#d2ae75" size={20} opacity={0.8} />
        </div>

        {/* QR Code */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 72, height: 72, padding: 6, background: '#f9f4e8', borderRadius: 4, boxShadow: '0 4px 12px rgba(0,0,0,0.4)' }}>
            {qrSrc ? (
              <img src={qrSrc} alt="Verification QR" style={{ width: '100%', height: '100%', mixBlendMode: 'multiply' }} />
            ) : (
              <div style={{ width: '100%', height: '100%', background: '#e5e0d0' }} />
            )}
          </div>
          <span style={{ fontSize: '5px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#d2ae75', opacity: 0.8 }}>Scan to Verify</span>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={{ position: 'relative', zIndex: 10, padding: '12px 24px', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(210, 174, 117, 0.2)' }}>
        <span style={{ fontSize: '6px', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#d2ae75', opacity: 0.8 }}>Hacker House Goa · March 2026</span>
        <span style={{ fontSize: '6px', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#d2ae75', opacity: 0.8 }}>Goa, India</span>
      </div>
    </div>
  );
};
