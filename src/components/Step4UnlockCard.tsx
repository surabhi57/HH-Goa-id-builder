import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Download, MessageCircle, Copy, Check, Edit3, Sparkles } from 'lucide-react';
import type { BuilderData, CardThemeId } from '../types';
import { CARD_THEMES } from '../types';
import { BuilderCardPreview } from './BuilderCardPreview';
import { renderCardToCanvas } from '../utils/cardCanvas';

interface Step4UnlockCardProps {
  data: BuilderData;
  onChange: (updates: Partial<BuilderData>) => void;
  onEdit: () => void;
}

export const Step4UnlockCard: React.FC<Step4UnlockCardProps> = ({ data, onChange, onEdit }) => {
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Trigger celebration confetti on unlock
  useEffect(() => {
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#FFE600', '#FF006E', '#34D399', '#0B3C2D', '#FFFFFF'],
      });
    } catch {
      // safe fallback
    }
  }, []);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const canvas = document.createElement('canvas');
      await renderCardToCanvas(data, canvas, data.theme);
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      const filename = `HH_Goa_2026_Pass_${(data.name || 'Builder').replace(/\s+/g, '_')}.png`;
      link.download = filename;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Download error:', err);
    } finally {
      setDownloading(false);
    }
  };

  const shareText = `Check out my official HH Goa 2026 Builder Pass! 🌴⚡\nClass: ${data.generatedTitle}\n\nJoin the vibe: #FrameInGoa`;
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
      <div className="step-header text-center">
        <div className="step-badge inline-flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>BUILDER UNLOCKED! 🌴</span>
        </div>
        <h2 className="step-heading text-2xl md:text-3xl text-yellow-400">Your HH Goa 2026 Builder Pass</h2>
        <p className="step-subheading max-w-md mx-auto">
          Your custom collectible Builder Pass is unlocked! Choose your favorite brand palette and share with the community.
        </p>
      </div>

      {/* Theme Switcher */}
      <div className="theme-switcher-box mt-4">
        <span className="text-xs font-semibold text-emerald-200 block mb-2 text-center">
          CARD PALETTE THEMES:
        </span>
        <div className="theme-options-grid">
          {CARD_THEMES.map((theme) => {
            const isSelected = data.theme === theme.id;
            return (
              <button
                key={theme.id}
                type="button"
                onClick={() => onChange({ theme: theme.id as CardThemeId })}
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

      {/* Live Collectible Card Display */}
      <div className="unlocked-card-wrapper my-6">
        <BuilderCardPreview data={data} isUnlocked={true} className="mx-auto shadow-2xl" />
      </div>

      {/* Primary Actions (Download & Share) */}
      <div className="action-buttons-grid max-w-md mx-auto">
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="btn-primary-gradient py-3.5 text-base shadow-lg hover:shadow-xl w-full"
        >
          <Download className="w-5 h-5" />
          <span>{downloading ? 'Rendering HD Pass...' : 'Download Pass (PNG)'}</span>
        </button>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-3">
          <button onClick={handleShareTwitter} className="social-btn twitter">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            <span>X / Twitter</span>
          </button>
          <button onClick={handleShareLinkedIn} className="social-btn linkedin">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 0 0-1.6 1.6c0 .88.71 1.6 1.6 1.6s1.6-.72 1.6-1.6a1.6 1.6 0 0 0-1.6-1.6z"/></svg>
            <span>LinkedIn</span>
          </button>
          <button onClick={handleShareWhatsApp} className="social-btn whatsapp">
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </button>
          <button onClick={handleCopyLink} className="social-btn copy">
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>
        </div>
      </div>

      <div className="text-center mt-6">
        <button onClick={onEdit} className="btn-secondary text-xs py-2 px-4 inline-flex items-center gap-1.5">
          <Edit3 className="w-3.5 h-3.5" />
          <span>Edit Pass Details</span>
        </button>
      </div>
    </div>
  );
};
