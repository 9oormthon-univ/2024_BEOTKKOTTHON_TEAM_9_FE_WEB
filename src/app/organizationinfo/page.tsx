"use client";
import React, { useState, useEffect } from "react";
import { fetchOrganizationInfo } from "../../api/organizationinfo/organizationinfo";
import { OrganizationInfoResponse } from "../../interfaces/organizationinfo/organizationinfo";

const OrganizationInfoPage = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [formData, setFormData] = useState({
		담당자: "",
		이메일: "",
		보조이메일: "",
		기관번호: "",
		기관명: "",
		주소: "",
	});
	const [docInfo, setDocInfo] = useState({ name: "", url: "" });

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetchOrganizationInfo(36); // shelterId를 36으로 고정
				const { result } = response;
				setFormData({
					담당자: result.managerName,
					이메일: result.email,
					보조이메일: result.subEmail,
					기관번호: result.phone,
					기관명: result.name,
					주소: result.address,
				});
				setDocInfo({ name: result.docName, url: result.docUrl });
			} catch (error) {
				console.error("Failed to fetch organization info:", error);
			}
		};
		fetchData();
	}, []);

	const handleEdit = () => {
		if (isEditing) {
			console.log("수정 완료:", formData);
			// 여기에 수정된 데이터를 서버로 보내는 로직을 추가할 수 있습니다.
		}
		setIsEditing(!isEditing);
	};

	const handleChange = (key: string, value: string) => {
		setFormData({ ...formData, [key]: value });
	};

	return (
		<div className="container mx-auto px-4 py-8 max-w-[670px]">
			<h1 className="text-3xl md:text-4xl lg:text-[45px] font-extrabold text-[#8A50FF] text-center mb-6 md:mb-8 lg:mb-10 mt-6 md:mt-8 lg:mt-10">
				<span className="block mb-2 md:mb-3">반갑습니다</span>
				<span className="block">{formData.기관명} 관리자님!</span>
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
											type="text"
											value={value}
											onChange={(e) =>
												handleChange(
													key,
													e.target.value
												)
											}
											className="text-[#8994A7] bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#8A50FF] w-full text-right"
										/>
									) : (
										<span className="text-[#8994A7]">
											{value}
										</span>
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
					<span>{docInfo.name}</span>
					<a
						href={docInfo.url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-[#8A50FF] hover:underline"
					>
						다운로드
					</a>
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
