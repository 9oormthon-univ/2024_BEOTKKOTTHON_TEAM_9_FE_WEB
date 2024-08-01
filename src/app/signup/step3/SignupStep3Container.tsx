"use client";
import React from "react";
import SignupStep3Presenter from "./SignupStep3Presenter";
import { useSignupStep3 } from "@/hooks/useSignupStep3";
import { useRouter } from "next/navigation";
import { ShelterSignUpData, signUp } from "@/api/auth";

const SignupStep3Container = () => {
	const router = useRouter();
	const {
		formData,
		addressData,
		handleInputChange,
		handleFileChange,
		handleAddressChange,
		setFormData,
	} = useSignupStep3();

	const handleSubmit = async () => {
		try {
			if (!addressData) {
				throw new Error("주소를 선택해주세요.");
			}

			if (!formData.password) {
				throw new Error("비밀번호를 입력해주세요.");
			}

			if (!formData.certFile) {
				throw new Error("증명서류를 업로드해주세요.");
			}

			const signUpData: ShelterSignUpData = {
				email: formData.email,
				password: formData.password,
				name: formData.organizationName,
				phone: formData.phoneNumber,
				managerName: formData.managerName,
				subEmail: formData.secondaryEmail,
				address: addressData.address,
				latitude: addressData.latitude,
				longitude: addressData.longitude,
				uploadFile: formData.certFile, // 증명서류 파일 추가
			};

			console.log("Sending signup data:", signUpData);

			const result = await signUp(signUpData);
			if (result.code === "0000" && result.message === "SUCCESS") {
				localStorage.setItem("signupEmail", formData.email);
				router.push("/signup/complete");
				return true;
			} else {
				throw new Error(result.message);
			}
		} catch (error) {
			console.error("Signup failed:", error);
			alert(
				error instanceof Error
					? error.message
					: "회원가입에 실패했습니다. 다시 시도해주세요."
			);
			return false;
		}
	};

	return (
		<SignupStep3Presenter
			formData={formData}
			handleInputChange={handleInputChange}
			handleFileChange={handleFileChange}
			handleAddressChange={handleAddressChange}
			handleSubmit={handleSubmit}
		/>
	);
};

export default SignupStep3Container;
