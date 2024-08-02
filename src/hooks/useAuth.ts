"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../api/auth";

export const useAuth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const router = useRouter();

	const handleLogin = async (e: React.FormEvent): Promise<void> => {
		e.preventDefault();
		setError("");

		try {
			const data = await login(email, password);
			// 로그인 성공 처리 (예: 토큰 저장)
			localStorage.setItem("accessToken", data.result.accessToken);
			localStorage.setItem("memberId", data.result.memberId);
			localStorage.setItem("email", data.result.email);
			localStorage.setItem("shelterName", data.result.name);
			console.log("로그인 성공:", localStorage.getItem("accessToken"));
			router.push("/adoption");
		} catch (err) {
			setError(
				"로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요."
			);
		}
	};

	return { email, setEmail, password, setPassword, error, handleLogin };
};
