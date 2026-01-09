import React, { useState } from 'react';
import { X } from 'lucide-react';

const Footer: React.FC = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-black border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-4">
              {/* Mini Logo SVG */}
              <div className="w-12 h-12">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M22 24H62C75.2548 24 86 34.7452 86 48C86 61.2548 75.2548 72 62 72H34" stroke="#00C2CB" strokeWidth="16" strokeLinecap="round" />
                  <path d="M22 90V58C22 50.268 28.268 44 36 44H54" stroke="#FF4D28" strokeWidth="16" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-bold text-white tracking-tight leading-none">PCCOMDATA</span>
                <span className="text-base font-bold text-zinc-300 tracking-widest -mt-1">피시컴데이터</span>
              </div>
            </div>
          </div>
          
          <div className="text-zinc-500 text-sm text-center md:text-right">
            <p className="mb-2">경기도 시흥시 장현능곡로 155 2층 2008호 피시컴데이터</p>
            <p>&copy; {new Date().getFullYear()} PCCOMDATA Recovery Center. All rights reserved.</p>
            <div className="flex gap-6 mt-4 justify-center md:justify-end">
              <button 
                onClick={() => setIsTermsOpen(true)} 
                className="hover:text-[#00C2CB] transition-colors"
              >
                이용약관
              </button>
              <button 
                onClick={() => setIsPrivacyOpen(true)}
                className="hover:text-[#00C2CB] transition-colors"
              >
                개인정보처리방침
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Terms Modal */}
      {isTermsOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsTermsOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-zinc-900 rounded-t-2xl shrink-0">
              <h3 className="text-xl font-bold text-white">이용약관</h3>
              <button 
                onClick={() => setIsTermsOpen(false)} 
                className="text-zinc-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto text-zinc-300 space-y-8 leading-relaxed">
              
              <section>
                <h4 className="text-white font-bold mb-2">제1조 목적</h4>
                <p>본 약관은 피시컴데이터(이하 “회사”)이 제공하는 온라인 판매 서비스 이용과 관련하여 회사와 고객 간의 권리·의무를 정하는 것을 목적으로 합니다.</p>
              </section>

              <section>
                <h4 className="text-white font-bold mb-2">제2조 사업자 정보</h4>
                <ul className="list-disc pl-4 space-y-1 text-sm text-zinc-400">
                  <li>상호명: 피시컴데이터</li>
                  <li>대표자: 박주희</li>
                  <li>사업자등록번호: 402-43-84256</li>
                  <li>통신판매업 신고번호: 제2026-경기시흥-0065호</li>
                  <li>주소: 경기도 시흥시 장현능곡로 155, 2층 2008호(시흥 플랑드르)</li>
                  <li>이메일: ora78@naver.com</li>
                </ul>
              </section>

              <section>
                <h4 className="text-white font-bold mb-2">제3조 주문 및 결제</h4>
                <p>고객은 회사가 정한 방법에 따라 상품을 주문하고, 신용카드·계좌이체 등 제공되는 방식으로 결제할 수 있습니다.</p>
              </section>

              <section>
                <h4 className="text-white font-bold mb-2">제4조 배송</h4>
                <p>회사는 결제 완료된 주문에 대하여 신속히 배송하며, 배송 지연 시 고객에게 사전 안내합니다.</p>
              </section>

              <section>
                <h4 className="text-white font-bold mb-2">제5조 교환·환불</h4>
                <p>고객은 「전자상거래법」에 따라 상품 수령 후 7일 이내 교환 또는 환불을 요청할 수 있습니다.</p>
                <p className="mt-1 text-zinc-400 text-sm">단, 주문제작 상품이나 사용으로 가치가 훼손된 경우 환불이 제한될 수 있습니다.</p>
              </section>

              <section>
                <h4 className="text-white font-bold mb-2">제6조 개인정보 보호</h4>
                <p>회사는 고객의 개인정보를 서비스 제공 및 계약 이행에 필요한 범위에서만 수집·이용하며, 관련 법령을 준수합니다.</p>
              </section>

            </div>
            
            <div className="p-6 border-t border-white/10 bg-zinc-900 rounded-b-2xl flex justify-end shrink-0">
              <button 
                onClick={() => setIsTermsOpen(false)}
                className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsPrivacyOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-zinc-900 rounded-t-2xl shrink-0">
              <h3 className="text-xl font-bold text-white">개인정보 처리방침</h3>
              <button 
                onClick={() => setIsPrivacyOpen(false)} 
                className="text-zinc-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto text-zinc-300 space-y-8 leading-relaxed">
              <p>피시컴데이터(이하 '회사'라 함)는 고객님의 개인정보를 중요시하며, 「개인정보 보호법」 등 관련 법령을 준수하고 있습니다. 회사는 개인정보 처리방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보 보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.</p>

              <section>
                <h4 className="text-white font-bold mb-2">1. 개인정보의 수집 및 이용 목적</h4>
                <p>회사는 다음과 같은 목적을 위하여 최소한의 개인정보를 수집하고 있습니다. 수집된 정보는 정해진 목적 이외의 용도로는 이용되지 않습니다.</p>
                <ul className="list-disc pl-4 mt-2 space-y-2 text-zinc-400">
                    <li><strong>방문 수리 및 배송:</strong> 컴퓨터 수리 및 데이터 복구 요청에 따른 고객 방문, 수리 완료 후 제품의 안전한 회송 및 출고.</li>
                    <li><strong>본인 확인 및 서류 검토:</strong> 스마트폰 등 기기 복구 시 정당한 권한 확인(가입확인서, 신분증 대조 등).</li>
                    <li><strong>서비스 수행:</strong> 컴퓨터 수리 과정에서 필요한 시스템 접근(로그인 정보) 및 작업 이력 관리.</li>
                </ul>
              </section>

              <section>
                <h4 className="text-white font-bold mb-2">2. 수집하는 개인정보의 항목</h4>
                <ul className="list-disc pl-4 space-y-2 text-zinc-400">
                    <li><strong>필수 항목:</strong> 성함, 연락처, 주소.</li>
                    <li><strong>서비스별 추가 항목:</strong><br/>데이터 복구 시: 가입확인서, 신분증 사본, 기기 내 로그인 정보(ID/비밀번호).</li>
                </ul>
                <p className="mt-2 text-sm text-zinc-500">※ 신분증 수집 시 개인정보 보호를 위해 주민등록번호 뒷자리는 가리고(마스킹 처리) 수집합니다.</p>
                <p className="mt-1 text-sm text-zinc-500">위치 정보: 방문 수리 및 서비스 위치 확인을 위한 위치 데이터(고객 동의 시).</p>
              </section>

              <section>
                <h4 className="text-white font-bold mb-2">3. 개인정보의 보유 및 이용 기간</h4>
                <ul className="list-disc pl-4 space-y-2 text-zinc-400">
                    <li><strong>서비스 이용 기록 및 내역:</strong> 수리 및 복구 처리 내역 안내와 사후 관리를 위해 3년간 보관합니다.</li>
                    <li><strong>파기 원칙:</strong> 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계 법령에 따라 보존할 필요가 있는 경우 해당 기간까지 보관합니다.</li>
                </ul>
              </section>

              <section>
                <h4 className="text-white font-bold mb-2">4. 개인정보의 공개 범위 및 제3자 제공</h4>
                <p>회사는 고객의 개인정보를 원칙적으로 외부에 공개하지 않습니다.</p>
                <p className="mt-2">단, 제품을 안전하게 배송하기 위한 목적으로만 최소한의 정보(성함, 주소, 연락처)가 배송 업체에 제공됩니다.</p>
                <ul className="list-disc pl-4 mt-2 space-y-1 text-zinc-400">
                    <li>현재 이용 배송 업체: CJ대한통운</li>
                </ul>
                <p className="mt-2 text-sm text-zinc-500">배송 업체는 향후 변경될 수 있으며, 업체 변경 시 본 개인정보 처리방침을 통해 즉시 수정 고지하겠습니다.</p>
              </section>

              <section>
                <h4 className="text-white font-bold mb-2">5. 이용자의 권리와 행사 방법 (열람 및 수정)</h4>
                 <ul className="list-disc pl-4 space-y-2 text-zinc-400">
                    <li>고객님은 언제든지 등록되어 있는 본인의 개인정보를 열람하거나 수정하실 수 있습니다.</li>
                    <li>수리 및 복구 목적의 처리 내역에 대해 안내를 요청할 권리가 있으며, 회사는 이에 응할 의무가 있습니다.</li>
                    <li><strong>잊혀질 권리:</strong> 앱 삭제 시 기기에 저장된 모든 관련 자료는 초기화되며, 이를 통해 사용자의 개인정보를 안전하게 삭제 처리합니다.</li>
                </ul>
              </section>

              <section>
                <h4 className="text-white font-bold mb-2">6. 기기 내 개인정보 저장 및 보안 조치</h4>
                <ul className="list-disc pl-4 space-y-2 text-zinc-400">
                    <li><strong>암호화 저장:</strong> 고객 정보나 백업 데이터를 회사 시스템에 저장할 경우, 외부 유출이 불가능하도록 최신 보안 기술을 적용하여 암호화 처리합니다.</li>
                    <li><strong>최소 저장:</strong> 서비스 수행에 필요한 최소한의 정보만 저장하며 불필요한 정보는 수집하지 않습니다.</li>
                </ul>
              </section>

              <section>
                <h4 className="text-white font-bold mb-2">7. 앱 이용자 보호 및 접근 권한</h4>
                 <ul className="list-disc pl-4 space-y-2 text-zinc-400">
                    <li><strong>사용자 변경 시 정보 보호:</strong> 기기 사용자 변경 시 이전 사용자의 캐시 데이터가 노출되지 않도록 안전하게 삭제하며, 시스템 초기화 작업을 수행합니다.</li>
                    <li><strong>접근 권한 동의:</strong> 앱 이용 중 카메라, 마이크, 연락처 등 기기의 중요 기능에 접근이 필요한 경우, 반드시 사전에 필요성을 설명하고 별도의 동의를 얻습니다.</li>
                </ul>
              </section>

              <section>
                <h4 className="text-white font-bold mb-2">8. 데이터 복구 및 수리 시 의무 사항</h4>
                 <ul className="list-disc pl-4 space-y-2 text-zinc-400">
                    <li>스마트폰 복원 등 민감한 작업 시 본인 확인을 위한 서류(가입확인서, 신분증 등)를 요청할 수 있으며, 이때 신분증의 주민등록번호 뒷자리는 수집 대상에서 제외합니다.</li>
                    <li>컴퓨터 수리에 필요한 로그인 정보 수집 시, 고객에게 해당 목적을 명확히 알리고 허용된 범위 내에서만 작업을 진행합니다.</li>
                </ul>
              </section>

              <section>
                <h4 className="text-white font-bold mb-2">9. 개인정보 보호책임자</h4>
                <p className="mb-2">고객의 개인정보를 보호하고 관련 불만을 처리하기 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
                <ul className="list-disc pl-4 space-y-1 text-zinc-400">
                    <li>성명: 박진우</li>
                    <li>소속: 피시컴데이터</li>
                    <li>연락처: 010-5317-8264</li>
                </ul>
              </section>

            </div>
            
            <div className="p-6 border-t border-white/10 bg-zinc-900 rounded-b-2xl flex justify-end shrink-0">
              <button 
                onClick={() => setIsPrivacyOpen(false)}
                className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;