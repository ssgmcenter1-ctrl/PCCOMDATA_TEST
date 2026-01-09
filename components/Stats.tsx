import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
        {/* Animated grid line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        <div>
          <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter drop-shadow-md">98.9<span className="text-blue-500">%</span></h4>
          <p className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">데이터 복구 성공률</p>
        </div>
        <div>
          <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter drop-shadow-md">24<span className="text-xs align-top mt-2 inline-block text-zinc-400">h</span></h4>
          <p className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">긴급 분석 시스템</p>
        </div>
        <div>
          <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter drop-shadow-md">15,000<span className="text-blue-500">+</span></h4>
          <p className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">누적 수리 건수</p>
        </div>
        <div className="flex items-center justify-center md:justify-end">
            <div className="text-right">
                <p className="text-zinc-200 text-sm mb-2 font-medium">업계 최고 수준의 <br/>클린룸 설비 보유</p>
                <div className="flex gap-1 justify-end">
                    {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-1 h-6 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.6)]" style={{ animationDelay: `${i * 0.1}s` }}></div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;