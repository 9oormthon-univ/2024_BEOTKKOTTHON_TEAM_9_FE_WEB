import axios from "axios";
import { OrganizationInfoResponse } from "../../interfaces/organizationinfo/organizationinfo";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const fetchOrganizationInfo = async (
	shelterId: number
): Promise<OrganizationInfoResponse> => {
	let accessToken = "";
	if (typeof window !== "undefined") {
		accessToken = localStorage.getItem("accessToken") ?? "";
	}

	try {
		const response = await axios.get<OrganizationInfoResponse>(
			`${API_URL}/api/v1/shelter/info/${shelterId}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
		return response.data;
	} catch (error) {
		console.error("Failed to fetch organization info:", error);
		throw error;
	}
};

export const updateOrganizationInfo = async (
	shelterId: number,
	phone: string,
	managerName: string,
	subEmail: string
) => {
	let accessToken = "";
	if (typeof window !== "undefined") {
		accessToken = localStorage.getItem("accessToken") ?? "";
	}
	const response = await axios.put(
		`${API_URL}/api/v1/shelter/info`,
		{
			shelterId,
			phone,
			managerName,
			subEmail,
		},
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}
	);
	return response.data;
};
