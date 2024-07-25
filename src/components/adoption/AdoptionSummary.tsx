import React from 'react';

const AdoptionSummary: React.FC<{ total: number; today: number; completion: number; waiting: number }> = ({
  total,
  today,
  completion,
  waiting
}) => {
  return (
    <>
      <div className="flex justify-between items-left py-10">
        <h1 className="text-2xl font-semibold">보호견 리스트</h1>
        <div className="bg-[#F9F7FF] rounded-full flex items-left p-2" style={{ borderRadius: '21.5px' }}>
        </div>
      </div>
      <div className="bg-mono_black text-black p-6 rounded-lg flex justify-around items-center mx-auto" style={{ 
        width: '80%', 
        paddingLeft: '2%', 
        paddingRight: '2%', 
        borderColor: '#E9E9E9', 
        borderWidth: '1px', 
        borderStyle: 'solid'
      }}>
        <div className="flex flex-col items-center">
          <div className="font-medium text-2xl mb-2">전체 강아지 수</div>
          <div className="text-3xl font-semibold text-[#8A50FF] underline" style={{ textDecorationColor: '#8A50FF' }}>{total}</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-medium text-2xl mb-2">오늘의 입양 신청</div>
          <div className="text-3xl font-semibold text-[#8A50FF] underline" style={{ textDecorationColor: '#8A50FF' }}>{today}</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-medium text-2xl mb-2">입양 완료</div>
          <div className="text-3xl font-semibold text-[#8A50FF] underline" style={{ textDecorationColor: '#8A50FF' }}>{completion}</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-medium text-2xl mb-2">입양 대기</div>
          <div className="text-3xl font-semibold text-[#8A50FF] underline" style={{ textDecorationColor: '#8A50FF' }}>{waiting}</div>
        </div>
      </div>
    </>
  );
};

export default AdoptionSummary;
