import axios from "axios";

const API_URL = `/api`;

interface LoginResponse {
	code: string;
	message: string;
	result?: {
		accessToken: string;
		refreshToken: string;
		name: string;
		email: string;
		memberId: number;
		memberType: string;
	};
}

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

export const signUp = async (userData: any) => {
	try {
		const response = await api.post("/v1/shelter/signup", userData);
		console.log("API response:", response.data);
		return response.data;
	} catch (error) {
		console.error(
			"API error:",
			(error as any).response?.data || (error as any).response?.message
		);
		throw error;
	}
};

export const checkTokenValidity = async () => {
	try {
		const response = await api.get("/v1/shelter/check-token");
		return response.data;
	} catch (error) {
		console.error(
			"Token check error:",
			(error as any).response?.data || (error as any).response?.message
		);
		localStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");
		throw error;
	}
};

export const getUserInfo = () => {
	const accessToken = localStorage.getItem("accessToken");
	if (!accessToken) return null;
	try {
		const tokenParts = accessToken.split(".");
		if (tokenParts.length !== 3) return null;
		const payload = JSON.parse(atob(tokenParts[1]));
		return {
			email: payload.username,
			role: payload.role,
		};
	} catch (error) {
		console.error("Error parsing token:", error);
		return null;
	}
};
