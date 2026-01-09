import React from 'react';
import { Cpu, ShieldCheck, Zap, Server, AlertTriangle, CheckCircle2, Microscope, Layers, XCircle, Activity } from 'lucide-react';

const Equipment: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden border-y border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00C2CB] to-transparent opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF4D28] to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Header Section: The "Why" */}
        <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C2CB]/10 border border-[#00C2CB]/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00C2CB] shadow-[0_0_10px_#00C2CB] animate-pulse"></span>
                <span className="text-[#00C2CB] text-xs font-bold tracking-wide">ACE LAB AUTHORIZED SYSTEM</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight break-keep">
                복구 실패와 성공의 차이<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2CB] to-[#FF4D28]">장비의 유무</span>가 결정합니다
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed break-keep">
                PC-3000은 데이터 복구 업계의 <strong>MRI이자 수술 로봇입니다</strong><br className="hidden md:block"/>
                단순 연결로는 인식조차 안 되는 저장매체도 강제로 깨워내고 숨쉬게 하여 데이터를 추출합니다
            </p>
        </div>

        {/* 2. Comparison Section: Have vs Have Not */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {/* Case A: General Software */}
            <div className="relative group p-8 rounded-3xl bg-[#1a1a1a] border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.15)] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-900"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-5 mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.3)] shrink-0">
                            <AlertTriangle className="w-8 h-8 text-red-500" />
                        </div>
                        <div className="flex flex-col">
                             <span className="text-red-500 font-bold text-xs tracking-widest mb-1 opacity-90">WARNING</span>
                             <span className="font-black text-xl md:text-2xl text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">일반 복구 업체 및 소프트웨어</span>
                        </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-6 break-keep">인식이 안되면<br/><span className="text-red-500 text-3xl">손쓸 방법이 없습니다</span></h3>
                    
                    <ul className="space-y-4">
                        <li className="flex gap-4 items-center bg-red-500/5 p-4 rounded-xl border border-red-500/10 hover:bg-red-500/10 transition-colors">
                            <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                            <span className="text-zinc-200 text-base font-medium break-keep">
                                전원 공급 시 소음이 나면 <br className="md:hidden" />
                                <span className="text-red-400 font-extrabold underline decoration-red-500/50 underline-offset-4">작업불가</span>
                            </span>
                        </li>
                        <li className="flex gap-4 items-center bg-red-500/5 p-4 rounded-xl border border-red-500/10 hover:bg-red-500/10 transition-colors">
                            <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                            <span className="text-zinc-200 text-base font-medium break-keep">CMOS 바이오스 인식이 안되면 <span className="text-red-400 font-extrabold underline decoration-red-500/50 underline-offset-4">포기</span></span>
                        </li>
                        <li className="flex gap-4 items-center bg-red-500/5 p-4 rounded-xl border border-red-500/10 hover:bg-red-500/10 transition-colors">
                            <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                            <span className="text-zinc-200 text-base font-medium break-keep">배드섹터 발생 시 <span className="text-red-400 font-extrabold underline decoration-red-500/50 underline-offset-4">시스템 다운</span></span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Case B: PC-3000 */}
            <div className="relative group p-8 rounded-3xl bg-zinc-900 border border-[#00C2CB]/30 shadow-[0_0_30px_rgba(0,194,203,0.15)] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00C2CB] to-[#FF4D28]"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-5 mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-[#00C2CB]/10 flex items-center justify-center border border-[#00C2CB]/20 shadow-[0_0_20px_rgba(0,194,203,0.3)] shrink-0">
                            <Server className="w-8 h-8 text-[#00C2CB]" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[#00C2CB] font-bold text-xs tracking-widest mb-1 opacity-90">PCCOMDATA SYSTEM</span>
                            <span className="font-black text-xl md:text-2xl text-[#00C2CB] drop-shadow-[0_0_10px_rgba(0,194,203,0.5)]">피시컴데이터 PC-3000 보유</span>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-6 break-keep">죽은 하드디스크를<br/><span className="text-[#00C2CB] text-3xl">강제로 제어하여</span> 살려냅니다</h3>
                    
                    <ul className="space-y-4">
                        <li className="flex gap-4 items-center bg-[#00C2CB]/5 p-4 rounded-xl border border-[#00C2CB]/10 hover:bg-[#00C2CB]/10 transition-colors">
                            <CheckCircle2 className="w-6 h-6 text-[#00C2CB] shrink-0" />
                            <span className="text-zinc-200 text-base font-medium break-keep">
                                인식 불가 상태에서도 <br className="md:hidden" />
                                <span className="text-[#00C2CB] font-extrabold">강제 전원 제어</span>
                            </span>
                        </li>
                        <li className="flex gap-4 items-center bg-[#00C2CB]/5 p-4 rounded-xl border border-[#00C2CB]/10 hover:bg-[#00C2CB]/10 transition-colors">
                            <CheckCircle2 className="w-6 h-6 text-[#00C2CB] shrink-0" />
                            <span className="text-zinc-200 text-base font-medium break-keep">
                                망가진 헤드 끄고 <br className="md:hidden" />
                                <span className="text-[#00C2CB] font-extrabold">정상 영역 우선 추출</span>
                            </span>
                        </li>
                        <li className="flex gap-4 items-center bg-[#00C2CB]/5 p-4 rounded-xl border border-[#00C2CB]/10 hover:bg-[#00C2CB]/10 transition-colors">
                            <CheckCircle2 className="w-6 h-6 text-[#00C2CB] shrink-0" />
                            <span className="text-zinc-200 text-base font-medium break-keep">
                                제조사 전용 모드로 <br className="md:hidden" />
                                <span className="text-[#00C2CB] font-extrabold">펌웨어 직접 수정</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* 3. NEW: Tech Panel Layout */}
        <div className="mb-8">
             <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center md:text-left">
                PC-3000 만의 <span className="text-gradient-brand">독보적인 기능</span>
            </h3>

            {/* Main Tech Container */}
            <div className="relative rounded-[2.5rem] overflow-hidden bg-black border border-[#00C2CB]/30 shadow-[0_0_50px_rgba(0,194,203,0.1)] group">
                
                {/* Background Image: High-Tech Blue Circuit Board */}
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                        alt="Advanced Data Recovery Circuit Technology" 
                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s] ease-in-out" 
                    />
                    {/* Dark Gradients for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
                    <div className="absolute inset-0 bg-blue-950/30 mix-blend-multiply"></div>
                </div>

                {/* Content Grid */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10 min-h-[500px]">
                    
                    {/* Feature 1 */}
                    <div className="p-8 md:p-12 flex flex-col justify-end hover:bg-white/5 transition-colors group/item">
                        <div className="mb-auto">
                            <div className="w-12 h-12 rounded-2xl bg-[#00C2CB]/20 flex items-center justify-center border border-[#00C2CB]/30 mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(0,194,203,0.3)]">
                                <Cpu className="w-6 h-6 text-[#00C2CB]" />
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00C2CB] animate-pulse"></span>
                                <span className="text-[#00C2CB] font-bold text-xs tracking-widest uppercase">Firmware Repair</span>
                            </div>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4 leading-tight">뇌사 상태의<br/>하드디스크 소생</h4>
                        <p className="text-zinc-300 leading-relaxed text-sm break-keep border-t border-white/10 pt-4 whitespace-pre-line">
                            {`하드디스크가 작동하지 않는 원인의 70%는
내부 시스템 파일인 펌웨어 손상입니다
일반컴퓨터로는 볼수 없는 Service Area 시스템 
영역에 직접 접속하고 꼬여버린 코드를
수정하고 다시 작동하게 만듭니다`}
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-8 md:p-12 flex flex-col justify-end hover:bg-white/5 transition-colors group/item">
                        <div className="mb-auto">
                             <div className="w-12 h-12 rounded-2xl bg-[#FF4D28]/20 flex items-center justify-center border border-[#FF4D28]/30 mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(255,77,40,0.3)]">
                                <Microscope className="w-6 h-6 text-[#FF4D28]" />
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D28] animate-pulse"></span>
                                <span className="text-[#FF4D28] font-bold text-xs tracking-widest uppercase">Nano Precision</span>
                            </div>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4 leading-tight">물리적 손상 극복<br/>헤드 맵 제어</h4>
                        <p className="text-zinc-300 leading-relaxed text-sm break-keep border-t border-white/10 pt-4">
                            데이터를 읽는 바늘인 헤드 하나가 고장나면 전체가 멈춥니다 
                            PC-3000은 고장난 헤드만 끄고 나머지 정상 헤드로 데이터를 먼저 빼내는 
                            헤드 맵 제어 기술을 사용하여 데이터를 확보합니다
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="p-8 md:p-12 flex flex-col justify-end hover:bg-white/5 transition-colors group/item">
                        <div className="mb-auto">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                <Layers className="w-6 h-6 text-blue-500" />
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                                <span className="text-blue-500 font-bold text-xs tracking-widest uppercase">Sector Extraction</span>
                            </div>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4 leading-tight">배드섹터<br/>정밀 추출 알고리즘</h4>
                        <p className="text-zinc-300 leading-relaxed text-sm break-keep border-t border-white/10 pt-4">
                            긁힌 CD 처럼 읽히지 않는 구간인 배드섹터를 만났을 때 
                            멈추지 않고 독자적인 전압 조절과 읽기 알고리즘으로 
                            데이터를 한 비트라도 더 건져냅니다
                        </p>
                    </div>

                </div>
            </div>
        </div>

        {/* 4. Bottom Line / Trust Badge */}
        <div className="mt-20 flex justify-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 backdrop-blur-sm max-w-4xl w-full">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#00C2CB]/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-[#00C2CB]" />
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 break-keep">
                        당신의 데이터는 아직 <br className="md:hidden" />그 자리에 있습니다
                    </h3>
                    <p className="text-zinc-400 leading-relaxed whitespace-pre-line break-keep">
                        {`다른 업체에서 복구 불가 판정을 받으셨나요
복구장비의 업그레이드 펌웨어 업데이트가
고가의 유료서비스 이기에 어렵고
복구장치를 원활히 운용할수 있는
기술엔지니어의 역량 차이 입니다`}
                        <span className="text-[#00C2CB] font-extrabold block mt-2 md:text-lg">피시컴데이터 에서 마지막 가능성을 확인 해보세요</span>
                    </p>
                </div>
                <div className="hidden md:block w-px h-16 bg-white/10 mx-4"></div>
                <div className="shrink-0">
                     <div className="text-xs font-mono text-zinc-500 mb-1 text-center md:text-right">EQUIPMENT VALUE</div>
                     <div className="text-white font-bold text-lg md:text-xl text-center md:text-right">High-End Class</div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Equipment;