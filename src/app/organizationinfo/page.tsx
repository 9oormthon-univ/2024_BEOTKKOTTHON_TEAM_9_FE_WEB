"use client";
import React, { useState } from "react";

const OrganizationInfoPage = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [formData, setFormData] = useState({
		담당자: "정민지",
		이메일: "example@naver.com",
		비밀번호: "12345",
		보조이메일: "sub-example@naver.com",
		기관번호: "02-1234-5678",
	});

	const handleEdit = () => {
		if (isEditing) {
			console.log("수정 완료:", formData);
		}
		setIsEditing(!isEditing);
	};

	const handleChange = (key, value) => {
		setFormData({ ...formData, [key]: value });
	};

	return (
		<div className="container mx-auto px-4 py-8 max-w-[670px]">
			<h1 className="text-[45px] font-extrabold text-[#8A50FF] text-center mb-10 mt-10">
				반갑습니다 <br />
				0000 보호소 관리자님!
			</h1>

			<div className="bg-[#FCFBFF] rounded-lg overflow-hidden relative">
				<h2
					className="text-xl font-bold p-4 bg-[#FFFFFF]"
					style={{ borderBottom: "1px solid #CACACA" }}
				>
					계정 정보
				</h2>

				<table className="w-full">
					<tbody>
						{Object.entries(formData).map(([key, value], index) => (
							<tr
								key={key}
								className={
									index % 2 === 0
										? "bg-[#FCFBFF]"
										: "bg-[#FFFFFF]"
								}
								style={{ borderBottom: "1px solid #CACACA" }}
							>
								<td className="py-3 px-4">{key}</td>
								<td className="py-3 px-4 text-right flex justify-between items-center">
									{isEditing ? (
										<input
											type={
												key === "비밀번호"
													? "password"
													: "text"
											}
											value={value}
											onChange={(e) =>
												handleChange(
													key,
													e.target.value
												)
											}
											className="text-[#8994A7] bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#8A50FF]"
										/>
									) : (
										<span className="text-[#8994A7]">
											{key === "비밀번호"
												? showPassword
													? value
													: "•••••"
												: value}
										</span>
									)}
									{key === "비밀번호" && !isEditing && (
										<button
											onClick={() =>
												setShowPassword(!showPassword)
											}
											className="bg-[#F0E7FF] text-[#8A50FF] px-3 py-1 rounded-full text-sm hover:bg-[#E0D0FF] transition duration-300"
										>
											{showPassword ? "숨기기" : "보기"}
										</button>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="mt-8">
				<h3 className="text-lg font-semibold mb-2">
					유기견 보호기관 인증서류
				</h3>
				<div
					className="bg-[#FCFBFF] p-4 rounded flex items-center justify-between"
					style={{ border: "1px solid #F0F0F0" }}
				>
					<span>OO보호소 서류.pdf</span>
					<button className="text-[#8A50FF] hover:underline">
						다운로드
					</button>
				</div>
				<div className="mt-4 flex justify-end">
					<button
						onClick={handleEdit}
						className="bg-[#8A50FF] text-white py-2 px-6 rounded-[3px] hover:bg-[#7340DB] transition duration-300"
					>
						{isEditing ? "완료하기" : "수정하기"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default OrganizationInfoPage;
