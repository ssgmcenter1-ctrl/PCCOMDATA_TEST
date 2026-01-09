import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid z-0 opacity-30"></div>
      
      {/* 3D Spline Iframe */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/nexbotrobotcharacterconcept-3Sfz63dXhIkrAhn7vIISWsvv/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
          title="Robot 3D"
        ></iframe>
        {/* Darker Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black pointer-events-none"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-start pointer-events-none">
        
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md pointer-events-auto shadow-lg hover:border-[#00C2CB]/50 transition-colors">
          <span className="w-2 h-2 rounded-full bg-[#00C2CB] animate-pulse shadow-[0_0_12px_rgba(0,194,203,0.8)]"></span>
          <span className="text-xs font-semibold text-white tracking-wide">PCCOMDATA System Online</span>
        </div>

        {/* Updated Heading with break-keep and wider max-width */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white w-full max-w-6xl leading-[1.1] mb-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] break-keep">
          데이터의 <span className="text-gradient-brand font-extrabold drop-shadow-sm">완벽한 부활</span><br />
          로봇처럼 오차 없는 컴퓨터 수리
        </h1>
        
        {/* Enhanced readability wrapper for description */}
        <div className="max-w-xl mb-10 pointer-events-auto">
          <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#FF4D28] to-[#00C2CB]"></div>
            <p className="text-lg md:text-xl text-zinc-100 leading-relaxed font-medium break-keep">
              로봇처럼 정교하고 완벽한 시스템 분석<br />
              <span className="text-2xl md:text-3xl font-extrabold text-gradient-brand">피시컴데이터</span>는 최첨단 알고리즘 분석과 제어 기술로<br />
              귀하의 소중한 데이터를 복원합니다
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;