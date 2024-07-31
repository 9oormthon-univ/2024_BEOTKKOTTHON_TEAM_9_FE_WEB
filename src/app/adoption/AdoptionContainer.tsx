"use client";
import React, { useState, useEffect } from "react";
import AdoptionPresenter from "./AdoptionPresenter";
import { getAdoptionSummary, getAdoptions } from "@/api/adoption/adoption";
import {
	AdoptionSummaryResponse,
	AdoptionResponse,
	AdoptionItem,
} from "@/interfaces/adoption/types";

const AdoptionContainer = () => {
	const [summaryData, setSummaryData] =
		useState<AdoptionSummaryResponse | null>(null);
	const [adoptions, setAdoptions] = useState<AdoptionItem[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const [summary, adoptionsData] = await Promise.all([
					getAdoptionSummary(),
					getAdoptions(),
				]);
				console.log("Summary data:", summary);
				console.log("Adoptions data:", adoptionsData);
				setSummaryData(summary);
				if (
					adoptionsData &&
					adoptionsData.result &&
					Array.isArray(adoptionsData.result)
				) {
					setAdoptions(adoptionsData.result);
				} else {
					console.error(
						"Unexpected adoptions data structure:",
						adoptionsData
					);
					setAdoptions([]);
				}
			} catch (err) {
				console.error("Error fetching data:", err);
				setError(
					err instanceof Error ? err.message : "An error occurred"
				);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<AdoptionPresenter summaryData={summaryData} adoptions={adoptions} />
	);
};

export default AdoptionContainer;
