export type BuildMode = 'solo' | 'team';
export type CardThemeId = 'classic-green' | 'soft-pink' | 'sunburst-yellow' | 'deep-jungle';

export interface CardTheme {
  id: CardThemeId;
  name: string;
  subtitle: string;
  badgeBg: string;
  cardBgGradient: string;
  accentColor: string;
  pillBg: string;
  textColor: string;
  glowColor: string;
  borderGradient: string;
  emoji: string;
}

export interface BuilderMember {
  id: string;
  builderId?: string;
  memberName: string;
  name: string;
  handle: string;
  photoUrl: string | null;
  photoZoom: number;
  photoOffsetX: number;
  photoOffsetY: number;
  role: string;
  customRole: string;
  techStack: string[];
  vibe: string;
  generatedTitle: string;
}

export interface BuilderData {
  teamName?: string;
  builderId?: string;
  name: string;
  handle: string;
  photoUrl: string | null;
  photoZoom: number;
  photoOffsetX: number;
  photoOffsetY: number;
  role: string;
  customRole: string;
  techStack: string[];
  vibe: string;
  generatedTitle: string;
  theme: CardThemeId;
  unlocked: boolean;
}

export interface TeamData {
  mode: BuildMode;
  teamName: string;
  members: BuilderMember[];
  theme: CardThemeId;
  unlocked: boolean;
}

export interface RoleOption {
  id: string;
  label: string;
  icon: string;
  description: string;
}

export interface VibeOption {
  id: string;
  label: string;
  emoji: string;
  tagline: string;
  gradient: string;
}

export const DEFAULT_MEMBER: BuilderMember = {
  id: 'member-1',
  memberName: 'Team Leader',
  name: '',
  handle: '',
  photoUrl: null,
  photoZoom: 1,
  photoOffsetX: 0,
  photoOffsetY: 0,
  role: 'fullstack',
  customRole: '',
  techStack: ['React', 'TypeScript', 'Solana'],
  vibe: 'Goa Vibes',
  generatedTitle: '',
};

export const PRESET_ROLES: RoleOption[] = [
  { id: 'fullstack', label: 'Fullstack Dev', icon: '⚡', description: 'Crafting pixel-to-database harmony' },
  { id: 'frontend', label: 'Frontend Wizard', icon: '🎨', description: 'Sculpting fluid web experiences' },
  { id: 'backend', label: 'Backend Architect', icon: '⚙️', description: 'Building resilient high-scale systems' },
  { id: 'ai', label: 'AI / ML Engineer', icon: '🤖', description: 'Training intelligence & LLM pipelines' },
  { id: 'web3', label: 'Web3 Builder', icon: '🔗', description: 'Shipping decentralized protocols' },
  { id: 'mobile', label: 'Mobile Developer', icon: '📱', description: 'Delivering native pocket experiences' },
  { id: 'designer', label: 'UI/UX Designer', icon: '✨', description: 'Designing dreamy aesthetics & motion' },
  { id: 'product', label: 'Product Manager', icon: '🎯', description: 'Navigating visions to ship velocity' },
  { id: 'founder', label: 'Founder / Hacker', icon: '🚀', description: 'Bootstrapping moonshots from Goa' },
  { id: 'other', label: 'Other', icon: '🌟', description: 'Custom builder identity' },
];

export const PRESET_TECH_STACK = [
  'React', 'Next.js', 'TypeScript', 'Python', 'Rust', 'Solana', 
  'PyTorch', 'Node.js', 'Go', 'Tailwind', 'Figma', 'GraphQL', 
  'Docker', 'PostgreSQL', 'AI/LLM', 'Flutter', 'Swift', 'C++'
];

export const PRESET_VIBES: VibeOption[] = [
  { id: 'Goa Vibes', label: 'Goa Vibes', emoji: '🌴', tagline: 'Sunset breeze & high frequency energy', gradient: 'linear-gradient(135deg, #114B3A, #052E23)' },
  { id: 'Chill Flow', label: 'Chill Flow', emoji: '🌊', tagline: 'Flow state with ocean waves', gradient: 'linear-gradient(135deg, #0A4335, #072B21)' },
  { id: 'Speed Ship', label: 'Speed Ship', emoji: '⚡', tagline: 'Shipping fast under palm trees', gradient: 'linear-gradient(135deg, #195E4A, #0D3C2F)' },
  { id: 'Creative', label: 'Creative', emoji: '🎨', tagline: 'Sculpting colorful aesthetic code', gradient: 'linear-gradient(135deg, #0F4D3C, #F43F5E)' },
  { id: 'Problem Solver', label: 'Problem Solver', emoji: '🧠', tagline: 'Cracking complex logic at midnight', gradient: 'linear-gradient(135deg, #052E23, #155E4A)' },
  { id: 'Hack Mode', label: 'Hack Mode', emoji: '🔥', tagline: 'Non-stop shipping with zero sleep', gradient: 'linear-gradient(135deg, #195E4A, #F43F5E)' },
];

export const CARD_THEMES: CardTheme[] = [
  {
    id: 'classic-green',
    name: 'HH Goa Classic',
    subtitle: 'Deep Goa green & sun yellow',
    badgeBg: '#FACC15',
    cardBgGradient: 'linear-gradient(145deg, #0B3C2D 0%, #052E22 60%, #031F17 100%)',
    accentColor: '#FACC15',
    pillBg: 'rgba(250, 204, 21, 0.15)',
    textColor: '#FFFFFF',
    glowColor: 'rgba(250, 204, 21, 0.35)',
    borderGradient: 'linear-gradient(135deg, #FACC15, #F43F5E, #FACC15)',
    emoji: '🌴',
  },
  {
    id: 'soft-pink',
    name: 'Soft Rose Highlight',
    subtitle: 'Elegant rose pink & sun yellow',
    badgeBg: '#F43F5E',
    cardBgGradient: 'linear-gradient(145deg, #0F4C3A 0%, #062E22 65%, #2B0716 100%)',
    accentColor: '#FB7185',
    pillBg: 'rgba(244, 63, 94, 0.18)',
    textColor: '#FFFFFF',
    glowColor: 'rgba(244, 63, 94, 0.4)',
    borderGradient: 'linear-gradient(135deg, #F43F5E, #FACC15, #F43F5E)',
    emoji: '🌸',
  },
  {
    id: 'sunburst-yellow',
    name: 'Sunburst Gold',
    subtitle: 'Soft yellow backdrop & deep green text',
    badgeBg: '#0B3C2D',
    cardBgGradient: 'linear-gradient(145deg, #FEF08A 0%, #FDE047 65%, #EAB308 100%)',
    accentColor: '#0B3C2D',
    pillBg: 'rgba(11, 60, 45, 0.15)',
    textColor: '#0B3C2D',
    glowColor: 'rgba(250, 204, 21, 0.45)',
    borderGradient: 'linear-gradient(135deg, #0B3C2D, #F43F5E, #0B3C2D)',
    emoji: '☀️',
  },
  {
    id: 'deep-jungle',
    name: 'Deep Emerald Glass',
    subtitle: 'Dark jungle emerald & mint ring',
    badgeBg: 'rgba(250, 204, 21, 0.25)',
    cardBgGradient: 'linear-gradient(145deg, #042118 0%, #08372A 50%, #02140E 100%)',
    accentColor: '#34D399',
    pillBg: 'rgba(52, 211, 153, 0.15)',
    textColor: '#F0FDF4',
    glowColor: 'rgba(52, 211, 153, 0.4)',
    borderGradient: 'linear-gradient(135deg, #34D399, #FACC15, #34D399)',
    emoji: '🌿',
  },
];
