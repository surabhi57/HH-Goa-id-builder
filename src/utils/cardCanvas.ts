import type { BuilderData, CardThemeId } from '../types';
import { PRESET_ROLES, PRESET_VIBES, CARD_THEMES } from '../types';

export const renderCardToCanvas = async (
  data: BuilderData,
  canvas: HTMLCanvasElement,
  theme?: CardThemeId
): Promise<void> => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const width = 800;
  const height = 1200;
  canvas.width = width;
  canvas.height = height;

  const targetThemeId = theme || data.theme || 'classic-green';
  const themeObj = CARD_THEMES.find((t) => t.id === targetThemeId) || CARD_THEMES[0];
  const roleObj = PRESET_ROLES.find((r) => r.id === data.role);
  const roleLabel = data.role === 'other' ? data.customRole || 'Builder' : roleObj?.label || 'Full Stack';
  const vibeObj = PRESET_VIBES.find((v) => v.id === data.vibe) || PRESET_VIBES[0];

  const displayName = (data.name || 'BUILDER NAME').toUpperCase();
  const displayHandle = data.handle || '@builder_handle';
  const displayTitle = (data.generatedTitle || 'Goa Code Alchemist').toUpperCase();

  // Background Fill
  ctx.fillStyle = '#052E22';
  ctx.fillRect(0, 0, width, height);

  // Gradient Backdrop
  const bgGrad = ctx.createRadialGradient(width / 2, height / 3, 50, width / 2, height / 2, width);
  bgGrad.addColorStop(0, '#0F4C3A');
  bgGrad.addColorStop(0.6, '#0B3C2D');
  bgGrad.addColorStop(1, '#052E22');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Outer Border Box
  ctx.lineWidth = 12;
  ctx.strokeStyle = themeObj.accentColor || '#FACC15';
  ctx.strokeRect(20, 20, width - 40, height - 40);

  // Header Badge Box
  ctx.fillStyle = 'rgba(5, 46, 34, 0.9)';
  ctx.beginPath();
  ctx.roundRect(140, 50, width - 280, 60, 30);
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = themeObj.accentColor || '#FACC15';
  ctx.stroke();

  ctx.fillStyle = themeObj.accentColor || '#FACC15';
  ctx.font = 'bold 24px "Syne", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('HH GOA 2026 • OFFICIAL BUILDER PASS', width / 2, 88);

  ctx.fillStyle = '#A7F3D0';
  ctx.font = 'bold 20px "Syne", sans-serif';
  ctx.fillText('HACKER HOUSE GOA • MARCH 2026', width / 2, 140);

  // Draw Avatar Photo / Placeholder
  const avatarSize = 280;
  const avatarX = width / 2;
  const avatarY = 320;

  ctx.save();
  ctx.beginPath();
  ctx.arc(avatarX, avatarY, avatarSize / 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();

  if (data.photoUrl) {
    try {
      const img = await loadImage(data.photoUrl);
      const zoom = data.photoZoom || 1;
      const offX = (data.photoOffsetX || 0) * 2;
      const offY = (data.photoOffsetY || 0) * 2;

      const drawW = avatarSize * zoom;
      const drawH = avatarSize * zoom;
      const drawX = avatarX - drawW / 2 + offX;
      const drawY = avatarY - drawH / 2 + offY;

      ctx.drawImage(img, drawX, drawY, drawW, drawH);
    } catch {
      ctx.fillStyle = '#0B3C2D';
      ctx.fill();
    }
  } else {
    ctx.fillStyle = '#0B3C2D';
    ctx.fill();
    ctx.fillStyle = themeObj.accentColor || '#FACC15';
    ctx.font = 'bold 110px "Syne", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(displayName.charAt(0), avatarX, avatarY);
  }
  ctx.restore();

  // Avatar Border Ring
  ctx.lineWidth = 10;
  ctx.strokeStyle = themeObj.accentColor || '#FACC15';
  ctx.beginPath();
  ctx.arc(avatarX, avatarY, avatarSize / 2, 0, Math.PI * 2);
  ctx.stroke();

  // Flash Lightning Icon Badge
  ctx.fillStyle = '#F43F5E';
  ctx.beginPath();
  ctx.arc(avatarX + 110, avatarY + 110, 36, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 36px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('⚡', avatarX + 110, avatarY + 110);

  // Reset baseline
  ctx.textBaseline = 'alphabetic';

  // Builder Name
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 54px "Crimson Pro", serif';
  ctx.textAlign = 'center';
  ctx.fillText(displayName, width / 2, 530);

  // Handle
  ctx.fillStyle = '#A7F3D0';
  ctx.font = 'bold 28px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(displayHandle, width / 2, 575);

  // Dynamic Title Banner
  ctx.fillStyle = 'rgba(5, 46, 34, 0.85)';
  ctx.beginPath();
  ctx.roundRect(100, 620, width - 200, 75, 20);
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = themeObj.accentColor || '#FACC15';
  ctx.stroke();

  ctx.fillStyle = '#FDE047';
  ctx.font = 'bold 28px "Syne", sans-serif';
  ctx.fillText(`⚡ ${displayTitle} ⚡`, width / 2, 668);

  // Role & Vibe Pills
  const pillY = 740;
  ctx.fillStyle = 'rgba(250, 204, 21, 0.2)';
  ctx.beginPath();
  ctx.roundRect(width / 2 - 240, pillY, 220, 55, 18);
  ctx.fill();
  ctx.fillStyle = '#FACC15';
  ctx.font = 'bold 24px "Syne", sans-serif';
  ctx.fillText(`${roleObj?.icon || '💻'} ${roleLabel}`, width / 2 - 130, pillY + 36);

  ctx.fillStyle = 'rgba(244, 63, 94, 0.25)';
  ctx.beginPath();
  ctx.roundRect(width / 2 + 20, pillY, 220, 55, 18);
  ctx.fill();
  ctx.fillStyle = '#FB7185';
  ctx.font = 'bold 24px "Syne", sans-serif';
  ctx.fillText(`${vibeObj.emoji} ${vibeObj.label}`, width / 2 + 130, pillY + 36);

  // Footer Line
  ctx.strokeStyle = 'rgba(250, 204, 21, 0.3)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(60, height - 100);
  ctx.lineTo(width - 60, height - 100);
  ctx.stroke();

  ctx.fillStyle = '#FACC15';
  ctx.font = 'bold 24px "Syne", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('🌴 #FrameInGoa', 80, height - 55);

  ctx.fillStyle = '#A7F3D0';
  ctx.font = 'bold 24px "Syne", sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText('GOA, INDIA', width - 80, height - 55);
};

const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
    img.src = src;
  });
};
