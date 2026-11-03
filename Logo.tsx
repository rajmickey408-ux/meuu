import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showSubtitle = true }) => {
  const sizeClasses = {
    sm: { icon: 'w-7 h-7', text: 'text-base', sub: 'text-[9px]' },
    md: { icon: 'w-9 h-9', text: 'text-xl', sub: 'text-[10px]' },
    lg: { icon: 'w-12 h-12', text: 'text-2xl', sub: 'text-xs' },
    xl: { icon: 'w-16 h-16', text: 'text-3xl', sub: 'text-sm' },
  }[size];

  return (
    <div className="flex items-center space-x-3 select-none">
      {/* MEUU AI Glowing 3D Ribbon Logo 'M' */}
      <div className={`relative ${sizeClasses.icon} shrink-0 group`}>
        {/* Glow backdrop */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-70 blur-md group-hover:opacity-100 transition-opacity" />
        
        <div className="relative w-full h-full rounded-2xl bg-[#060B18] border border-cyan-400/40 p-1 flex items-center justify-center shadow-lg overflow-hidden">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="meuu-grad-1" x1="0%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="meuu-grad-2" x1="50%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            {/* Left pillar */}
            <path
              d="M 22 80 L 22 25 C 22 20, 32 18, 38 25 L 50 48 L 62 25 C 68 18, 78 20, 78 25 L 78 80"
              stroke="url(#meuu-grad-1)"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Overlay glow ribbon */}
            <path
              d="M 22 80 L 22 35 L 50 72 L 78 35 L 78 80"
              stroke="url(#meuu-grad-2)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
            />
          </svg>
        </div>
      </div>

      <div>
        <div className="flex items-center space-x-1">
          <span className={`font-display font-black tracking-tight bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent ${sizeClasses.text}`}>
            MEUU AI
          </span>
        </div>
        {showSubtitle && (
          <p className={`font-medium text-cyan-400/80 tracking-wide uppercase ${sizeClasses.sub}`}>
            Your Personal Career Compass
          </p>
        )}
      </div>
    </div>
  );
};
