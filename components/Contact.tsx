import React from 'react';
import { Send, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-20">
        
        {/* Contact Info */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            컴퓨터수리 <span className="text-gradient-brand">데이터복구</span> 요청
          </h2>
          <p className="text-zinc-300 mb-12 text-lg font-medium leading-relaxed break-keep">
            문제가 발생하셨나요? <span className="text-white font-bold">피시컴데이터</span> 엔지니어링 팀이 대기중입니다<br className="hidden md:block" />
            증상을 입력해주시면 로봇처럼 정확한 증상해결 방안을 상세히 안내 드리겠습니다
          </p>
          
          <div className="space-y-8">
            <a href="tel:010-5317-8264" className="flex items-start gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10 shrink-0 group-hover:border-[#00C2CB]/50 transition-colors">
                <Phone className="text-white w-5 h-5 group-hover:text-[#00C2CB] transition-colors" />
              </div>
              <div>
                <h4 className="text-white font-bold group-hover:text-[#00C2CB] transition-colors">전화상담</h4>
                <p className="text-zinc-400 mt-1 font-medium group-hover:text-zinc-300 transition-colors">010-5317-8264</p>
              </div>
            </a>
            
            <div className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10 shrink-0 group-hover:border-[#00C2CB]/50 transition-colors">
                <MapPin className="text-white w-5 h-5 group-hover:text-[#00C2CB] transition-colors" />
              </div>
              <div>
                <h4 className="text-white font-bold">센터 위치</h4>
                <p className="text-zinc-400 mt-1 font-medium">경기도 시흥시 장현능곡로 155 2층 2008호<br />피시컴데이터</p>
              </div>
            </div>

            <a href="https://talk.naver.com/pccomdata" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10 shrink-0 group-hover:border-[#03C75A] transition-colors">
                 {/* Custom TalkTalk SVG Icon */}
                <svg className="w-5 h-5 fill-white group-hover:fill-[#03C75A] transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path d="M5.028 17.587c-.508.38-2.61 2.302-2.61 2.302S2 20.378 2 19.467V5.51C2 3.868 3.568 2 6.008 2h11.983C20.43 2 22 3.868 22 5.51v10.957c0 1.642-1.569 3.51-4.009 3.51H9.992c-.898 0-4.964-2.39-4.964-2.39z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold group-hover:text-zinc-200 transition-colors">빠른 답변을 받을수 있는 톡톡 상담문의</h4>
                <p className="text-[#03C75A] mt-1 font-bold group-hover:text-[#03C75A] transition-colors">네이버 톡톡으로 실시간 문의하기</p>
              </div>
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2">
            <form className="bg-zinc-900/50 p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
                <div className="space-y-6">
                    <div>
                        <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">이름</label>
                        <input type="text" className="w-full bg-transparent border-b border-zinc-700 py-2 text-white font-medium focus:outline-none focus:border-[#00C2CB] transition-colors placeholder-zinc-600" placeholder="홍길동" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">연락처</label>
                        <input type="tel" className="w-full bg-transparent border-b border-zinc-700 py-2 text-white font-medium focus:outline-none focus:border-[#00C2CB] transition-colors placeholder-zinc-600" placeholder="010-0000-0000" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">증상 선택</label>
                        <select defaultValue="" className="w-full bg-transparent border-b border-zinc-700 py-2 text-white font-medium focus:outline-none focus:border-[#00C2CB] transition-colors [&>option]:bg-zinc-900">
                            <option value="" disabled hidden>증상을 선택해주세요</option>
                            <option>데이터 복구</option>
                            <option>컴퓨터 수리</option>
                            <option>서버/나스 복구</option>
                            <option>기타 문의</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">상세 내용</label>
                        <textarea 
                          rows={4} 
                          className="w-full bg-transparent border-b border-zinc-700 py-2 text-white font-medium focus:outline-none focus:border-[#00C2CB] transition-colors placeholder-zinc-600 resize-none" 
                          placeholder={`증상을 자세히 적어주시면\n정확한 진단에 도움이 됩니다`}
                        ></textarea>
                    </div>

                    <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 mt-4 shadow-lg">
                        24시간 문의 <Send className="w-4 h-4" />
                    </button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;