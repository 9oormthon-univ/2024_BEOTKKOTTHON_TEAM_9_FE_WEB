// import React from 'react';

// const MainPage = () => {
//   return <div className="w-full">메인 페이지입니당</div>;
// };

// export default MainPage;


import React from "react";
import AdoptionStatus from "../components/home/AdoptionStatus";

const HomePage = () => {
  return (
    <div className="w-full">
      <div className="text-center text-2xl font-bold p-5">입양 현황</div>
      <AdoptionStatus />
    </div>
  );
};

export default HomePage;