import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const login = async (email: string, password: string) => {
	try {
		const response = await axios.post(`${API_URL}/auth/login`, {
			email,
			password,
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const signUp = async (userData: any) => {
	try {
		console.log("Sending user data to API:", userData); // 디버깅용 로그
		const response = await axios.post(`${API_URL}/auth/signup`, userData);
		console.log("API response:", response.data); // 디버깅용 로그
		return response.data;
	} catch (error) {
		console.error("API error:", error);
		throw error;
	}
};
