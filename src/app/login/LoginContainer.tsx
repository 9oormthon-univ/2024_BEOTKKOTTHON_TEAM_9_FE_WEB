"use client";

import React from "react";
import LoginPresenter from "./LoginPresenter";
import { useAuth } from "../../hooks/useAuth";

const LoginContainer = () => {
	const { email, setEmail, password, setPassword, error, handleLogin } =
		useAuth();
	const handleSubmit = async (e: React.FormEvent) => {
		await handleLogin(e);
	};

	return (
		<LoginPresenter
			email={email}
			setEmail={setEmail}
			password={password}
			setPassword={setPassword}
			error={error}
			handleLogin={handleSubmit}
		/>
	);
};

export default LoginContainer;
