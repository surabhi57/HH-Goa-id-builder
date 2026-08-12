import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, User, AtSign, Plus, Check } from 'lucide-react';
import type { BuilderData } from '../types';
import { PRESET_ROLES, PRESET_TECH_STACK } from '../types';

interface Step2RoleStackProps {
  data: BuilderData;
  onChange: (updates: Partial<BuilderData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Step2RoleStack: React.FC<Step2RoleStackProps> = ({
  data,
  onChange,
  onNext,
  onPrev,
}) => {
  const [customStackInput, setCustomStackInput] = useState('');

  const toggleStack = (tech: string) => {
    if (data.techStack.includes(tech)) {
      onChange({ techStack: data.techStack.filter((t) => t !== tech) });
    } else {
      if (data.techStack.length >= 6) return;
      onChange({ techStack: [...data.techStack, tech] });
    }
  };

  const handleAddCustomStack = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = customStackInput.trim();
    if (trimmed && !data.techStack.includes(trimmed)) {
      onChange({ techStack: [...data.techStack, trimmed] });
      setCustomStackInput('');
    }
  };

  const isFormValid = data.name.trim().length > 0 && data.role.length > 0;

  return (
    <div className="step-card fade-in">
      <div className="step-header">
        <div className="step-badge">🐚 Stage 02 • DEFINE</div>
        <h2 className="step-heading">Your Identity & Tech Stack</h2>
        <p className="step-subheading">
          Tell us your name, role, and favorite technologies to define your pass.
        </p>
      </div>

      <div className="form-sections">
        {/* Name & Handle */}
        <div className="form-grid">
          <div className="input-group">
            <label className="input-label">
              <User className="w-4 h-4 text-yellow-400" />
              <span>Full Name <span className="text-pink-500">*</span></span>
            </label>
            <input
              type="text"
              placeholder="e.g. Alex Rivera"
              value={data.name}
              onChange={(e) => onChange({ name: e.target.value })}
              className="text-input"
            />
          </div>

          <div className="input-group">
            <label className="input-label">
              <AtSign className="w-4 h-4 text-yellow-400" />
              <span>X / GitHub Handle (Optional)</span>
            </label>
            <input
              type="text"
              placeholder="e.g. @alexrivera"
              value={data.handle}
              onChange={(e) => onChange({ handle: e.target.value })}
              className="text-input"
            />
          </div>
        </div>

        {/* Role Selection */}
        <div className="input-group">
          <label className="input-label">
            <span>Select Your Role <span className="text-pink-500">*</span></span>
          </label>
          <div className="role-grid">
            {PRESET_ROLES.map((r) => {
              const isSelected = data.role === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => onChange({ role: r.id })}
                  className={`role-card ${isSelected ? 'selected' : ''}`}
                >
                  <span className="role-icon">{r.icon}</span>
                  <div className="role-info">
                    <span className="role-label">{r.label}</span>
                    <span className="role-desc">{r.description}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Custom Role Input if 'other' is selected */}
          {data.role === 'other' && (
            <div className="custom-role-container fade-in mt-3">
              <label className="input-label text-xs">Specify Your Custom Role:</label>
              <input
                type="text"
                placeholder="e.g. Quantum AI Researcher, DevOps Ninja..."
                value={data.customRole}
                onChange={(e) => onChange({ customRole: e.target.value })}
                className="text-input"
              />
            </div>
          )}
        </div>

        {/* Optional Tech Stack Selector */}
        <div className="input-group">
          <div className="flex justify-between items-center mb-1">
            <label className="input-label mb-0">
              <span>Tech Stack (Optional, select up to 6)</span>
            </label>
            <span className="text-xs text-yellow-400 font-semibold">
              {data.techStack.length}/6 selected
            </span>
          </div>

          <div className="stack-pills-container">
            {PRESET_TECH_STACK.map((tech) => {
              const isSelected = data.techStack.includes(tech);
              return (
                <button
                  key={tech}
                  type="button"
                  onClick={() => toggleStack(tech)}
                  className={`stack-pill ${isSelected ? 'selected' : ''}`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 mr-1 inline" />}
                  {tech}
                </button>
              );
            })}
          </div>

          {/* Custom Tech Stack Input */}
          <form onSubmit={handleAddCustomStack} className="custom-stack-form">
            <input
              type="text"
              placeholder="Add custom tech tag (e.g. Bun, Elixir)..."
              value={customStackInput}
              onChange={(e) => setCustomStackInput(e.target.value)}
              className="text-input flex-1 py-2 text-xs"
            />
            <button type="submit" className="btn-secondary py-2 px-3 text-xs">
              <Plus className="w-3.5 h-3.5" />
              Add Tag
            </button>
          </form>
        </div>
      </div>

      <div className="step-actions">
        <button onClick={onPrev} className="btn-secondary">
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
        <button
          onClick={onNext}
          disabled={!isFormValid}
          className="btn-primary-gradient"
        >
          <span>Continue to Build</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
