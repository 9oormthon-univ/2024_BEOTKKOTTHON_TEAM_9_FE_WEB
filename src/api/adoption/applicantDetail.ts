import axios from "axios";
import {
	ApplicantDetailResponse,
	ChatHistoryResponse,
} from "../../interfaces/adoption/applicantDetail";
import { ChatMessage } from "../../interfaces/adoption/applicantDetail";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchApplicantDetail = async (
	dogId: string,
	userId: string
): Promise<ApplicantDetailResponse> => {
	try {
		const response = await axios.get(
			`${API_URL}/api/v1/shelter/${dogId}/applicants/${userId}`
		);
		return response.data;
	} catch (error) {
		console.error("Error fetching applicant detail:", error);
		throw error;
	}
};

export const fetchChatHistory = async (
	postId: string,
	userId: string,
	token: string
): Promise<ChatMessage[]> => {
	try {
		const response = await axios.get<ChatHistoryResponse>(
			`${API_URL}/api/v1/chat/${postId}/${userId}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
			}
		);

		if (response.data.code !== "0000") {
			throw new Error(`API Error: ${response.data.code}`);
		}

		return response.data.result;
	} catch (error) {
		console.error("Error fetching chat history:", error);
		throw error;
	}
};
