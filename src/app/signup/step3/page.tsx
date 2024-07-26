"use client";
import React, { useState } from "react";
import ProgressIndicator from "@/components/signup/ProgressIndicator";
import Banner from "@/components/signup/Banner";
import NavigationButtons from "@/components/signup/NavigationButtons";
import AddressInput from "@/components/signup/AddressInput";

const SignupStep3Page = () => {
	const [formData, setFormData] = useState<{
		email: string;
		organizationName: string;
		managerName: string;
		password: string;
		confirmPassword: string;
		secondaryEmail: string;
		certFile: File | null;
		phoneNumber: string;
		location: string;
	}>({
		email: "",
		organizationName: "",
		managerName: "",
		password: "",
		confirmPassword: "",
		secondaryEmail: "",
		certFile: null,
		phoneNumber: "",
		location: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFormData((prev) => ({ ...prev, certFile: e.target.files![0] }));
		}
	};

	const handleAddressChange = (address: string) => {
		setFormData((prev) => ({ ...prev, location: address }));
	};

	const requiredFields = [
		"organizationName",
		"managerName",
		"password",
		"confirmPassword",
		"secondaryEmail",
		"phoneNumber",
		"location",
	];

	return (
		<div className="flex flex-col items-center min-h-screen bg-white">
			<Banner />
			<ProgressIndicator step={3} />

			<div className="w-full px-4 sm:px-8 lg:px-[240px] mt-9">
				<div className="w-full bg-white p-6 lg:p-8 border-solid border-[#C7C7C7] rounded-sm">
					<h2 className="text-center text-2xl font-bold mb-3.5">
						기관정보 입력
					</h2>
					<p className="text-center text-sm text-gray-500 mb-6">
						사용하실 기관 공식 이메일과 함께 담당자의 정보를
						입력해주세요
					</p>

					<form className="space-y-4">
						{[
							{ name: "email", label: "이메일", type: "email" },
							{
								name: "organizationName",
								label: "기관 이름",
								type: "text",
							},
							{
								name: "managerName",
								label: "담당자 이름",
								type: "text",
							},
							{
								name: "password",
								label: "비밀번호",
								type: "password",
							},
							{
								name: "confirmPassword",
								label: "비밀번호 확인",
								type: "password",
							},
							{
								name: "secondaryEmail",
								label: "보조 이메일 주소",
								type: "email",
							},
							{
								name: "phoneNumber",
								label: "기관 전화번호",
								type: "tel",
							},
						].map((field) => (
							<div key={field.name} className="flex flex-col">
								<label
									htmlFor={field.name}
									className="mb-2 font-medium text-gray-700"
								>
									{requiredFields.includes(field.name) && (
										<span className="text-[#FF0000] mr-1">
											*
										</span>
									)}
									{field.label}
								</label>
								<input
									type={field.type}
									id={field.name}
									name={field.name}
									value={
										formData[
											field.name as keyof typeof formData
										] as string
									}
									onChange={handleInputChange}
									className="p-2 border border-gray-300 rounded-md focus:ring-[#8A50FF] focus:border-[#8A50FF]"
								/>
							</div>
						))}

						<AddressInput
							value={formData.location}
							onChange={handleAddressChange}
						/>

						<div className="flex flex-col">
							<label
								htmlFor="certFile"
								className="mb-2 font-medium text-gray-700"
							>
								<span className="text-[#FF0000] mr-1">*</span>
								유기견 보호소 증명서류
							</label>
							<div className="flex">
								<input
									type="text"
									readOnly
									value={
										formData.certFile
											? formData.certFile.name
											: "파일을 선택해주세요"
									}
									className="p-2 border border-gray-300 rounded-l-md flex-grow"
								/>
								<label
									htmlFor="certFile"
									className="p-2 bg-[#8A50FF] text-white rounded-r-md cursor-pointer"
								>
									불러오기
								</label>
								<input
									type="file"
									id="certFile"
									onChange={handleFileChange}
									className="hidden"
								/>
							</div>
						</div>
					</form>
				</div>
			</div>

			<NavigationButtons />
		</div>
	);
};

export default SignupStep3Page;
