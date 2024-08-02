import { ApiResponse, Applicant } from "@/interfaces/adoption/applicantList";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getApplicantList(
	dogId: number,
	token: string
): Promise<Applicant[]> {
	try {
		const response = await fetch(
			`${API_URL}/api/v1/shelter/${dogId}/applicants`,
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
			}
		);

		if (!response.ok) {
			throw new Error(
				`Failed to fetch applicant list: ${response.status}`
			);
		}

		const data: ApiResponse = await response.json();

		if (data.code !== "0000") {
			throw new Error(`API Error: ${data.code}`);
		}

		return data.result;
	} catch (error) {
		console.error("Error fetching applicant list:", error);
		return []; // 오류 발생 시 빈 배열 반환
	}
}
