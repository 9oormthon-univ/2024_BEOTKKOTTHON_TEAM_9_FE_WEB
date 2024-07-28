"use client";
import React from "react";

const customShadowStyle = {
	boxShadow: "inset 0 0 2px rgba(0, 0, 0, 0.25)",
};

const ApplicantDetailPage = ({
	params,
}: {
	params: { dogId: string; userId: string };
}) => {
	// 여기에서 실제 데이터를 가져오는 로직을 구현할 수 있습니다.
	const applicantData = {
		name: "정민지",
		petExperience: "네",
		petType: "강아지",
		currentPet: "네",
		adoptionReason: "가족의 새 구성원으로 맞이하고 싶습니다.",
	};

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
							{applicantData.petExperience}
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
							{applicantData.petType}
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
							{applicantData.currentPet}
						</div>
					</div>
					<div className="bg-[#FCFBFF] p-2 rounded shadow-inner h-48">
						{applicantData.adoptionReason}
					</div>
					<div className="mb-4 flex items-center justify-between mt-4">
						<label className="block mb-2 font-semibold">
							함께 사는 가족 구성원
						</label>
						<div
							className="bg-[#FCFBFF] p-1 rounded min-w-[130px] text-center"
							style={customShadowStyle}
						>
							{applicantData.petExperience}
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
							{applicantData.petExperience}
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
							{applicantData.petExperience}
						</div>
					</div>
				</div>

				<div className="md:w-1/2 md:pl-4">
					<div>
						<label className="block mb-2 font-semibold">
							입양사유
						</label>
						<div className="bg-[#FCFBFF] p-2 rounded shadow-inner h-48">
							{applicantData.adoptionReason}
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
			<div className="bg-[#FCFBFF] p-2 rounded shadow-inner h-48">
				{applicantData.adoptionReason}
			</div>
		</div>
	);
};

export default ApplicantDetailPage;
