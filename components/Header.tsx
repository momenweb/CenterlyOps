
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'privacy' | 'terms') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 md:py-5 px-4 md:px-8 border-b border-slate-100 bg-white/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 md:gap-3 group cursor-pointer shrink-0"
        >
          <div className="relative w-8 h-8 md:w-9 md:h-9">
            <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-pulse blur-sm opacity-50" />
            <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center text-white font-black text-base md:text-lg">C</div>
          </div>
          <span className="text-lg md:text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors whitespace-nowrap">Centerly Ops</span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-500">
          <a href="#what-we-do" onClick={() => onNavigate('home')} className="hover:text-indigo-600 transition-colors">What We Do</a>
          <a href="#who-it-is-for" onClick={() => onNavigate('home')} className="hover:text-indigo-600 transition-colors">Who It's For</a>
          <a href="#how-it-works" onClick={() => onNavigate('home')} className="hover:text-indigo-600 transition-colors">How It Works</a>
        </nav>

        <a 
          href="#book"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full bg-slate-900 text-white text-xs md:text-sm font-bold hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-200 transition-all active:scale-95"
        >
          <span className="hidden sm:inline">Book 10 min</span>
          <span className="sm:hidden">Book Now</span>
          <ArrowRight size={14} className="md:w-4 md:h-4" />
        </a>
      </div>
    </header>
  );
};

export default Header;
