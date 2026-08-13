import React, { useState, useEffect } from 'react';
import type { CardThemeId, TeamData } from '../types';
import { CARD_THEMES } from '../types';
import { BuilderCardPreview } from './BuilderCardPreview';
import { renderCardToCanvas } from '../utils/cardCanvas';
import {
  Download,
  Sparkles,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  Edit3,
  MessageCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Page4UnlockIDProps {
  teamData: TeamData;
  onChangeTeam: (updates: Partial<TeamData>) => void;
  onEdit: () => void;
  onRestart: () => void;
}

export const Page4UnlockID: React.FC<Page4UnlockIDProps> = ({
  teamData,
  onChangeTeam,
  onEdit,
  onRestart,
}) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [downloading, setDownloading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const activeMember = teamData.members[activeCardIndex] || teamData.members[0];

  const activeBuilderData = {
    builderId: activeMember.builderId,
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
    unlocked: true,
  };

  useEffect(() => {
    // Trigger confetti burst on unlock reveal
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FACC15', '#F43F5E', '#34D399', '#FDE047'],
    });

    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  const handleDownloadActiveCard = async () => {
    setDownloading(true);
    try {
      const canvas = document.createElement('canvas');
      await renderCardToCanvas(activeBuilderData, canvas, teamData.theme);
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      const filename = `HH_Goa_2026_Pass_${(activeMember.name || 'Builder').replace(/\s+/g, '_')}.png`;
      link.download = filename;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Download error:', err);
    } finally {
      setDownloading(false);
    }
  };

  const shareText = `Check out my official HH Goa 2026 Builder Pass! 🌴⚡\nClass: ${activeMember.generatedTitle}\n${
    teamData.mode === 'team' ? `Team: ${teamData.teamName || 'Squad'}\n` : ''
  }#FrameInGoa`;
  const currentUrl = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${shareText}\n${currentUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`;
    window.open(twitterUrl, '_blank');
  };

  const handleShareLinkedIn = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    window.open(linkedinUrl, '_blank');
  };

  const handleShareWhatsApp = () => {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} ${currentUrl}`)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="step-card unlock-container fade-in">
      {/* Dramatic Header Banner */}
      <div className="step-header text-center">
        <div className="step-badge inline-flex items-center gap-1 bg-yellow-400 text-green-950 font-black animate-bounce">
          <Sparkles className="w-4 h-4 text-rose-500" />
          <span>BUILDER UNLOCKED ⚡</span>
        </div>
        <h2 className="step-heading text-3xl sm:text-4xl text-yellow-400 font-serif italic mt-2">
          HH Goa 2026 Builder ID Pass
        </h2>
        {teamData.mode === 'team' && teamData.teamName && (
          <p className="team-reveal-tag mt-1 text-pink-400 font-syne font-bold text-lg">
            👥 SQUAD: {teamData.teamName.toUpperCase()}
          </p>
        )}
        <p className="step-subheading max-w-md mx-auto mt-2">
          Your official HH Goa Builder ID Pass is generated and ready to frame!
        </p>
      </div>

      {/* Theme Switcher */}
      <div className="theme-switcher-box mt-4">
        <span className="text-xs font-bold text-emerald-200 block mb-2 text-center uppercase tracking-wider">
          PALETTE THEME:
        </span>
        <div className="theme-options-grid">
          {CARD_THEMES.map((theme) => {
            const isSelected = teamData.theme === theme.id;
            return (
              <button
                key={theme.id}
                type="button"
                onClick={() => onChangeTeam({ theme: theme.id as CardThemeId })}
                className={`theme-chip-btn ${isSelected ? 'selected' : ''}`}
                style={{
                  borderColor: isSelected ? theme.accentColor : 'transparent',
                }}
              >
                <span className="text-base">{theme.emoji}</span>
                <div className="text-left">
                  <span className="theme-chip-title" style={{ color: isSelected ? theme.accentColor : undefined }}>
                    {theme.name}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Multi-Member Carousel Controls (If Team Mode) */}
      {teamData.mode === 'team' && teamData.members.length > 1 && (
        <div className="team-carousel-controls my-4 flex justify-between items-center bg-emerald-950/80 p-3 rounded-2xl border border-yellow-400/30">
          <button
            onClick={() => setActiveCardIndex((prev) => (prev > 0 ? prev - 1 : teamData.members.length - 1))}
            className="btn-secondary py-1.5 px-3 text-xs flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4 text-yellow-400" />
            <span>Prev Member</span>
          </button>

          <div className="flex gap-2">
            {teamData.members.map((m, idx) => (
              <button
                key={m.id}
                onClick={() => setActiveCardIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeCardIndex === idx ? 'bg-yellow-400 scale-125' : 'bg-emerald-800'
                }`}
                title={m.name || m.memberName}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveCardIndex((prev) => (prev < teamData.members.length - 1 ? prev + 1 : 0))}
            className="btn-secondary py-1.5 px-3 text-xs flex items-center gap-1"
          >
            <span>Next Member</span>
            <ChevronRight className="w-4 h-4 text-yellow-400" />
          </button>
        </div>
      )}

      {/* Dramatic Card Pass Reveal Display */}
      <div className={`unlocked-card-wrapper my-6 ${isRevealed ? 'card-unlocked-reveal' : 'opacity-0 scale-95'}`}>
        <BuilderCardPreview data={activeBuilderData} isUnlocked={true} className="mx-auto shadow-2xl" />
      </div>

      {/* Action Buttons: Download PNG & Share to X */}
      <div className="action-buttons-grid max-w-md mx-auto">
        <button
          onClick={handleDownloadActiveCard}
          disabled={downloading}
          className="btn-primary-gradient py-3.5 text-base shadow-lg hover:shadow-xl w-full"
        >
          <Download className="w-5 h-5" />
          <span>{downloading ? 'Rendering HD Pass...' : `Download Pass PNG (${activeMember.name || 'Member'})`}</span>
        </button>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-3">
          <button onClick={handleShareTwitter} className="social-btn twitter" title="Share to X / Twitter">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            <span>Share to X</span>
          </button>
          <button onClick={handleShareLinkedIn} className="social-btn linkedin" title="Share to LinkedIn">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 0 0-1.6 1.6c0 .88.71 1.6 1.6 1.6s1.6-.72 1.6-1.6a1.6 1.6 0 0 0-1.6-1.6z"/></svg>
            <span>LinkedIn</span>
          </button>
          <button onClick={handleShareWhatsApp} className="social-btn whatsapp" title="Share to WhatsApp">
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>
          <button onClick={handleCopyLink} className="social-btn copy" title="Copy Share Link">
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-6">
        <button onClick={onEdit} className="btn-secondary text-xs py-2 px-4 inline-flex items-center gap-1.5">
          <Edit3 className="w-3.5 h-3.5" />
          <span>Edit Pass Details</span>
        </button>
        <button onClick={onRestart} className="btn-secondary text-xs py-2 px-4 inline-flex items-center gap-1.5 text-yellow-400">
          <span>Restart Journey 🌴</span>
        </button>
      </div>
    </div>
  );
};
