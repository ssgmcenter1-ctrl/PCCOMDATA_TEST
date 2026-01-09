import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingDock: React.FC = () => {
  return (
    <div className="fixed z-50 
      bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm 
      md:bottom-auto md:left-auto md:translate-x-0 md:right-8 md:top-1/2 md:-translate-y-1/2 md:w-auto md:max-w-none">
      
      {/* Container with High Contrast and Visibility */}
      <div className="flex items-center justify-between md:flex-col md:gap-5 px-6 py-4 md:px-4 md:py-6 
        bg-zinc-900/95 backdrop-blur-xl border border-[#00C2CB]/50 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.8)] 
        ring-1 ring-[#00C2CB]/20 relative overflow-hidden">
        
        {/* Animated Glow Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-[#00C2CB]/20 to-transparent 
          translate-x-[-100%] md:translate-x-0 md:translate-y-[-100%] 
          animate-[shimmer_3s_infinite] md:animate-[shimmer-vertical_3s_infinite]"></div>

        {/* 1. Phone Consultation */}
        <a 
          href="tel:010-5317-8264" 
          className="flex flex-col items-center gap-1.5 group relative z-10 w-full cursor-pointer"
        >
          <div className="p-3.5 rounded-xl bg-zinc-800 border border-zinc-700 
            group-hover:bg-[#00C2CB] group-hover:border-[#00C2CB] group-hover:scale-110 transition-all duration-300 shadow-lg 
            group-hover:shadow-[0_0_20px_rgba(0,194,203,0.6)]">
            <Phone className="w-5 h-5 text-white" />
          </div>
          <span className="text-[11px] font-bold text-zinc-300 group-hover:text-[#00C2CB] transition-colors whitespace-nowrap">전화상담</span>
        </a>

        {/* Separator for desktop */}
        <div className="hidden md:block w-8 h-[1px] bg-white/10"></div>

        {/* 2. Naver TalkTalk (Cost Consultation) */}
        <a href="https://talk.naver.com/pccomdata" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group relative z-10 w-full">
          <div className="p-3.5 rounded-xl bg-zinc-800 border border-zinc-700 
            group-hover:bg-[#03C75A] group-hover:border-[#03C75A] group-hover:scale-110 transition-all duration-300 shadow-lg 
            group-hover:shadow-[0_0_20px_rgba(3,199,90,0.6)]">
             {/* Naver TalkTalk Custom SVG */}
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path d="M5.028 17.587c-.508.38-2.61 2.302-2.61 2.302S2 20.378 2 19.467V5.51C2 3.868 3.568 2 6.008 2h11.983C20.43 2 22 3.868 22 5.51v10.957c0 1.642-1.569 3.51-4.009 3.51H9.992c-.898 0-4.964-2.39-4.964-2.39z" />
            </svg>
          </div>
          <span className="text-[11px] font-bold text-zinc-300 group-hover:text-[#03C75A] transition-colors whitespace-nowrap">톡톡상담</span>
        </a>

        {/* Separator for desktop */}
        <div className="hidden md:block w-8 h-[1px] bg-white/10"></div>

        {/* 3. Naver Blog */}
        <a href="https://blog.naver.com/ora78" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 group relative z-10 w-full">
          <div className="p-3.5 rounded-xl bg-zinc-800 border border-zinc-700 
            group-hover:bg-[#2DB400] group-hover:border-[#2DB400] group-hover:scale-110 transition-all duration-300 shadow-lg 
            group-hover:shadow-[0_0_20px_rgba(45,180,0,0.6)]">
            {/* Naver Icon */}
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.403 3H20.998V21H16.403V9.096L7.599 21H3V3H7.599V14.904L16.403 3Z" />
            </svg>
          </div>
          <span className="text-[11px] font-bold text-zinc-300 group-hover:text-[#2DB400] transition-colors whitespace-nowrap">블로그</span>
        </a>

        {/* Separator for desktop */}
        <div className="hidden md:block w-8 h-[1px] bg-white/10"></div>

        {/* 4. KakaoTalk Open Chat */}
        <a 
          href="https://open.kakao.com/o/syn7mlai" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex flex-col items-center gap-1.5 group relative z-10 w-full"
        >
          <div className="p-3.5 rounded-xl bg-zinc-800 border border-zinc-700 
            group-hover:bg-[#FEE500] group-hover:border-[#FEE500] group-hover:scale-110 transition-all duration-300 shadow-lg 
            group-hover:shadow-[0_0_20px_rgba(254,229,0,0.6)]">
             {/* Kakao Icon */}
            <svg className="w-5 h-5 fill-white group-hover:fill-[#3C1E1E] transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3C6.477 3 2 6.428 2 10.657C2 13.376 3.754 15.765 6.428 17.07L5.503 20.473C5.398 20.865 5.828 21.18 6.168 20.945L10.748 17.893C11.157 17.929 11.574 17.948 12 17.948C17.523 17.948 22 14.52 22 10.291C22 6.062 17.523 3 12 3Z" />
            </svg>
          </div>
          <span className="text-[11px] font-bold text-zinc-300 group-hover:text-[#FEE500] transition-colors whitespace-nowrap">카톡상담</span>
        </a>

      </div>
    </div>
  );
};

export default FloatingDock;