import axios from "axios";
import {
	AddDogRequest,
	AddDogResponse,
} from "../../interfaces/adoption/addDog";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const formatDate = (date: Date): string => {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
};

export const addDog = async (data: AddDogRequest): Promise<AddDogResponse> => {
	const hashtagsString = data.bomInfo.hashtags.join(",");
	const formData = new FormData();
	formData.append("shelterId", data.shelterId.toString());
	formData.append(
		"expectedEuthanasiaDate",
		formatDate(data.expectedEuthanasiaDate)
	);
	formData.append("bomInfo.name", data.bomInfo.name);
	formData.append("bomInfo.age", data.bomInfo.age);
	formData.append("bomInfo.gender", data.bomInfo.gender);
	formData.append("bomInfo.breed", data.bomInfo.breed);
	formData.append("bomInfo.personality", data.bomInfo.personality);
	formData.append("bomInfo.extra", data.bomInfo.extra);
	formData.append("bomInfo.likes", data.bomInfo.likes);
	formData.append("bomInfo.hates", data.bomInfo.hates);
	formData.append("bomInfo.hashtags", hashtagsString);

	if (data.uploadFile) {
		formData.append("uploadFile", data.uploadFile);
	}

	try {
		let accessToken = "";

		if (typeof window !== "undefined") {
			accessToken = localStorage.getItem("accessToken") || "";
		}
		console.log("accessToken", accessToken);
		if (!accessToken) {
			throw new Error("Access token not found");
		}

		console.log("Request URL:", `${API_URL}/api/v1/post`);
		console.log("Request Method:", "POST");
		console.log("Request Headers:", {
			"Content-Type": "multipart/form-data",
			Authorization: `Bearer ${accessToken}`,
		});
		console.log("Request Data:");

		const response = await axios.post<AddDogResponse>(
			`${API_URL}/api/v1/post`,
			formData,
			{
				headers: {
					"Content-Type": "multipart/form-data",
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);

		console.log("Response Status:", response.status);
		console.log("Response Data:", response.data);
		return response.data;
	} catch (error) {
		throw error;
	}
};
