import React from 'react';
import type { BuildMode } from '../types';
import { User, Users, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface Page2ChooseModeProps {
  selectedMode: BuildMode;
  onSelectMode: (mode: BuildMode) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Page2ChooseMode: React.FC<Page2ChooseModeProps> = ({
  selectedMode,
  onSelectMode,
  onNext,
  onPrev,
}) => {
  const handleModeCardClick = (mode: BuildMode) => {
    onSelectMode(mode);
    setTimeout(() => {
      onNext();
    }, 250);
  };

  return (
    <div className="fade-in max-w-xl mx-auto">
      <div className="step-card relative overflow-hidden">
        {/* Glow ambient background element */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-yellow-400/10 rounded-full blur-2xl pointer-events-none" />

        <div className="step-header text-center">
          <span className="step-badge">STEP 2 OF 4</span>
          <h2 className="step-heading">Choose Your Builder Mode</h2>
          <p className="step-subheading">
            Select your hacker path to generate your official HH Goa Builder ID Pass.
          </p>
        </div>

        {/* Mode Selector Cards */}
        <div className="mode-selection-grid my-6">
          {/* SOLO BUILDER CARD */}
          <div
            onClick={() => handleModeCardClick('solo')}
            className={`mode-card clickable-mode-btn ${
              selectedMode === 'solo' ? 'selected' : ''
            }`}
          >
            <span className="mode-pill-tag">SOLO</span>
            {selectedMode === 'solo' && (
              <CheckCircle2 className="w-5 h-5 text-yellow-400 absolute top-3 left-3" />
            )}
            <div className="mode-icon-box">
              <User className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="mode-card-title">[ SOLO BUILDER ]</h3>
            <p className="mode-card-desc">
              Hacking solo in Goa. Showcase your personal profile, stack & builder title.
            </p>
            <div className="mt-4 inline-flex items-center gap-1 text-xs font-extrabold text-yellow-400 click-action-hint">
              <span>SELECT & CONTINUE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* WITH A TEAM CARD */}
          <div
            onClick={() => handleModeCardClick('team')}
            className={`mode-card clickable-mode-btn ${
              selectedMode === 'team' ? 'selected' : ''
            }`}
          >
            <span className="mode-pill-tag hot-pink">TEAM</span>
            {selectedMode === 'team' && (
              <CheckCircle2 className="w-5 h-5 text-rose-400 absolute top-3 left-3" />
            )}
            <div className="mode-icon-box">
              <Users className="w-8 h-8 text-rose-400" />
            </div>
            <h3 className="mode-card-title text-rose-400">[ WITH A TEAM ]</h3>
            <p className="mode-card-desc">
              Building with a squad. Generate passes for team members & customize squad name.
            </p>
            <div className="mt-4 inline-flex items-center gap-1 text-xs font-extrabold text-rose-400 click-action-hint">
              <span>SELECT & CONTINUE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Step Actions */}
        <div className="step-actions">
          <button onClick={onPrev} className="btn-secondary">
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          <button onClick={onNext} className="btn-primary-gradient">
            <span>Continue to Details</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
