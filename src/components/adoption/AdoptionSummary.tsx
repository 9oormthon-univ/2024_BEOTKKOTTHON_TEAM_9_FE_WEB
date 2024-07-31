import React from "react";
import { AdoptionSummaryResponse } from "@/interfaces/adoption/types";

const AdoptionSummary: React.FC<{
	summaryData: AdoptionSummaryResponse | null;
}> = ({ summaryData }) => {
	console.log("AdoptionSummary received data:", summaryData);

	if (!summaryData || !summaryData.result) {
		return <div>Loading summary data...</div>;
	}

	const {
		totalDogsCount,
		todayAdoptionRequests,
		completedAdoptions,
		pendingAdoptions,
	} = summaryData.result;

	return (
		<div className="w-full px-4 md:px-0 mb-14">
			<div className="flex flex-col md:flex-row justify-between items-center py-6 md:py-10">
				<h1 className="text-xl md:text-2xl md:mt-0 mt-10 font-semibold mb-4 md:mb-0">
					입양현황
				</h1>
				<div className="bg-[#F9F7FF] rounded-full flex items-center p-2 w-full md:w-auto">
					<input
						type="text"
						placeholder="리스트 검색"
						className="border-none bg-transparent outline-none w-full"
					/>
					<img src="/search.svg" alt="Search" className="ml-2" />
				</div>
			</div>
			<div
				className="rounded-lg p-4 md:p-6"
				style={{ border: "1px solid #E9E9E9" }}
			>
				<div className="bg-mono_black text-black rounded-lg flex flex-wrap justify-around items-center mx-auto">
					{[
						{ label: "전체 강아지 수", value: totalDogsCount },
						{
							label: "오늘의 입양 신청",
							value: todayAdoptionRequests,
						},
						{ label: "입양 완료", value: completedAdoptions },
						{ label: "입양 대기", value: pendingAdoptions },
					].map((item, index) => (
						<div
							key={index}
							className="flex flex-col items-center w-1/2 md:w-1/4 mb-4 md:mb-0"
						>
							<div className="font-medium text-lg md:text-2xl mb-2 text-center">
								{item.label}
							</div>
							<div className="text-2xl md:text-3xl font-semibold text-[#8A50FF] underline">
								{item.value}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AdoptionSummary;
