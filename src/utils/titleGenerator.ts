// Dynamic Builder Class generator for HH Goa 2026

const GOA_CLASS_EPITHETS: Record<string, string[]> = {
  'Goa Vibes': ['Goa Code Alchemist', 'Tropical Wave Architect', 'Beachside Protocol Pilot', 'Sunlit System Sculptor', 'Palm-Tree Hacker'],
  'Chill Flow': ['Oceanic Zen Builder', 'Serene Tide Engineer', 'Breeze Flow Sculptor', 'Quiet Reef Hacker', 'Calm Stream Craftsman'],
  'Speed Ship': ['Velocity Ship Master', 'Lightning Tide Pilot', 'Speedboat Code Runner', 'Turbo Wave Captain', 'Fast-Track Hacker'],
  'Creative': ['Hot-Pink Pixel Sculptor', 'Visual Sunset Artisan', 'Aesthetic Wave Weaver', 'Design Horizon Maestro', 'Creative Logic Craftsman'],
  'Problem Solver': ['Deep-Sea Logic Strategist', 'Tidal Protocol Solver', 'Submarine Algorithm Master', 'Reef System Architect', 'Midnight Code Pioneer'],
  'Hack Mode': ['High-Tide Night Hacker', 'Sunburst Code Warrior', 'Zero-Sleep Wave Runner', 'All-Nighter Goa Pilot', 'Midnight Protocol Specialist'],
};

const ROLE_CLASS_TITLES: Record<string, string[]> = {
  'frontend': ['Pixel Wave Surfer', 'UI Sunburst Architect', 'DOM Tropical Whisperer', 'Interface Tide Master'],
  'backend': ['Deep-Jungle Infra Pilot', 'Tidal Database Weaver', 'Scale Stream Architect', 'Cloud Reef Navigator'],
  'fullstack': ['End-to-End Sunset Architect', 'Fullstack Wave Rider', 'Omni-Tide Crafter', 'Pixel & Protocol Alchemist'],
  'ai': ['Neural Sunburst Whisperer', 'AI Wave Alchemist', 'LLM Ocean Navigator', 'Tidal Intelligence Sculptor'],
  'web3': ['Solana Wave Protocol Pilot', 'On-Chain Reef Navigator', 'Decentralized Tide Crafter', 'Crypto Sunset Architect'],
  'mobile': ['Pocket Breeze Specialist', 'Native Wave Crafter', 'Mobile Sunburst Navigator', 'Touchscreen Tide Hacker'],
  'designer': ['Pastel Design Visionary', 'Sunlit UI Sculptor', 'Breeze Experience Artisan', 'Seashell Palette Master'],
  'product': ['Velocity Tide Captain', 'Vision Wave Navigator', 'Beachside Product Pioneer', 'Goa Roadmap Pilot'],
  'founder': ['Moonshot Sunset Captain', 'Tidal Venture Pioneer', 'Goa Horizon Founder', 'Coastal Startup Catalyst'],
};

export function generateBuilderTitles(role: string, customRole: string, techStack: string[], vibe: string): string[] {
  const titles: string[] = [];
  const effectiveRole = (role === 'other' ? customRole : role).toLowerCase();
  const topStack = techStack.length > 0 ? techStack[0] : '';
  const secondStack = techStack.length > 1 ? techStack[1] : '';

  // 1. Stack + Beach combo
  if (topStack) {
    titles.push(`Goa ${topStack} Alchemist`);
    titles.push(`${topStack} Wave Surfer`);
    if (secondStack) {
      titles.push(`${topStack} & ${secondStack} Protocol Pilot`);
    }
  }

  // 2. Role specific titles
  for (const [key, roleTitles] of Object.entries(ROLE_CLASS_TITLES)) {
    if (effectiveRole.includes(key)) {
      titles.push(...roleTitles);
      break;
    }
  }

  // 3. Vibe specific titles
  const vibeTitles = GOA_CLASS_EPITHETS[vibe] || GOA_CLASS_EPITHETS['Goa Vibes'];
  titles.push(...vibeTitles);

  // 4. Custom role titles if user specified custom input
  if (role === 'other' && customRole.trim()) {
    titles.unshift(`Goa ${customRole.trim()} Maestro`);
    titles.unshift(`Sunburst ${customRole.trim()} Architect`);
  }

  // Fallback defaults
  if (titles.length < 3) {
    titles.push('Goa Code Alchemist', 'Tidal Wave Navigator', 'HH Goa Builder Class');
  }

  // Deduplicate
  return Array.from(new Set(titles));
}

export function getRandomTitle(role: string, customRole: string, techStack: string[], vibe: string): string {
  const options = generateBuilderTitles(role, customRole, techStack, vibe);
  return options[Math.floor(Math.random() * options.length)];
}
