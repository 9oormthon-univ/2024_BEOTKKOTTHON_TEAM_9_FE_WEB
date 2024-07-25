// components/AdoptionStatus.tsx
import React from 'react';
import AdoptionSummary from './AdoptionSummary';
import AdoptionTable from './AdoptionTable';
import { adoptions, adoptionSummaryData } from '../../constants/adoption/protective_dog';

const AdoptionStatus: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <AdoptionSummary {...adoptionSummaryData} />
      <AdoptionTable adoptions={adoptions} />
    </div>
  );
};

export default AdoptionStatus;