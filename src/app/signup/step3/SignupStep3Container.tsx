"use client";
import React from "react";
import SignupStep3Presenter from "./SignupStep3Presenter";
import { useSignupStep3 } from "@/hooks/useSignupStep3";
import { useRouter } from "next/navigation";

const SignupStep3Container = () => {
	const router = useRouter();
	const {
		formData,
		handleInputChange,
		handleFileChange,
		handleAddressChange,
		handleSubmit,
	} = useSignupStep3();

	const onSubmit = async () => {
		const success = await handleSubmit();
		if (success !== undefined && success !== null) {
			localStorage.setItem("signupEmail", formData.email);
			router.push("/signup/complete");
		}
	};

	return (
		<SignupStep3Presenter
			formData={formData}
			handleInputChange={handleInputChange}
			handleFileChange={handleFileChange}
			handleAddressChange={handleAddressChange}
			handleSubmit={onSubmit}
		/>
	);
};

export default SignupStep3Container;
