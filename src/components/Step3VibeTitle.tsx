import React, { useEffect } from 'react';
import { ArrowLeft, Sparkles, RefreshCw, Lock } from 'lucide-react';
import type { BuilderData } from '../types';
import { PRESET_VIBES } from '../types';
import { generateBuilderTitles, getRandomTitle } from '../utils/titleGenerator';

interface Step3VibeTitleProps {
  data: BuilderData;
  onChange: (updates: Partial<BuilderData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Step3VibeTitle: React.FC<Step3VibeTitleProps> = ({
  data,
  onChange,
  onNext,
  onPrev,
}) => {
  // Automatically generate title if none exists or when vibe/role changes
  useEffect(() => {
    if (!data.generatedTitle) {
      const newTitle = getRandomTitle(data.role, data.customRole, data.techStack, data.vibe);
      onChange({ generatedTitle: newTitle });
    }
  }, [data.role, data.customRole, data.vibe]);

  const handleShuffleTitle = () => {
    const options = generateBuilderTitles(data.role, data.customRole, data.techStack, data.vibe);
    const filtered = options.filter((t) => t !== data.generatedTitle);
    const nextTitle = filtered.length > 0
      ? filtered[Math.floor(Math.random() * filtered.length)]
      : options[0];
    onChange({ generatedTitle: nextTitle });
  };

  const handleSelectVibe = (vibeId: string) => {
    onChange({ vibe: vibeId });
    const newTitle = getRandomTitle(data.role, data.customRole, data.techStack, vibeId);
    onChange({ generatedTitle: newTitle });
  };

  const suggestedTitles = generateBuilderTitles(data.role, data.customRole, data.techStack, data.vibe);

  return (
    <div className="step-card fade-in">
      <div className="step-header">
        <div className="step-badge">⚡ Stage 03 • BUILD</div>
        <h2 className="step-heading">Your Vibe & Builder Class</h2>
        <p className="step-subheading">
          Select your Goa energy vibe to generate your official HH Goa Builder Class.
        </p>
      </div>

      {/* Vibe Grid */}
      <div className="input-group">
        <label className="input-label">Select Your Goa Vibe:</label>
        <div className="vibe-grid">
          {PRESET_VIBES.map((v) => {
            const isSelected = data.vibe === v.id;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => handleSelectVibe(v.id)}
                className={`vibe-card ${isSelected ? 'selected' : ''}`}
              >
                <span className="vibe-emoji">{v.emoji}</span>
                <span className="vibe-label">{v.label}</span>
                <span className="vibe-tagline">{v.tagline}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Generated Builder Class Box */}
      <div className="input-group mt-6">
        <div className="flex justify-between items-center mb-2">
          <label className="input-label mb-0 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span>Generated Builder Class:</span>
          </label>
          <button
            type="button"
            onClick={handleShuffleTitle}
            className="btn-secondary text-xs py-1.5 px-3"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Shuffle Class
          </button>
        </div>

        <div className="generated-title-box">
          <div className="title-glow-ring" />
          <span className="title-text">⚡ BUILDER CLASS: {data.generatedTitle || 'Goa Code Alchemist'} ⚡</span>
        </div>

        {/* Suggested Title Chips */}
        <div className="suggested-titles-container mt-3">
          <span className="text-xs text-emerald-200 font-medium">Or pick a variation:</span>
          <div className="flex flex-wrap gap-2 mt-1.5">
            {suggestedTitles.slice(0, 4).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => onChange({ generatedTitle: t })}
                className={`title-chip ${data.generatedTitle === t ? 'active' : ''}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Edit Option */}
        <div className="mt-4">
          <label className="input-label text-xs">Or write a custom Builder Class:</label>
          <input
            type="text"
            value={data.generatedTitle}
            onChange={(e) => onChange({ generatedTitle: e.target.value })}
            placeholder="Type your own Builder Class..."
            className="text-input text-xs"
          />
        </div>
      </div>

      <div className="step-actions mt-8">
        <button onClick={onPrev} className="btn-secondary">
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
        <button
          onClick={onNext}
          disabled={!data.generatedTitle.trim()}
          className="btn-primary-gradient pulse-glow"
        >
          <Lock className="w-4 h-4" />
          <span>Unlock Builder ID 🌴</span>
        </button>
      </div>
    </div>
  );
};
