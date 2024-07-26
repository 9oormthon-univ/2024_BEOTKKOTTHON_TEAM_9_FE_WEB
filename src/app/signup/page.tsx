"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProgressIndicator from "@/components/signup/ProgressIndicator";
import Banner from "@/components/signup/Banner";
import NavigationButtons from "@/components/signup/NavigationButtons";

const SignupPage = () => {
	const [agreements, setAgreements] = useState({
		all: false,
		service: false,
		privacy: false,
		marketing: false,
	});

	const handleCheckboxChange = (name: keyof typeof agreements) => {
		if (name === "all") {
			const newValue = !agreements.all;
			setAgreements({
				all: newValue,
				service: newValue,
				privacy: newValue,
				marketing: newValue,
			});
		} else {
			setAgreements((prev) => {
				const newAgreements = { ...prev, [name]: !prev[name] };
				const allChecked = Object.values(newAgreements).every(Boolean);
				return { ...newAgreements, all: allChecked };
			});
		}
	};

	return (
		<div className="flex flex-col items-center min-h-screen bg-white">
			{/* Banner */}
			<Banner />
			{/* Progress indicator */}
			<ProgressIndicator step={1} />

			{/* Agreement box */}
			<div className="w-full px-4 sm:px-8 lg:px-[240px]">
				<div className="w-full bg-white p-6 lg:p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
					<h2 className="text-xl lg:text-2xl font-bold mb-6">
						약관 동의
					</h2>

					{/* All agreements checkbox */}
					<div className="flex items-center justify-between mb-4">
						<label className="font-semibold">전체 동의</label>
						<input
							type="checkbox"
							checked={agreements.all}
							onChange={() => handleCheckboxChange("all")}
							className="form-checkbox h-5 w-5 text-[#8A50FF] rounded border-gray-300 focus:ring-[#8A50FF]"
						/>
					</div>

					<hr className="my-4 border-gray-200" />

					{/* Individual agreements */}
					{[
						{ name: "service", label: "서비스 이용약관 동의" },
						{
							name: "privacy",
							label: "개인정보 수집 및 이용 동의",
						},
						{ name: "marketing", label: "마케팅 활용 수신 동의" },
					].map(({ name, label }) => (
						<div
							key={name}
							className="flex items-center justify-between mb-4"
						>
							<label className="text-base text-gray-700">
								{label}
							</label>
							<input
								type="checkbox"
								checked={
									agreements[name as keyof typeof agreements]
								}
								onChange={() =>
									handleCheckboxChange(
										name as keyof typeof agreements
									)
								}
								className="form-checkbox h-5 w-5 text-[#8A50FF] rounded border-gray-300 focus:ring-[#8A50FF]"
							/>
						</div>
					))}
				</div>
			</div>

			{/* Navigation buttons */}
			<NavigationButtons currentStep={1} />
		</div>
	);
};

export default SignupPage;
