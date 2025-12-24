'use client';

import { useEffect, useState } from 'react';

const slogans = [
  "Turn chats into apps",
  "Prompt. Ship. Repeat.",
  "Build anything from a chat",
  "Ideas → Apps, instantly",
  "From zero to MVP in minutes",
  "Your cofounder in the command line",
  "Draft, iterate, deploy",
  "Ship faster than you can type",
  "Design in text, deliver in code",
  "Dream it. Prompt it. Run it.",
  "Chat-native app building",
  "From prompt to product",
  "One prompt, infinite apps",
  "Stop scaffolding. Start shipping.",
  "Prototype at the speed of thought",
  "Make conversations executable"
];

export default function Landing() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slogans.length);
        setIsVisible(true);
      }, 400);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative h-[100dvh] w-full overflow-hidden transition-colors duration-500 ${
      isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      {/* Enhanced animated aurora background layers - only in dark mode */}
      {isDarkMode && (
        <>
          <div className="absolute inset-0 bg-aurora-layer-1" />
          <div className="absolute inset-0 bg-aurora-layer-2" />
          <div className="absolute inset-0 bg-aurora-layer-3" />
          <div className="absolute inset-0 bg-particles" />
        </>
      )}
      
      {/* Light mode gradient background */}
      {!isDarkMode && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
      )}
      
      {/* Dark mode toggle button - top right */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`absolute top-6 right-6 z-30 p-3 rounded-full transition-all duration-300 ${
          isDarkMode 
            ? 'bg-white/10 hover:bg-white/20 text-white' 
            : 'bg-black/10 hover:bg-black/20 text-black'
        }`}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>
      
      {/* Main content - centered */}
      <main className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <h1 className="text-center text-[clamp(28px,6vw,64px)] font-medium tracking-tight mb-4">
          Turn Chats into Apps
        </h1>
        
        {/* Rotating slogans */}
        <div className="mt-4 h-8 md:h-10 overflow-hidden flex items-center justify-center">
          <span
            className={`inline-block text-center text-[clamp(18px,3vw,32px)] font-light transition-all duration-[400ms] ease-in-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            {slogans[currentIndex]}
          </span>
        </div>
      </main>
      
      {/* Start Prompting arrow pointing left - bottom left */}
      <div className="absolute left-6 md:left-8 bottom-[5%] z-20 flex items-center gap-3 arrow-point-left">
        <div className={`flex items-center gap-2 font-medium text-sm md:text-base ${
          isDarkMode ? 'text-white/80' : 'text-black/80'
        }`}>
          <svg 
            className="w-5 h-5 md:w-6 md:h-6 animate-bounce-horizontal" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Start prompting</span>
        </div>
      </div>
    </div>
  );
}


