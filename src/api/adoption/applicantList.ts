import { ApiResponse, Applicant } from "@/interfaces/adoption/applicantList";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getApplicantList(dogId: number): Promise<Applicant[]> {
	try {
		const response = await fetch(`${API_URL}/dogs/${dogId}/applicants`);
		if (!response.ok) {
			throw new Error("Failed to fetch applicant list");
		}
		const text = await response.text();

		// 마지막 쉼표 제거
		const cleanedText = text.replace(/,\s*}/g, "}").replace(/,\s*\]/g, "]");

		const data: ApiResponse = JSON.parse(cleanedText);
		return data.result;
	} catch (error) {
		console.error("Error fetching applicant list:", error);
		return []; // 오류 발생 시 빈 배열 반환
	}
}
