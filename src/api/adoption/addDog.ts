import axios from "axios";
import {
	AddDogRequest,
	AddDogResponse,
} from "../../interfaces/adoption/addDog";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const addDog = async (data: AddDogRequest): Promise<AddDogResponse> => {
	const formData = new FormData();
	formData.append("shelterId", data.shelterId.toString());
	formData.append("bomInfo.name", data.bomInfo.name);
	formData.append("bomInfo.age", data.bomInfo.age);
	formData.append("bomInfo.gender", data.bomInfo.gender);
	formData.append("bomInfo.breed", data.bomInfo.breed);
	formData.append("bomInfo.personality", data.bomInfo.personality);
	formData.append("bomInfo.extra", data.bomInfo.extra);
	formData.append("bomInfo.likes", data.bomInfo.likes);
	formData.append("bomInfo.hates", data.bomInfo.hates);
	formData.append("bomInfo.findingLocation", data.bomInfo.findingLocation);

	if (data.uploadFile) {
		formData.append("uploadFile", data.uploadFile);
	}

	try {
		const accessToken = localStorage.getItem("accessToken");
		console.log("accessToken", accessToken);
		if (!accessToken) {
			throw new Error("Access token not found");
		}

		console.log("formData", formData);
		console.log("data", data);
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
		return response.data;
	} catch (error) {
		throw error;
	}
};
