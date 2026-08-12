import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  onSelectStep: (step: number) => void;
  unlocked: boolean;
}

export const STEPS = [
  { id: 1, label: '01 DISCOVER', emoji: '🌊', description: 'Photo & Fit' },
  { id: 2, label: '02 DEFINE', emoji: '🐚', description: 'Role & Stack' },
  { id: 3, label: '03 BUILD', emoji: '⚡', description: 'Vibe & Class' },
  { id: 4, label: '04 UNLOCK', emoji: '🌴', description: 'Pass & Share' },
];

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  onSelectStep,
}) => {
  return (
    <div className="step-indicator-container">
      <div className="step-track">
        {STEPS.map((step) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;

          return (
            <button
              key={step.id}
              onClick={() => onSelectStep(step.id)}
              className={`step-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
            >
              <div className="step-bubble">
                <span className="step-emoji">{step.emoji}</span>
              </div>
              <div className="step-text">
                <span className="step-title">{step.label}</span>
                <span className="step-desc">{step.description}</span>
              </div>
            </button>
          );
        })}
      </div>
      <div
        className="step-progress-bar"
        style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
      />
    </div>
  );
};
