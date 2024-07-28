"use client";
import React, { useState } from "react";
import Image from "next/image";
import { adoptions } from "@/constants/adoption/protective_dog";

const DogDetailPage = ({ params }: { params: { dogId: string } }) => {
	const dogId = parseInt(params.dogId);
	const dog = adoptions.find((adoption) => adoption.id === dogId);
	const [isEditing, setIsEditing] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	if (!dog) {
		return <div>Dog not found</div>;
	}

	// 임시 데이터 (실제로는 API에서 가져올 것입니다)
	const dogData = {
		...dog,
		image: "/images/dogImg.png",
		likes: "간식, 산책",
		dislikes: "큰 소리",
		euthanasiaDate: "2024-08-01",
		introduction: "활발하고 친근한 성격의 강아지입니다.",
		hashtags: ["#믹스견", "#중형견", "#활발함"],
	};

	const [editedDogData, setEditedDogData] = useState<{ [key: string]: any }>(
		dogData
	);

	const handleInputChange = (field: string, value: string | string[]) => {
		setEditedDogData({ ...editedDogData, [field]: value });
	};

	const handleEditComplete = () => {
		// 여기에 API 호출 등의 로직을 추가할 수 있습니다.
		setIsEditing(false);
	};

	const applicants = [
		{
			id: 1,
			name: "김철수",
			reason: "가족의 새 구성원으로 맞이하고 싶습니다.",
		},
	];

	return (
		<div className="mx-auto">
			<div className="flex flex-col items-center justify-center p-4 md:p-10">
				<div className="w-full">
					<h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 mt-10">
						{editedDogData.name}
					</h1>

					<h2 className="text-xl md:text-xl font-semibold mb-6">
						강아지 기본정보
					</h2>
					<div className="flex-1 w-full">
						<div className="flex flex-col md:flex-row mb-8 w-full">
							<div className="flex sm:flex-row">
								<Image
									src={editedDogData.image}
									alt={editedDogData.name}
									width={160}
									height={160}
									style={{ objectFit: "cover" }}
									className="mr-4"
								/>
								<table className="md:hidden border-collapse w-full md:w-1/2">
									<tbody>
										{[
											{ label: "이름", field: "name" },
											{ label: "성별", field: "gender" },
											{ label: "견종", field: "breed" },
										].map((item) => (
											<tr
												key={item.label}
												style={{
													border: "1px solid #C7C7C7",
												}}
											>
												<td
													className="py-2 px-4 font-semibold"
													style={{
														backgroundColor:
															"#A273FF",
														color: "white",
														border: "1px solid #C7C7C7",
														width: "120px",
													}}
												>
													{item.label}
												</td>
												<td
													className="py-2 px-4"
													style={{
														border: "1px solid #C7C7C7",
													}}
												>
													{isEditing ? (
														<input
															type="text"
															value={
																editedDogData[
																	item.field
																]
															}
															onChange={(e) =>
																handleInputChange(
																	item.field,
																	e.target
																		.value
																)
															}
															className="w-full p-1 border rounded"
														/>
													) : (
														editedDogData[
															item.field
														]
													)}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
							<div className="flex-1">
								<div className="flex flex-col md:flex-row w-full">
									<table className="border-collapse mb-4 md:mb-0 md:w-1/2 md:mr-4 hidden md:table">
										<tbody>
											{[
												{
													label: "이름",
													field: "name",
												},
												{
													label: "성별",
													field: "gender",
												},
												{
													label: "견종",
													field: "breed",
												},
											].map((item) => (
												<tr
													key={item.label}
													style={{
														border: "1px solid #C7C7C7",
													}}
												>
													<td
														className="py-2 px-4 font-semibold"
														style={{
															backgroundColor:
																"#A273FF",
															color: "white",
															border: "1px solid #C7C7C7",
														}}
													>
														{item.label}
													</td>
													<td
														className="py-2 px-4"
														style={{
															border: "1px solid #C7C7C7",
														}}
													>
														{isEditing ? (
															<input
																type="text"
																value={
																	editedDogData[
																		item
																			.field
																	]
																}
																onChange={(e) =>
																	handleInputChange(
																		item.field,
																		e.target
																			.value
																	)
																}
																className="w-full p-1 border rounded"
															/>
														) : (
															editedDogData[
																item.field
															]
														)}
													</td>
												</tr>
											))}
										</tbody>
									</table>
									<table className="border-collapse mt-4 md:mt-0 md:w-1/2">
										<tbody>
											{[
												{
													label: "좋아하는 것",
													field: "likes",
												},
												{
													label: "싫어하는 것",
													field: "dislikes",
												},
												{
													label: "예상 안락사 일자",
													field: "euthanasiaDate",
												},
												{
													label: "한줄소개",
													field: "introduction",
												},
												{
													label: "해시태그",
													field: "hashtags",
												},
											].map((item) => (
												<tr
													key={item.label}
													style={{
														border: "1px solid #C7C7C7",
													}}
												>
													<td
														className="py-2 px-4 font-semibold"
														style={{
															backgroundColor:
																"#A273FF",
															color: "white",
															border: "1px solid #C7C7C7",
															width: "120px",
														}}
													>
														{item.label}
													</td>
													<td
														className="py-2 px-4"
														style={{
															border: "1px solid #C7C7C7",
														}}
													>
														{isEditing ? (
															<input
																type="text"
																value={
																	item.field ===
																	"hashtags"
																		? editedDogData[
																				item
																					.field
																		  ].join(
																				" "
																		  )
																		: editedDogData[
																				item
																					.field
																		  ]
																}
																onChange={(e) =>
																	handleInputChange(
																		item.field,
																		item.field ===
																			"hashtags"
																			? e.target.value.split(
																					" "
																			  )
																			: e
																					.target
																					.value
																	)
																}
																className="w-full p-1 border rounded"
															/>
														) : item.field ===
														  "hashtags" ? (
															editedDogData[
																item.field
															].join(" ")
														) : (
															editedDogData[
																item.field
															]
														)}
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>

					<div className="text-right mb-8">
						<button
							onClick={() =>
								isEditing
									? handleEditComplete()
									: setIsEditing(true)
							}
							className="bg-[#8A50FF] text-white py-2 px-6 rounded-sm hover:bg-[#7340DB] transition duration-300"
						>
							{isEditing ? "수정 완료" : "정보 수정하기"}
						</button>
					</div>
					<h2 className="text-2xl md:text-3xl font-semibold mb-4">
						입양신청자 정보 : 총 {applicants.length}명
					</h2>

					<div className=" overflow-x-auto">
						<table
							className="w-full mb-8 text-sm md:text-base"
							style={{
								backgroundColor: "rgba(249, 247, 255, 0.5)",
							}}
						>
							<thead>
								<tr>
									{[
										"아이디",
										"이름",
										"신청사유",
										"신청서 및 대화내역",
										"심사결과 발표",
									].map((header) => (
										<th
											key={header}
											className="py-2 px-4 font-semibold text-[#787878] truncate "
											style={{
												borderBottom:
													"1px solid #C7C7C7",
												maxWidth:
													header ===
													"신청서 및 대화내역"
														? "150px"
														: "100px",
											}}
										>
											{header}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{applicants.map((applicant) => (
									<tr
										key={applicant.id}
										style={{
											borderBottom: "1px solid #C7C7C7",
										}}
									>
										<td className="py-2 px-4 truncate max-w-[90px] text-center">
											{applicant.id}
										</td>
										<td className="py-2 px-4 truncate max-w-[90px] text-center">
											{applicant.name}
										</td>
										<td className="py-2 px-4 truncate max-w-[90px] text-center">
											{applicant.reason}
										</td>
										<td className="py-2 px-4 truncate max-w-[90px] text-center">
											<button className="border border-[#D4CEE1] bg-white text-[#5326AC] py-1 px-3 rounded hover:bg-[#F0E7FF] whitespace-nowrap">
												보기
											</button>
										</td>
										<td className="py-2 px-4 text-center">
											<button className="bg-[#8A50FF] text-white py-1 px-3 rounded mr-2 hover:bg-[#7340DB] whitespace-nowrap">
												확정
											</button>
											<button className="bg-[#FF5858] text-white py-1 px-3 rounded mr-2 hover:bg-[#E64D4D] whitespace-nowrap">
												거절
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DogDetailPage;
