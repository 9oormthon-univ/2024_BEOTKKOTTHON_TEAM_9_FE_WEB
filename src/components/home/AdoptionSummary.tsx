// components/AdoptionSummary.tsx
import React from 'react';

const AdoptionSummary: React.FC<{ total: number; today: number; waiting: number }> = ({ total, today, waiting }) => {
    return (
      <div className="bg-mono_black text-white p-4 rounded-md">
        <div>총 입양지 수: {total}</div>
        <div>오늘의 입양 상황: {today}</div>
        <div>입양 대기: {waiting}</div>
      </div>
    );
  };
  
  export default AdoptionSummary;