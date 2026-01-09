import React from 'react';
import { HardDrive, Server, Monitor, Cpu, Wrench } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: '컴퓨터 수리 & 조립 PC 판매',
    description: `단순 고장 수리부터 고사양 게이밍 작업용 조립 PC 제작까지 엄선된 정품 부품만을 사용하여 
로봇처럼 빈틈없는 조립과 정비 서비스를 제공합니다`,
    icon: Monitor,
    colSpan: 2,
  },
  {
    id: '2',
    title: '정밀 데이터 복구',
    description: `논리적 오류부터 물리적 파손까지
독자적인 디스크 이미징 기술로 
삭제된 데이터를 비트단위로 복원합니다`,
    icon: HardDrive,
    colSpan: 1,
  },
  {
    id: '3',
    title: '서버/RAID 복구',
    description: '기업용 NAS DAS 서버 스토리지의 RAID 구성을 재조합하여 손실된 기업 데이터를 복구합니다',
    icon: Server,
    colSpan: 1,
  },
  {
    id: '4',
    title: '하드웨어 업그레이드',
    description: `느려진 구형 PC에 SSD 장착 RAM 추가
최신 그래픽카드 교체 CPU 안정화 작업을
통해 새 컴퓨터처럼 성능을 향상 시킵니다`,
    icon: Cpu,
    colSpan: 1,
  },
  {
    id: '5',
    title: '기업 유지보수 & 네트워크',
    description: '사무실 네트워크 공사 및 정기 점검을 통해 업무 중단을 방지하는 예방 정비 솔루션을 제공합니다',
    icon: Wrench,
    colSpan: 1,
  },
];

const Features: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black relative">
      {/* Glow Background */}
      <div className="glow-bg top-0 right-0 opacity-20 translate-x-1/2 -translate-y-1/2 bg-purple-900"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            완벽한 <span className="text-gradient-brand">수리 솔루션</span>과 기술력
          </h2>
          <p className="text-zinc-300 text-lg max-w-2xl font-medium">
            컴퓨터 수리와 판매부터 데이터 복구까지<br />
            정밀한 엔지니어링 프로세스를 통해 시스템의 모든 문제를 해결해 드립니다
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative p-8 rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden ${
                service.colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              {/* Card Gradient Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00C2CB]/10 to-[#FF4D28]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <service.icon className={`w-6 h-6 ${service.colSpan === 2 ? 'text-[#00C2CB]' : 'text-zinc-400 group-hover:text-white'}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zinc-300 leading-relaxed font-medium break-keep whitespace-pre-line">{service.description}</p>
                </div>
                
                {/* Visual Decoration for larger cards */}
                {service.colSpan === 2 && (
                  <div className="absolute right-0 bottom-0 w-64 h-32 opacity-20 pointer-events-none">
                     <svg className="w-full h-full text-[#00C2CB]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M0 100 L20 80 L40 90 L60 40 L80 60 L100 0" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
                       <circle cx="60" cy="40" r="3" fill="currentColor" />
                     </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;