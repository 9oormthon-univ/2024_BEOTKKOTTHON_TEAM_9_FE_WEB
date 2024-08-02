"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getDogDetails, updateDogDetails } from "@/api/adoption/dogDetails";
import { DogDetails } from "@/interfaces/adoption/dogDetails";
import { getApplicantList } from "@/api/adoption/applicantList";
import { Applicant } from "@/interfaces/adoption/applicantList";

const DogDetailPage = ({ params }: { params: { dogId: string } }) => {
	const dogId = parseInt(params.dogId);
	const [dogData, setDogData] = useState<DogDetails | null>(null);
	const [isEditing, setIsEditing] = useState(false);
	const [editedDogData, setEditedDogData] = useState<DogDetails | null>(null);
	const [applicantList, setApplicantList] = useState<Applicant[]>([]);
	const accessToken = localStorage.getItem("accessToken") || "";

	useEffect(() => {
		const fetchData = async () => {
			try {
				const details = await getDogDetails(dogId);
				setDogData(details);
				setEditedDogData(details);

				const applicantList = await getApplicantList(
					dogId,
					accessToken
				);
				setApplicantList(applicantList);
				console.log("Applicant list:", applicantList);
			} catch (error) {
				console.error("Failed to fetch data:", error);
			}
		};

		fetchData();
	}, [dogId]);

	if (!dogData) {
		return <div>Loading...</div>;
	}

	const handleInputChange = (field: keyof DogDetails, value: string) => {
		setEditedDogData((prev) => (prev ? { ...prev, [field]: value } : null));
	};

	const handleEditComplete = async () => {
		if (editedDogData) {
			try {
				const updatedDetails = await updateDogDetails(
					dogId,
					editedDogData
				);
				setDogData(updatedDetails);
				setIsEditing(false);
			} catch (error) {
				console.error("Failed to update dog details:", error);
			}
		}
	};

	const renderField = (field: keyof DogDetails) => {
		if (isEditing) {
			return (
				<input
					type="text"
					value={editedDogData?.[field]?.toString() || ""}
					onChange={(e) => handleInputChange(field, e.target.value)}
					className="w-full p-1 border rounded"
				/>
			);
		}
		return dogData[field]?.toString() || "";
	};

	return (
		<div className="mx-auto">
			<div className="flex flex-col items-center justify-center p-4 md:p-10">
				<div className="w-full">
					<h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 mt-10">
						{dogData.name}
					</h1>

					<h2 className="text-xl md:text-xl font-semibold mb-6">
						강아지 기본정보
					</h2>
					<div className="flex-1 w-full">
						<div className="flex flex-col md:flex-row mb-8 w-full">
							<div className="flex sm:flex-row">
								<Image
									src="/images/dogImg.png" // 실제 이미지 URL로 교체해야 합니다
									alt={dogData.name}
									width={160}
									height={160}
									style={{ objectFit: "cover" }}
									className="mr-4"
								/>
								<table className="md:hidden border-collapse w-full md:w-1/2">
									<tbody>
										{[
											{
												label: "이름",
												field: "name" as keyof DogDetails,
											},
											{
												label: "성별",
												field: "gender" as keyof DogDetails,
											},
											{
												label: "견종",
												field: "breed" as keyof DogDetails,
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
													{renderField(item.field)}
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
													field: "name" as keyof DogDetails,
												},
												{
													label: "성별",
													field: "gender" as keyof DogDetails,
												},
												{
													label: "견종",
													field: "breed" as keyof DogDetails,
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
														{renderField(
															item.field
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
													field: "likes" as keyof DogDetails,
												},
												{
													label: "싫어하는 것",
													field: "hates" as keyof DogDetails,
												},
												{
													label: "성격",
													field: "personality" as keyof DogDetails,
												},
												{
													label: "해시태그",
													field: "findingLocation" as keyof DogDetails,
												},
												{
													label: "추가 정보",
													field: "extra" as keyof DogDetails,
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
														{renderField(
															item.field
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
							// onClick={() =>
							// 	isEditing
							// 		? handleEditComplete()
							// 		: setIsEditing(true)
							// }
							className="bg-[#8A50FF] text-white py-2 px-6 rounded-sm hover:bg-[#7340DB] transition duration-300"
						>
							{isEditing ? "수정 완료" : "정보 수정하기"}
						</button>
					</div>
					<h2 className="text-2xl md:text-3xl font-semibold mb-4">
						입양신청자 정보 : 총 {applicantList.length}명
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
								{applicantList.map((applicant) => (
									<tr
										key={applicant.memberId}
										style={{
											borderBottom: "1px solid #C7C7C7",
										}}
									>
										<td className="py-2 px-4 truncate max-w-[90px] text-center">
											{applicant.memberId}
										</td>
										<td className="py-2 px-4 truncate max-w-[90px] text-center">
											{applicant.name}
										</td>
										<td className="py-2 px-4 truncate max-w-[90px] text-center">
											{applicant.reasonForAdoption}
										</td>
										<td className="py-2 px-4 truncate max-w-[90px] text-center">
											<Link
												href={`/adoption/${dogId}/${applicant.memberId}`}
											>
												<button className="border border-[#D4CEE1] bg-white text-[#5326AC] py-1 px-3 rounded hover:bg-[#F0E7FF] whitespace-nowrap">
													보기
												</button>
											</Link>
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
