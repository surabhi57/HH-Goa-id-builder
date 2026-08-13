import React, { useState } from 'react';
import type { TeamData, BuildMode, BuilderMember } from './types';
import { DEFAULT_MEMBER } from './types';
import { WaveBackground } from './components/WaveBackground';
import { Navbar } from './components/Navbar';
import { Page1Landing } from './components/Page1Landing';
import { Page2ChooseMode } from './components/Page2ChooseMode';
import { Page3Details } from './components/Page3Details';
import { Page4UnlockID } from './components/Page4UnlockID';
import { createBuilderId } from './utils/builderId';
import './index.css';

const INITIAL_TEAM_DATA: TeamData = {
  mode: 'solo',
  teamName: '',
  members: [{ ...DEFAULT_MEMBER }],
  theme: 'classic-green',
  unlocked: false,
};

// High resolution sample avatar SVG for instant demo preview
const SAMPLE_AVATAR_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%230B3C2D"/><stop offset="50%" stop-color="%23062E22"/><stop offset="100%" stop-color="%23FACC15"/></linearGradient></defs><rect width="300" height="300" rx="150" fill="url(%23bg)"/><circle cx="150" cy="115" r="50" fill="%23FACC15" opacity="0.95"/><path d="M70,250 C70,185 110,175 150,175 C190,175 230,185 230,250 Z" fill="%23FACC15" opacity="0.95"/><circle cx="150" cy="115" r="42" fill="%23F43F5E" opacity="0.25"/><text x="150" y="125" font-family="sans-serif" font-size="32" font-weight="bold" fill="%230B3C2D" text-anchor="middle">⚡</text></svg>`;

export const App: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [teamData, setTeamData] = useState<TeamData>(INITIAL_TEAM_DATA);

  const updateTeamData = (updates: Partial<TeamData>) => {
    setTeamData((prev) => ({ ...prev, ...updates }));
  };

  const navigateToPage = (targetPage: number) => {
    if (targetPage === page) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setPage(targetPage);
    }, 400);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 900);
  };

  const handleSelectMode = (mode: BuildMode) => {
    if (mode === 'solo') {
      const firstMember = teamData.members[0] || { ...DEFAULT_MEMBER };
      setTeamData((prev) => ({
        ...prev,
        mode: 'solo',
        members: [{ ...firstMember, memberName: 'Solo Builder' }],
      }));
    } else {
      const leader = { ...teamData.members[0], memberName: 'Team Leader' };
      const teammate2: BuilderMember = {
        id: 'member-2',
        memberName: 'Teammate 2',
        name: 'Devin Cole',
        handle: '@devinbuilds',
        photoUrl: SAMPLE_AVATAR_SVG,
        photoZoom: 1,
        photoOffsetX: 0,
        photoOffsetY: 0,
        role: 'frontend',
        customRole: '',
        techStack: ['React', 'TypeScript'],
        vibe: 'Goa Vibes',
        generatedTitle: 'Pixel Wave Surfer',
      };
      setTeamData((prev) => ({
        ...prev,
        mode: 'team',
        teamName: prev.teamName,
        members: prev.members.length > 1 ? prev.members : [leader, teammate2],
      }));
    }
  };

  const handleLoadSample = () => {
    setTeamData({
      mode: 'solo',
      teamName: '',
      members: [
        {
          id: 'member-1',
          memberName: 'Solo Builder',
          name: 'Aria Sharma',
          handle: '@ariabuilds',
          photoUrl: SAMPLE_AVATAR_SVG,
          photoZoom: 1,
          photoOffsetX: 0,
          photoOffsetY: 0,
          role: 'fullstack',
          customRole: '',
          techStack: ['React', 'TypeScript', 'Solana', 'PyTorch'],
          vibe: 'Goa Vibes',
          generatedTitle: 'Sunset Solana Alchemist',
        },
      ],
      theme: 'classic-green',
      unlocked: true,
    });
    navigateToPage(4);
  };

  const handleReset = () => {
    setTeamData(INITIAL_TEAM_DATA);
    navigateToPage(1);
  };

  const handleGeneratePass = () => {
    setTeamData((prev) => {
      const used = new Set(prev.members.flatMap((member) => member.builderId ? [member.builderId] : []));
      return { ...prev, unlocked: true, members: prev.members.map((member) => {
        if (member.builderId) return member;
        const builderId = createBuilderId(used); used.add(builderId);
        return { ...member, builderId };
      }) };
    });
    navigateToPage(4);
  };

  const activeMember = teamData.members[0] || DEFAULT_MEMBER;
  const hasData = Boolean(activeMember.name || activeMember.photoUrl);

  return (
    <div className="app-layout">
      {/* Animated Wave & Sky Background */}
      <WaveBackground />

      {/* 🕊️ Page Transition Bird Flight Sweep Overlay */}
      {isTransitioning && (
        <div className="page-transition-bird-overlay" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 1440 900">
            <g className="transition-bird-flock">
              <path d="M 0 180 Q 15 165 30 180 Q 45 165 60 180" fill="none" stroke="#FACC15" strokeWidth="4" strokeLinecap="round" />
              <path d="M 50 140 Q 65 125 80 140 Q 95 125 110 140" fill="none" stroke="#F43F5E" strokeWidth="4" strokeLinecap="round" />
              <path d="M 120 220 Q 135 205 150 220 Q 165 205 180 220" fill="none" stroke="#34D399" strokeWidth="4" strokeLinecap="round" />
              <path d="M 180 160 Q 195 145 210 160 Q 225 145 240 160" fill="none" stroke="#FACC15" strokeWidth="3.5" strokeLinecap="round" />
            </g>
          </svg>
        </div>
      )}

      {/* Navigation Header with Step Tracker */}
      <Navbar
        currentStep={page}
        onNavigateStep={navigateToPage}
        onLoadSample={handleLoadSample}
        onReset={handleReset}
        hasData={hasData}
      />

      {/* Main Experience Layout */}
      <main className="main-content">
        <div className="container-custom">
          {/* Multi-Page Experience Flow */}
          {page === 1 && (
            <Page1Landing
              onEnter={() => navigateToPage(2)}
              onTryDemo={handleLoadSample}
            />
          )}

          {page === 2 && (
            <Page2ChooseMode
              selectedMode={teamData.mode}
              onSelectMode={handleSelectMode}
              onNext={() => navigateToPage(3)}
              onPrev={() => navigateToPage(1)}
            />
          )}

          {page === 3 && (
            <Page3Details
              teamData={teamData}
              onChangeTeam={updateTeamData}
              onNext={handleGeneratePass}
              onPrev={() => navigateToPage(2)}
            />
          )}

          {page === 4 && (
            <Page4UnlockID
              teamData={teamData}
              onChangeTeam={updateTeamData}
              onEdit={() => navigateToPage(3)}
              onRestart={handleReset}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer-container">
        <p>HACKER HOUSE GOA 2026 • OFFICIAL BUILDER ID EXPERIENCE • #FrameInGoa</p>
      </footer>
    </div>
  );
};

export default App;
