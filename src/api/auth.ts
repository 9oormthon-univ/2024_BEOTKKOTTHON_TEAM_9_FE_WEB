import axios from "axios";

const API_URL = `/api`;

const api = axios.create({
	baseURL: API_URL, // Check if this URL correctly points to your backend
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true, // Ensure this is supported and correctly configured on the server
});

export const login = async (email: string, password: string) => {
	try {
		const response = await api.post("/v1/shelter/login", {
			email,
			password,
		});
		// Handle successful login
		console.log("Login successful", response.data);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error("Login error:", error.message);
			if (error.response) {
				// Log detailed response error
				console.error("Error details:", {
					data: error.response.data,
					status: error.response.status,
					headers: error.response.headers,
				});
				// Throw error with detailed message if available
				throw new Error(
					error.response.data || "Unknown error during login."
				);
			}
		}
		throw error; // Re-throw the error if it's not an AxiosError
	}
};
export interface ShelterSignUpData {
	email: string;
	password: string;
	name: string;
	phone: string;
	managerName: string;
	subEmail: string;
	address: string;
	latitude: string;
	longitude: string;
	[key: string]: any; // Add index signature
}
interface SignUpResponse {
	code: string;
	message: string;
	result: any;
}

export interface ShelterSignUpData {
	email: string;
	password: string;
	name: string;
	phone: string;
	managerName: string;
	subEmail: string;
	address: string;
	latitude: string;
	longitude: string;
	uploadFile: File;
}

export const signUp = async (
	userData: ShelterSignUpData
): Promise<SignUpResponse> => {
	try {
		console.log("Sending signup data:", userData);

		const formData = new FormData();

		// 모든 필드를 FormData에 추가
		Object.keys(userData).forEach((key) => {
			if (key === "latitude" || key === "longitude") {
				// 숫자 값을 문자열로 변환
				formData.append(key, userData[key].toString());
			} else if (key === "uploadFile") {
				// 파일 추가
				formData.append(key, userData[key], userData[key].name);
			} else {
				formData.append(key, userData[key]);
			}
		});

		const response = await api.post<SignUpResponse>(
			"/v1/shelter/signup",
			formData,
			{
				headers: {
					"Content-Type": "multipart/form-data",
				},
			}
		);

		return response.data;
	} catch (error) {
		console.error("API error:", error);
		throw error;
	}
};
