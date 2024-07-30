"use client";

import React from "react";
import SignupCompletePresenter from "./SignupCompletePresenter";
import { useSignupComplete } from "@/hooks/useSignupComplete";

const SignupCompleteContainer = () => {
	const { email } = useSignupComplete();

	return <SignupCompletePresenter email={email} />;
};

export default SignupCompleteContainer;
