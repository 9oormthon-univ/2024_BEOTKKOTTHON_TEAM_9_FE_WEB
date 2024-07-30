"use client";
import React, { useState } from "react";
import SignupPresenter from "./SignupPresenter";
import { useSignup } from "@/hooks/useSignup";

const SignupContainer = () => {
	const { agreements, handleCheckboxChange, handleNext } = useSignup();

	return (
		<SignupPresenter
			agreements={agreements}
			handleCheckboxChange={handleCheckboxChange}
			handleNext={handleNext}
		/>
	);
};

export default SignupContainer;
