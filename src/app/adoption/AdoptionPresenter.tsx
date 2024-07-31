import React from "react";
import AdoptionSummary from "@/components/adoption/AdoptionSummary";
import AdoptionTable from "@/components/adoption/AdoptionTable";
import {
	AdoptionSummaryResponse,
	AdoptionItem,
} from "@/interfaces/adoption/types";

interface AdoptionPresenterProps {
	summaryData: AdoptionSummaryResponse | null;
	adoptions: AdoptionItem[];
}

const AdoptionPresenter: React.FC<AdoptionPresenterProps> = ({
	summaryData,
	adoptions,
}) => {
	console.log("AdoptionPresenter received summaryData:", summaryData);
	console.log("AdoptionPresenter received adoptions:", adoptions);

	return (
		<div className="w-full max-w-7xl mx-auto">
			<div className="flex flex-col items-center justify-center p-4 md:p-10">
				<AdoptionSummary summaryData={summaryData} />
				<AdoptionTable adoptions={adoptions} />
			</div>
		</div>
	);
};

export default AdoptionPresenter;
