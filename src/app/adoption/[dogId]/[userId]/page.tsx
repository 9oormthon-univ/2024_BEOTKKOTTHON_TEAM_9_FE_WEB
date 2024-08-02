"use client";
import React, { useEffect, useState } from "react";
import {
	fetchApplicantDetail,
	fetchChatHistory,
} from "../../../../api/adoption/applicantDetail";
import {
	ApplicantDetailResponse,
	ChatMessage,
} from "../../../../interfaces/adoption/applicantDetail";

const customShadowStyle = {
	boxShadow: "inset 0 0 2px rgba(0, 0, 0, 0.25)",
};

const ApplicantDetailPage = ({
	params,
}: {
	params: { dogId: string; userId: string };
}) => {
	const [applicantData, setApplicantData] = useState<
		ApplicantDetailResponse["result"] | null
	>(null);
	const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	let accessToken = "";
	if (typeof window !== "undefined") {
		accessToken = localStorage.getItem("accessToken") ?? "";
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [detailData, chatData] = await Promise.all([
					fetchApplicantDetail(params.dogId, params.userId),
					fetchChatHistory(params.dogId, params.userId, accessToken),
				]);
				setApplicantData(detailData.result);
				setChatHistory(chatData);
				setIsLoading(false);
			} catch (err) {
				setError("Failed to fetch data");
				setIsLoading(false);
			}
		};

		fetchData();
	}, [params.dogId, params.userId]);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!applicantData) return <div>No data available</div>;

	return (
		<div className="mx-auto p-4 md:p-10 mt-10">
			<h1 className="text-2xl md:text-3xl font-semibold mb-8">
				입양 신청자 정보 &gt;{" "}
				<span className="text-[#5326AC]">{applicantData.name}</span>
			</h1>

			<hr className="border-t-2 border-[#D4CEE1] opacity-30 mb-6" />

			<div className="flex items-center mb-10">
				<div
					className="w-[5px] h-[28px] bg-[#6147FF] opacity-50 mr-2"
					aria-hidden="true"
				></div>
				<h2 className="text-xl font-semibold text-[#5326AC]">
					입양신청서
				</h2>
			</div>

			<div className="flex flex-col md:flex-row">
				<div className="md:w-1/2 md:pr-4">
					<div className="mb-4 flex items-center justify-between">
						<label className="block mb-2 font-semibold">
							반려동물 경험
						</label>
						<div
							className="bg-[#FCFBFF] p-1 rounded min-w-[130px] text-center"
							style={customShadowStyle}
						>
							{applicantData.application.petHistoryAnswer}
						</div>
					</div>
					<div className="mb-4 flex items-center justify-between">
						<label className="block mb-2 font-semibold text-[#7D7D7D]">
							어떤 종류의 동물?
						</label>
						<div
							className="bg-[#FCFBFF] p-1 rounded min-w-[130px] text-center"
							style={customShadowStyle}
						>
							{applicantData.application.petHistory}
						</div>
					</div>
					<div className="mb-4 flex items-center justify-between">
						<label className="block mb-2 font-semibold">
							현재 키우고 있는 동물의 유무
						</label>
						<div
							className="bg-[#FCFBFF] p-1 rounded min-w-[130px] text-center"
							style={customShadowStyle}
						>
							{applicantData.application.currentPetAnswer}
						</div>
					</div>
					<div className="bg-[#FCFBFF] p-2 rounded shadow-inner h-48 overflow-auto">
						{applicantData.application.currentPet}
					</div>
					<div className="mb-4 flex items-center justify-between mt-4">
						<label className="block mb-2 font-semibold">
							함께 사는 가족 구성원
						</label>
						<div
							className="bg-[#FCFBFF] p-1 rounded min-w-[130px] text-center"
							style={customShadowStyle}
						>
							{applicantData.application.familyAnswer}
						</div>
					</div>
					<div className="mb-4 flex items-center justify-between">
						<label className="block mb-2 font-semibold text-[#7D7D7D]">
							찬성여부
						</label>
						<div
							className="bg-[#FCFBFF] p-1 rounded min-w-[130px] text-center"
							style={customShadowStyle}
						>
							{applicantData.application.familyAgreement}
						</div>
					</div>
					<div className="mb-4 flex items-center justify-between">
						<label className="block mb-2 font-semibold">
							입양 후 소식 전달 가능 여부
						</label>
						<div
							className="bg-[#FCFBFF] p-1 rounded min-w-[130px] text-center"
							style={customShadowStyle}
						>
							{applicantData.application.dogNewsAnswer}
						</div>
					</div>
				</div>

				<div className="md:w-1/2 md:pl-4">
					<div>
						<label className="block mb-2 font-semibold">
							입양사유
						</label>
						<div className="bg-[#FCFBFF] p-2 rounded shadow-inner h-48 overflow-auto">
							{applicantData.application.reasonForAdoption}
						</div>
					</div>
				</div>
			</div>

			<hr className="border-t-2 border-[#D4CEE1] opacity-30 mb-6 mt-10" />
			<div className="flex items-center mb-4">
				<div
					className="w-[5px] h-[28px] bg-[#6147FF] opacity-50 mr-2"
					aria-hidden="true"
				></div>
				<h2 className="text-xl font-semibold text-[#5326AC]">
					대화 내역
				</h2>
			</div>
			<div className="bg-[#F0F2F5] p-4 rounded shadow-inner h-96 overflow-auto">
				{Array.isArray(chatHistory) &&
					chatHistory.map((message, index) => (
						<div key={index} className="mb-4">
							<div className="flex justify-end mb-2">
								<div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-[70%]">
									{message.input}
								</div>
							</div>
							<div className="flex justify-start">
								<div className="bg-white rounded-lg py-2 px-4 max-w-[70%] shadow">
									<p className="text-gray-700">
										{message.response}
									</p>
									<p className="text-xs text-gray-500 mt-1">
										강아지
									</p>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default ApplicantDetailPage;
