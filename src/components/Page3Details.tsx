import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  User,
  AtSign,
  Camera,
  ZoomIn,
  Move,
  Trash2,
  Sparkles,
  RefreshCw,
  Users,
  UserPlus,
  CheckCircle2,
  Upload,
} from 'lucide-react';
import type { BuilderMember, TeamData } from '../types';
import { PRESET_ROLES, PRESET_VIBES } from '../types';
import { generateBuilderTitles, getRandomTitle } from '../utils/titleGenerator';
import { BuilderCardPreview } from './BuilderCardPreview';

interface Page3DetailsProps {
  teamData: TeamData;
  onChangeTeam: (updates: Partial<TeamData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Page3Details: React.FC<Page3DetailsProps> = ({
  teamData,
  onChangeTeam,
  onNext,
  onPrev,
}) => {
  const [activeMemberIndex, setActiveMemberIndex] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const activeMember = teamData.members[activeMemberIndex] || teamData.members[0];

  const updateActiveMember = (updates: Partial<BuilderMember>) => {
    const updatedMembers = teamData.members.map((m, idx) => {
      if (idx === activeMemberIndex) {
        return { ...m, ...updates };
      }
      return m;
    });
    onChangeTeam({ members: updatedMembers });
  };

  // Auto-generate title if empty
  useEffect(() => {
    if (activeMember && !activeMember.generatedTitle) {
      const newTitle = getRandomTitle(
        activeMember.role,
        activeMember.customRole,
        activeMember.techStack || [],
        activeMember.vibe
      );
      updateActiveMember({ generatedTitle: newTitle });
    }
  }, [activeMemberIndex, activeMember?.role, activeMember?.customRole, activeMember?.vibe]);

  const handleAddTeammate = () => {
    if (teamData.members.length >= 3) return;
    const nextNum = teamData.members.length + 1;
    const newMember: BuilderMember = {
      id: `member-${nextNum}`,
      memberName: `Teammate ${nextNum}`,
      name: '',
      handle: '',
      photoUrl: null,
      photoZoom: 1,
      photoOffsetX: 0,
      photoOffsetY: 0,
      role: 'frontend',
      customRole: '',
      techStack: [],
      vibe: 'Goa Vibes',
      generatedTitle: 'Goa Code Alchemist',
    };
    onChangeTeam({ members: [...teamData.members, newMember] });
    setActiveMemberIndex(teamData.members.length);
  };

  const handleRemoveTeammate = (indexToRemove: number) => {
    if (teamData.members.length <= 1) return;
    const filtered = teamData.members.filter((_, idx) => idx !== indexToRemove);
    onChangeTeam({ members: filtered });
    if (activeMemberIndex >= filtered.length) {
      setActiveMemberIndex(filtered.length - 1);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateActiveMember({ photoUrl: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateActiveMember({ photoUrl: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleShuffleTitle = () => {
    const options = generateBuilderTitles(
      activeMember.role,
      activeMember.customRole,
      activeMember.techStack || [],
      activeMember.vibe
    );
    const filtered = options.filter((t) => t !== activeMember.generatedTitle);
    const nextTitle = filtered.length > 0
      ? filtered[Math.floor(Math.random() * filtered.length)]
      : options[0];
    updateActiveMember({ generatedTitle: nextTitle });
  };

  const isFormValid = teamData.members.every((m) => m.name.trim().length > 0 && m.photoUrl);

  const activeBuilderData = {
    teamName: teamData.teamName,
    name: activeMember.name,
    handle: activeMember.handle,
    photoUrl: activeMember.photoUrl,
    photoZoom: activeMember.photoZoom,
    photoOffsetX: activeMember.photoOffsetX,
    photoOffsetY: activeMember.photoOffsetY,
    role: activeMember.role,
    customRole: activeMember.customRole,
    techStack: activeMember.techStack || [],
    vibe: activeMember.vibe,
    generatedTitle: activeMember.generatedTitle,
    theme: teamData.theme,
    unlocked: teamData.unlocked,
  };

  return (
    <div className="page3-details fade-in container-custom max-w-6xl mx-auto py-2">
      {/* Header */}
      <div className="text-center mb-3">
        <span className="step-badge text-[11px] py-1 px-3">STEP 03 OF 4</span>
        <h2 className="font-crimson text-3xl sm:text-4xl font-bold text-yellow-400 tracking-tight leading-tight mt-0.5">
          {teamData.mode === 'team' ? 'Team Builder Identity' : 'Build Your Builder Pass'}
        </h2>
      </div>

      {/* Two Compact Side-by-Side Panels Grid */}
      <div className="page3-panels">
        {/* LEFT CARD: "Build Your Pass" */}
        <div className="details-panel">
          <div className="step-card details-form-card p-4 sm:p-5 rounded-3xl border-2 border-yellow-400/35 bg-emerald-950/90 shadow-2xl backdrop-blur-xl flex-1 flex flex-col justify-between">
            {/* Squad Header Tabs (Team Mode) */}
            {teamData.mode === 'team' && <div className="team-header-box mb-3 p-2.5 bg-emerald-900/60 rounded-xl border border-yellow-400/30">
                <div className="input-group mb-2">
                  <label className="input-label text-yellow-400 text-xs">
                    <Users className="w-3.5 h-3.5 text-pink-500" />
                    <span className="font-crimson text-sm font-bold">Squad / Team Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. WaveHackers Goa"
                    value={teamData.teamName}
                    onChange={(e) => onChangeTeam({ teamName: e.target.value })}
                    className="text-input py-1.5 text-xs"
                  />
                </div>

                <div className="member-tabs-row flex flex-wrap gap-1.5 items-center">
                  {teamData.members.map((m, idx) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setActiveMemberIndex(idx)}
                      className={`member-tab-btn text-xs py-1 px-2.5 ${activeMemberIndex === idx ? 'active' : ''}`}
                    >
                      <span>{m.name || m.memberName}</span>
                      {teamData.members.length > 1 && (
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveTeammate(idx);
                          }}
                          className="remove-tab-icon text-rose-400 hover:text-rose-200 ml-1"
                          title="Remove member"
                        >
                          ×
                        </span>
                      )}
                    </button>
                  ))}

                  {teamData.members.length < 3 && (
                    <button
                      type="button"
                      onClick={handleAddTeammate}
                      className="btn-secondary text-[11px] py-1 px-2 flex items-center gap-1 text-yellow-400 border-yellow-400/40"
                    >
                      <UserPlus className="w-3 h-3" />
                      <span>+ Add Member</span>
                    </button>
                  )}
                </div>
              </div>}

            {/* Form Inputs Container */}
            <div className="form-sections space-y-3">
              {/* Photo Upload Row */}
              <div className="input-group">
                <div className="flex justify-between items-center mb-1">
                  <label className="input-label text-xs">
                    <Camera className="w-3.5 h-3.5 text-yellow-400" />
                    <span className="font-crimson text-sm font-bold">
                      {activeMember.memberName} Photo *
                    </span>
                  </label>
                  {activeMember.photoUrl && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-yellow-400 bg-yellow-400/15 px-2 py-0.5 rounded-full border border-yellow-400/30">
                      <CheckCircle2 className="w-3 h-3 text-yellow-400" />
                      <span>Ready</span>
                    </span>
                  )}
                </div>

                {activeMember.photoUrl ? (
                  <div className="flex flex-col sm:flex-row items-center gap-3 bg-emerald-900/40 p-2.5 rounded-xl border border-yellow-400/20">
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 rounded-full border-2 border-yellow-400 overflow-hidden bg-emerald-950 flex items-center justify-center">
                        <img
                          src={activeMember.photoUrl}
                          alt="Preview"
                          style={{
                            transform: `scale(${activeMember.photoZoom}) translate(${activeMember.photoOffsetX}px, ${activeMember.photoOffsetY}px)`,
                          }}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-[10px]">⚡</div>
                    </div>

                    <div className="flex-1 w-full space-y-1.5">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-[10px] text-emerald-200 flex items-center gap-1">
                            <ZoomIn className="w-2.5 h-2.5 text-yellow-400" />
                            <span>Zoom ({Math.round(activeMember.photoZoom * 100)}%)</span>
                          </label>
                          <input
                            type="range"
                            min="0.8"
                            max="2.5"
                            step="0.05"
                            value={activeMember.photoZoom}
                            onChange={(e) => updateActiveMember({ photoZoom: parseFloat(e.target.value) })}
                            className="range-slider h-1"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-emerald-200 flex items-center gap-1">
                            <Move className="w-2.5 h-2.5 text-yellow-400" />
                            <span>Shift Position</span>
                          </label>
                          <div className="grid grid-cols-2 gap-1">
                            <input
                              type="range"
                              min="-40"
                              max="40"
                              value={activeMember.photoOffsetX}
                              onChange={(e) => updateActiveMember({ photoOffsetX: parseInt(e.target.value) })}
                              className="range-slider h-1"
                            />
                            <input
                              type="range"
                              min="-40"
                              max="40"
                              value={activeMember.photoOffsetY}
                              onChange={(e) => updateActiveMember({ photoOffsetY: parseInt(e.target.value) })}
                              className="range-slider h-1"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 justify-end">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="btn-secondary text-[11px] py-1 px-2.5"
                        >
                          Change Photo
                        </button>
                        <button
                          type="button"
                          onClick={() => updateActiveMember({ photoUrl: null })}
                          className="btn-danger-light text-[11px] py-1 px-2.5"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="dropzone py-3 max-w-full border-dashed"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Upload className="w-5 h-5 text-yellow-400" />
                      <span className="font-crimson text-base font-bold text-yellow-400">
                        Upload Profile Photo
                      </span>
                      <span className="text-[11px] text-emerald-200">(JPG, PNG, WEBP)</span>
                    </div>
                  </div>
                )}

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />
              </div>

              {/* Name & Handle Row */}
              <div className="form-grid">
                <div className="input-group">
                  <label className="input-label text-xs">
                    <User className="w-3.5 h-3.5 text-yellow-400" />
                    <span className="font-crimson text-sm font-bold">Full Name *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Alex Rivera"
                    value={activeMember.name}
                    onChange={(e) => updateActiveMember({ name: e.target.value })}
                    className="text-input py-1.5 text-xs"
                  />
                </div>

                <div className="input-group">
                  <label className="input-label text-xs">
                    <AtSign className="w-3.5 h-3.5 text-yellow-400" />
                    <span className="font-crimson text-sm font-bold">X / GitHub Handle</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. @alexrivera"
                    value={activeMember.handle}
                    onChange={(e) => updateActiveMember({ handle: e.target.value })}
                    className="text-input py-1.5 text-xs"
                  />
                </div>
              </div>

              {/* Compact Role Selection */}
              <div className="input-group">
                <label className="input-label text-xs">
                  <span className="font-crimson text-sm font-bold">Select Role *</span>
                </label>
                <div className="compact-role-grid">
                  {PRESET_ROLES.map((r) => {
                    const isSelected = activeMember.role === r.id;
                    return (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => updateActiveMember({ role: r.id })}
                        className={`compact-role-chip py-1 px-2 ${isSelected ? 'selected' : ''}`}
                      >
                        <span className="text-sm">{r.icon}</span>
                        <span className="font-semibold text-[11px]">{r.label}</span>
                      </button>
                    );
                  })}
                </div>

                {activeMember.role === 'other' && (
                  <div className="custom-role-container fade-in mt-1.5">
                    <input
                      type="text"
                      placeholder="Specify Custom Role (e.g. Quantum AI Researcher)..."
                      value={activeMember.customRole}
                      onChange={(e) => updateActiveMember({ customRole: e.target.value })}
                      className="text-input py-1 text-xs"
                    />
                  </div>
                )}
              </div>

              {/* Compact Goa Vibe Selection */}
              <div className="input-group">
                <label className="input-label text-xs">
                  <span className="font-crimson text-sm font-bold">Select Goa Vibe</span>
                </label>
                <div className="page3-vibe-grid flex flex-wrap gap-1.5 mt-0.5">
                  {PRESET_VIBES.map((v) => {
                    const isSelected = activeMember.vibe === v.id;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => updateActiveMember({ vibe: v.id })}
                        className={`compact-vibe-pill py-1 px-2 text-[11px] ${isSelected ? 'selected' : ''}`}
                      >
                        <span>{v.emoji}</span>
                        <span>{v.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Builder Class Title */}
              <div className="input-group pt-0.5">
                <div className="flex justify-between items-center mb-1">
                  <label className="input-label mb-0 text-xs flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                    <span className="font-crimson text-sm font-bold">Builder Class Title</span>
                  </label>
                  <button
                    type="button"
                    onClick={handleShuffleTitle}
                    className="btn-secondary text-[11px] py-0.5 px-2"
                  >
                    <RefreshCw className="w-3 h-3" />
                    Shuffle
                  </button>
                </div>

                <div className="generated-title-box editable-title-box py-1.5 px-2.5"><input type="text" aria-label="Builder Class Title" placeholder="e.g. Pixel & Protocol Alchemist" value={activeMember.generatedTitle} onChange={(e) => updateActiveMember({ generatedTitle: e.target.value })} className="builder-title-input" />
                  <span className="title-text text-xs">
                    ⚡ {activeMember.generatedTitle || 'Goa Code Alchemist'} ⚡
                  </span>
                </div>
              </div>
            </div>

            {/* Step Actions Footer */}
            <div className="step-actions mt-3 pt-2.5 border-t border-yellow-400/20">
              <button onClick={onPrev} className="btn-secondary text-xs py-1.5 px-3">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
              <button
                onClick={onNext}
                disabled={!isFormValid}
                className="btn-primary-gradient text-xs py-1.5 px-4"
              >
                <span>Generate Pass 🌴</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT CARD: "Live Pass Preview" inside Realistic Laptop Mockup Screen */}
        <div className="camera-preview-panel flex flex-col justify-center">
          <div className="p-4 rounded-3xl border-2 border-yellow-400/40 bg-emerald-950/95 shadow-2xl backdrop-blur-xl flex flex-col items-center justify-between h-full">
            <div className="flex items-center gap-1.5 mb-2">
              <Camera className="w-4 h-4 text-yellow-400 animate-pulse" />
              <h3 className="font-crimson text-lg font-bold text-yellow-400 tracking-wide">
                LIVE PASS PREVIEW
              </h3>
            </div>

            <div className="camera-preview-stage">
            <div className="retro-camera" aria-label="Live Builder ID preview camera">
              <div className="camera-top"><span className="camera-mark">HH GOA</span><span className="camera-shutter" /><span className="camera-flash" /></div>
              <span className="camera-star star-one">✦</span><span className="camera-star star-two">✦</span>
              <div className="camera-screen-frame"><div className="camera-screen">
                <span className="screen-live"><i /> LIVE PREVIEW</span>
                <div className="camera-pass-preview"><div className="camera-pass-content">
                  <p className="camera-pass-kicker">{teamData.teamName || 'HH GOA 2026'} · OFFICIAL BUILDER PASS</p>
                  <p className="camera-pass-event">HACKER HOUSE GOA · MARCH 2026</p>
                  <div className="camera-pass-avatar">
                    {activeMember.photoUrl ? <img src={activeMember.photoUrl} alt="Builder" style={{ transform: `scale(${activeMember.photoZoom}) translate(${activeMember.photoOffsetX}px, ${activeMember.photoOffsetY}px)` }} /> : <span>{(activeMember.name || 'Y').charAt(0).toUpperCase()}</span>}
                  </div>
                  <h4>{activeMember.name || 'YOUR BUILDER NAME'}</h4>
                  <p className="camera-pass-handle">{activeMember.handle || '@builder_handle'}</p>
                  <p className="camera-pass-title">{activeMember.generatedTitle || 'Goa Code Alchemist'}</p>
                  <div className="camera-pass-badges"><span>{PRESET_ROLES.find((role) => role.id === activeMember.role)?.icon} {PRESET_ROLES.find((role) => role.id === activeMember.role)?.label || 'Builder'}</span><span>{PRESET_VIBES.find((vibe) => vibe.id === activeMember.vibe)?.emoji} {PRESET_VIBES.find((vibe) => vibe.id === activeMember.vibe)?.label || 'Goa Vibes'}</span></div>
                  <div className="camera-pass-footer"><span>#FrameInGoa</span><span>GOA, INDIA</span></div></div>
                </div>
                <span className="screen-id">BUILDER ID · {activeMember.id.replace('member-', 'HHG-')}</span>
              </div></div>
              <div className="camera-controls"><span className="camera-mini-button" /><span className="camera-mini-button" /><span className="camera-dial"><span>●</span></span><span className="camera-slider" /></div>
              <span className="camera-brand">FRAME IN GOA</span>
            </div>
            </div>

            {/* 💻 Realistic Laptop Hardware Device Frame */}
            <div className="laptop-device-frame w-full max-w-[340px] my-auto">
              {/* Laptop Screen Window Bezel */}
              <div className="laptop-screen-bezel">
                {/* IDE Header Bar */}
                <div className="laptop-screen-header">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="laptop-header-title">hh_goa_2026.ts</span>
                </div>

                {/* Inner Laptop Screen Viewport */}
                <div className="laptop-screen-viewport p-2 bg-emerald-950 flex items-center justify-center">
                  <BuilderCardPreview data={activeBuilderData} className="w-full max-w-[280px] scale-95 shadow-xl" />
                </div>
              </div>

              {/* Metallic Laptop Keyboard Base */}
              <div className="laptop-keyboard-base">
                <div className="laptop-trackpad" />
              </div>
            </div>

            <p className="preview-hint mt-2 text-center text-[11px] text-emerald-200">
              ✨ Updates live in real-time inside your Goan developer laptop
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
