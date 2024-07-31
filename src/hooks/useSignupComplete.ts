"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useSignupComplete = () => {
	const [email, setEmail] = useState("");
	const router = useRouter();

	useEffect(() => {
		const signupEmail = localStorage.getItem("signupEmail");
		if (signupEmail) {
			setEmail(signupEmail);
			localStorage.removeItem("signupEmail"); // 사용 후 제거
		} else {
			// 이메일 정보가 없으면 회원가입 페이지로 리다이렉트
			//router.push("/signup");
		}
	}, [router]);

	return { email };
};
