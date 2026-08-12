import React from 'react';
import { Palmtree, RefreshCw, Sparkles, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  currentStep?: number;
  onNavigateStep?: (step: number) => void;
  onLoadSample: () => void;
  onReset: () => void;
  hasData: boolean;
}

const STEPS = [
  { id: 1, label: 'Welcome' },
  { id: 2, label: 'Mode' },
  { id: 3, label: 'Details' },
  { id: 4, label: 'Pass ID' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentStep = 1,
  onNavigateStep,
  onLoadSample,
  onReset,
  hasData,
}) => {
  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        {/* Brand Header */}
        <div className="navbar-brand">
          <div className="brand-icon">
            <Palmtree className="w-5 h-5 text-emerald-950" />
          </div>
          <div>
            <div className="brand-title">
              HACKER HOUSE <span className="brand-year">GOA 2026</span>
            </div>
            <div className="brand-subtitle">BUILDER ID GENERATOR</div>
          </div>
        </div>

        {/* Gamified Step Journey Tracker (Center Header) */}
        <div className="hidden md:flex items-center gap-2 bg-emerald-950/70 border border-yellow-400/30 px-4 py-1.5 rounded-full shadow-inner">
          {STEPS.map((step, idx) => {
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;
            return (
              <React.Fragment key={step.id}>
                {idx > 0 && (
                  <div
                    className={`h-0.5 w-6 transition-all duration-300 ${
                      isCompleted ? 'bg-yellow-400' : 'bg-emerald-800'
                    }`}
                  />
                )}
                <button
                  onClick={() => onNavigateStep && isCompleted && onNavigateStep(step.id)}
                  disabled={!isCompleted && !isActive}
                  className={`flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-yellow-400 text-emerald-950 shadow-md scale-105'
                      : isCompleted
                      ? 'bg-emerald-900 text-yellow-300 hover:bg-emerald-800 cursor-pointer'
                      : 'text-emerald-500 cursor-not-allowed opacity-60'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-yellow-300" />
                  ) : (
                    <span className="w-4 h-4 rounded-full bg-emerald-950 border border-current flex items-center justify-center text-[10px]">
                      {step.id}
                    </span>
                  )}
                  <span>{step.label}</span>
                </button>
              </React.Fragment>
            );
          })}
        </div>

        {/* Action Header Buttons */}
        <div className="navbar-actions">
          <button onClick={onLoadSample} className="nav-btn sample-btn">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Demo Pass</span>
          </button>
          {hasData && (
            <button onClick={onReset} className="nav-btn reset-btn">
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
