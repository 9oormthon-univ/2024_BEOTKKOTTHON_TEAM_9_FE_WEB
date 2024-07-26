import React from "react";
import AdoptionSummary from "../../components/adoption/AdoptionSummary";
import AdoptionTable from "../../components/adoption/AdoptionTable";
import {
	adoptions,
	adoptionSummaryData,
} from "@/constants/adoption/protective_dog";

const AdoptionPage = () => {
	return (
		<div className="w-full max-w-7xl mx-auto">
			<div className="flex flex-col items-center justify-center p-4 md:p-10">
				<AdoptionSummary {...adoptionSummaryData} />
				<AdoptionTable adoptions={adoptions} />
			</div>
		</div>
	);
};

export default AdoptionPage;
