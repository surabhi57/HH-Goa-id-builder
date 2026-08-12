import React from 'react';
import type { BuilderData } from '../types';
import { PRESET_ROLES, PRESET_VIBES, CARD_THEMES } from '../types';
import { Sparkles, Palmtree } from 'lucide-react';

interface BuilderCardPreviewProps {
  data: BuilderData;
  isUnlocked?: boolean;
  className?: string;
}

export const BuilderCardPreview: React.FC<BuilderCardPreviewProps> = ({
  data,
  isUnlocked = false,
  className = '',
}) => {
  const themeObj = CARD_THEMES.find((t) => t.id === data.theme) || CARD_THEMES[0];
  const roleObj = PRESET_ROLES.find((r) => r.id === data.role);
  const roleLabel = data.role === 'other' ? data.customRole || 'Builder' : roleObj?.label || 'Full Stack';
  const vibeObj = PRESET_VIBES.find((v) => v.id === data.vibe) || PRESET_VIBES[0];

  const displayName = data.name || 'YOUR BUILDER NAME';
  const displayHandle = data.handle || '@builder_handle';
  const displayTitle = data.generatedTitle || 'Goa Code Alchemist';
  const unlockedState = isUnlocked || data.unlocked;

  return (
    <div
      className={`builder-card-pass relative overflow-hidden transition-all duration-500 transform hover:scale-[1.02] ${
        unlockedState ? 'unlocked-glow' : ''
      } ${className}`}
      style={{
        background: themeObj.cardBgGradient,
        borderColor: themeObj.accentColor,
        color: themeObj.textColor,
      }}
    >
      {/* 🌊 Tropical Waves Card Header Backdrop */}
      <svg className="card-top-wave" viewBox="0 0 360 80" preserveAspectRatio="none">
        <path fill="rgba(250, 204, 21, 0.12)" d="M0,30 Q90,50 180,30 T360,30 L360,0 L0,0 Z"></path>
        <path fill="rgba(244, 63, 94, 0.08)" d="M0,45 Q90,25 180,45 T360,45 L360,0 L0,0 Z"></path>
      </svg>

      {/* Tropical Frond Palm Watermark Accent */}
      <svg className="absolute -bottom-6 -right-6 w-28 h-28 opacity-15 pointer-events-none" viewBox="0 0 100 100">
        <path d="M 88 18 Q 115 -8 140 12" fill="none" stroke="#FACC15" strokeWidth="4" />
        <path d="M 88 18 Q 62 -15 38 4" fill="none" stroke="#F43F5E" strokeWidth="4" />
      </svg>

      {/* Card Header Badge */}
      <div className="card-header text-center mb-3">
        <div
          className="card-header-badge py-1 px-3"
          style={{
            borderColor: themeObj.accentColor,
            color: themeObj.accentColor,
            background: 'rgba(5, 46, 34, 0.75)',
          }}
        >
          <span>HH GOA 2026 • OFFICIAL BUILDER PASS</span>
        </div>
        <div className="card-header-subtitle opacity-80 text-[10px] mt-1">
          {data.teamName ? `${data.teamName.toUpperCase()} • HACKER HOUSE GOA` : 'HACKER HOUSE GOA • MARCH 2026'}
        </div>
      </div>

      {/* Center Avatar Frame */}
      <div className="card-avatar-wrapper mb-3">
        <div
          className="card-avatar-ring w-24 h-24"
          style={{ borderColor: themeObj.accentColor }}
        >
          {data.photoUrl ? (
            <div className="avatar-img-box">
              <img
                src={data.photoUrl}
                alt={displayName}
                style={{
                  transform: `scale(${data.photoZoom}) translate(${data.photoOffsetX}px, ${data.photoOffsetY}px)`,
                }}
              />
            </div>
          ) : (
            <div
              className="avatar-placeholder"
              style={{ background: 'rgba(15, 76, 58, 0.9)', color: themeObj.accentColor }}
            >
              <span className="text-2xl font-bold">{displayName.charAt(0).toUpperCase()}</span>
            </div>
          )}
        </div>
        <div className="avatar-shell-badge w-6 h-6 text-xs">⚡</div>
      </div>

      {/* Main Card Identity Body */}
      <div className="card-body">
        <h3 className="card-name font-crimson font-bold text-xl tracking-tight leading-tight">
          {displayName}
        </h3>
        <p className="card-handle opacity-80 font-semibold text-[11px] mt-0.5">
          {displayHandle}
        </p>

        {/* Dynamic Class Banner */}
        <div
          className="card-title-banner my-2.5 py-1.5 px-3"
          style={{
            borderColor: themeObj.accentColor,
            background: 'rgba(5, 46, 34, 0.65)',
          }}
        >
          <div className="flex items-center justify-center gap-1">
            <Sparkles className="w-3 h-3 text-yellow-400" />
            <span className="card-title-text text-yellow-300 font-bold uppercase text-xs tracking-wider">
              {displayTitle}
            </span>
          </div>
        </div>

        {/* Role & Vibe Badges Row */}
        <div className="card-badges-row mb-2">
          <span
            className="card-role-badge flex items-center gap-1 text-[11px] py-1 px-2.5"
            style={{ background: 'rgba(250, 204, 21, 0.2)', color: '#FACC15' }}
          >
            <span>{roleObj?.icon || '💻'}</span>
            <span>{roleLabel}</span>
          </span>

          <span
            className="card-vibe-badge flex items-center gap-1 text-[11px] py-1 px-2.5"
            style={{ background: 'rgba(244, 63, 94, 0.25)', color: '#FB7185' }}
          >
            <span>{vibeObj.emoji}</span>
            <span>{vibeObj.label}</span>
          </span>
        </div>
      </div>

      {/* Card Footer */}
      <div className="card-footer pt-2" style={{ borderTopColor: 'rgba(250, 204, 21, 0.25)' }}>
        <div className="flex items-center gap-1 text-[10px]">
          <Palmtree className="w-3 h-3 text-yellow-400" />
          <span className="hashtag-text text-yellow-400 font-bold">#FrameInGoa</span>
        </div>
        <span className="event-date opacity-80 font-bold text-[10px]">GOA, INDIA</span>
      </div>
    </div>
  );
};
