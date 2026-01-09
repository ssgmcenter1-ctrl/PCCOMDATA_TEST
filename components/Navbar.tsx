import React, { useState, useEffect } from 'react';
import { Menu, X, Info } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFeeAlert, setShowFeeAlert] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFeeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowFeeAlert(true);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
      setShowFeeAlert(false);
    }, 5000);
  };

  return (
    <>
      {/* Alert Notification Bar - Slides down from top */}
      <div 
        className={`fixed left-0 right-0 z-[60] flex justify-center transition-all duration-500 ease-in-out pointer-events-none ${
          showFeeAlert ? 'top-24 opacity-100' : '-top-20 opacity-0'
        }`}
      >
        <div className="bg-[#00C2CB] text-black px-6 py-3 rounded-full shadow-[0_0_20px_rgba(0,194,203,0.4)] flex items-center gap-3 max-w-[90%] md:max-w-max mx-auto pointer-events-auto backdrop-blur-md bg-opacity-95">
          <Info className="w-5 h-5 shrink-0" />
          <span className="text-sm md:text-base font-bold text-center break-keep leading-tight">
             <a href="tel:010-5317-8264" className="hover:text-white underline decoration-black/20 hover:decoration-white transition-all">전화상담</a>
             이나 
             <a href="https://talk.naver.com/pccomdata" target="_blank" rel="noopener noreferrer" className="hover:text-white underline decoration-black/20 hover:decoration-white transition-all mx-1">톡톡상담</a>
             을 이용해주시면 증상에 맞는 서비스 비용을 안내 드리겠습니다
          </span>
        </div>
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center gap-4 group cursor-pointer select-none">
            {/* Custom SVG Logo based on the provided image */}
            <div className="relative w-14 h-14 md:w-16 md:h-16 transition-transform group-hover:scale-105 duration-300 shrink-0">
               <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,194,203,0.2)]">
                  {/* Cyan Loop (Top and Outer) */}
                  <path d="M22 24H62C75.2548 24 86 34.7452 86 48C86 61.2548 75.2548 72 62 72H34" stroke="#00C2CB" strokeWidth="16" strokeLinecap="round" />
                  {/* Red Stem (Bottom and Inner) */}
                  <path d="M22 90V58C22 50.268 28.268 44 36 44H54" stroke="#FF4D28" strokeWidth="16" strokeLinecap="round" />
               </svg>
            </div>
            
            {/* Logo Text */}
            <div className="flex flex-col justify-center h-full pt-1">
              <span className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-none group-hover:text-[#00C2CB] transition-colors">
                PCCOMDATA
              </span>
              <span className="text-base md:text-lg font-bold text-white tracking-widest leading-tight -mt-1">
                피시컴데이터
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" onClick={handleFeeClick} className="text-xl font-bold text-zinc-200 hover:text-white transition-colors hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]">서비스 요금</a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-zinc-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-6 animate-in slide-in-from-top-5">
            <a 
              href="#" 
              className="text-2xl font-bold text-white hover:text-[#00C2CB]" 
              onClick={(e) => { 
                handleFeeClick(e); 
                setMobileMenuOpen(false); 
              }}
            >
              서비스 요금
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;