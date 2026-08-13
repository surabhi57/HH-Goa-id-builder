// card/Avatar.tsx
import React from 'react';
import type { BuilderData } from '../../types';

interface AvatarProps {
  data: BuilderData;
  accent: string;
  displayName: string;
  unlocked: boolean;
  size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ data, accent, displayName, unlocked, size = 76 }) => (
  <div style={{ position: 'relative', flexShrink: 0, width: size, height: size }}>
    <div style={{ position: 'absolute', inset: 0, borderRadius: '9999px', border: `1px solid ${accent}59` }} />
    <div
      style={{
        position: 'absolute',
        inset: 5,
        borderRadius: '9999px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `1.5px solid ${accent}`,
        boxShadow: '0 6px 16px rgba(0,0,0,0.35)',
      }}
    >
      {data.photoUrl ? (
        <img
          src={data.photoUrl}
          alt={displayName}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: `scale(${data.photoZoom}) translate(${data.photoOffsetX}px, ${data.photoOffsetY}px)`,
          }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(15,76,58,0.9)',
            color: accent,
          }}
        >
          <span style={{ fontSize: '1.15rem', fontWeight: 700 }}>{displayName.charAt(0).toUpperCase()}</span>
        </div>
      )}
    </div>
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 14,
        height: 14,
        borderRadius: '9999px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: unlocked ? '#22c55e' : '#F43F5E',
        border: '2px solid rgba(0,0,0,0.3)',
      }}
      title={unlocked ? 'Unlocked' : 'Active'}
    />
  </div>
);