import axios from "axios";
import {
	ApplicantDetailResponse,
	ChatHistoryResponse,
} from "../../interfaces/adoption/applicantDetail";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchApplicantDetail = async (
	dogId: string,
	userId: string
): Promise<ApplicantDetailResponse> => {
	try {
		const response = await axios.get(
			`${API_URL}/api/v1/shelter/1/applicants/1`
		);
		return response.data;
	} catch (error) {
		console.error("Error fetching applicant detail:", error);
		throw error;
	}
};

export const fetchChatHistory = async (
	postId: string,
	adoptId: string
): Promise<ChatHistoryResponse> => {
	try {
		const response = await axios.get<ChatHistoryResponse>(
			`${API_URL}/api/v1/shelter/${postId}/applicants/${adoptId}/chat-history`
		);
		return response.data;
	} catch (error) {
		console.error("Error fetching chat history:", error);
		throw error;
	}
};
