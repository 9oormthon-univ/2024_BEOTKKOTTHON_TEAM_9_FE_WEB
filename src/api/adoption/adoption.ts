import axios from "axios";
import {
	AdoptionItem,
	AdoptionSummaryResponse,
} from "@/interfaces/adoption/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const memberId = localStorage.getItem("memberId");
export const getAdoptionSummary =
	async (): Promise<AdoptionSummaryResponse> => {
		try {
			const response = await axios.get(
				`${API_URL}/api/v1/shelter/17/adoptions`
			);
			return response.data;
		} catch (error) {
			console.error("Failed to fetch adoption summary:", error);
			throw error;
		}
	};

export const getAdoptions = async (): Promise<AdoptionItem[]> => {
	try {
		const response = await axios.get(
			`${API_URL}/api/v1/shelter/${memberId}/bom-lists`
		);
		return response.data;
	} catch (error) {
		console.error("Failed to fetch adoptions:", error);
		throw error;
	}
};
