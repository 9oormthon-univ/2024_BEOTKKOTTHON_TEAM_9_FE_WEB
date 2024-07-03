import React from "react";
import AdoptionStatus from "../../components/home/AdoptionStatus";

const HomePage = () => {
  return (
    <div className="w-full">
      <div className="text-center text-2xl font-bold p-5">유기견 입양을 관리하는 새로운 관리 툴</div>
      <AdoptionStatus />
    </div>
  );
};

export default HomePage;