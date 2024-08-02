"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiDownload } from "react-icons/fi";
import { addDog } from "@/api/adoption/addDog";
import { AddDogRequest } from "@/interfaces/adoption/addDog";

const customShadowStyle = {
	boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
};

const AddDogPage = () => {
	const [name, setName] = useState("");
	const [gender, setGender] = useState("");
	const [isMixed, setIsMixed] = useState(false);
	const [breedType, setBreedType] = useState("");
	const [euthanasiaDate, setEuthanasiaDate] = useState<Date | null>(
		new Date()
	);
	const [image, setImage] = useState<string | null>(null);
	const [likes, setLikes] = useState("");
	const [dislikes, setDislikes] = useState("");
	const [translation, setTranslation] = useState("");
	const [hashtags, setHashtags] = useState<string[]>([]);
	const [age, setAge] = useState("");
	const [personality, setPersonality] = useState("");
	const [extra, setExtra] = useState("");
	const [findingLocation, setFindingLocation] = useState("");

	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files ? event.target.files[0] : null;
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				if (e.target) {
					setImage(e.target.result as string);
				}
			};
			reader.readAsDataURL(file);
		}
	};

	const handleHashtagInput = (event: {
		key: string;
		target: { value: string };
	}) => {
		if (event.key === "Enter" && event.target.value) {
			setHashtags([...hashtags, event.target.value]);
			event.target.value = "";
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const dogData: AddDogRequest = {
			shelterId: 3, // 고정값
			bomInfo: {
				name,
				age,
				gender,
				breed: breedType === "purebred" ? "믹스견 아님" : "믹스견", // 예시, 실제로는 더 자세한 로직이 필요할 수 있습니다.
				personality,
				extra,
				likes,
				hates: dislikes,
				findingLocation,
			},
			uploadFile: image
				? new File([image], "dogImage.png", { type: "image/png" })
				: null,
		};

		try {
			const response = await addDog(dogData);
			console.log(response);
			if (response.code === "0000") {
				alert("강아지 정보가 성공적으로 추가되었습니다.");
				console.log(response.data);
				// 성공 후 처리 (예: 페이지 리디렉션)
			} else {
				alert("강아지 정보 추가에 실패했습니다.");
			}
		} catch (error) {
			console.error("Error adding dog:", error);
			alert("오류가 발생했습니다. 다시 시도해주세요.");
		}
	};

	return (
		<div className="mx-auto p-4 md:p-10 mt-10">
			<h1 className="text-2xl md:text-3xl font-semibold mb-8">
				새로 추가하기
			</h1>

			<div className="flex items-center mb-10">
				<div
					className="w-[5px] h-[28px] bg-[#6147FF] opacity-50 mr-2"
					aria-hidden="true"
				></div>
				<h2 className="text-xl font-semibold text-[#5326AC]">
					강아지 기본정보
				</h2>
			</div>

			<div className="space-y-4">
				<div className="flex flex-col sm:flex-row sm:items-center">
					<label className="block mb-2 sm:mb-0 sm:w-1/4 font-semibold">
						이름
					</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="w-full sm:w-3/4 p-2 rounded max-w-[626px]"
						style={customShadowStyle}
					/>
				</div>

				<div className="flex flex-col sm:flex-row sm:items-center">
					<label className="block mb-2 sm:mb-0 sm:w-1/4 font-semibold">
						성별
					</label>
					<select
						value={gender}
						onChange={(e) => setGender(e.target.value)}
						className="w-full sm:w-3/4 p-2 rounded max-w-[626px]"
						style={customShadowStyle}
					>
						<option value="">선택하세요</option>
						<option value="암컷">암컷</option>
						<option value="수컷">수컷</option>
					</select>
				</div>

				<div className="flex flex-col sm:flex-row sm:items-center">
					<label className="block mb-2 sm:mb-0 sm:w-1/4 font-semibold">
						대략적인 나이
					</label>
					<input
						type="age"
						value={age}
						onChange={(e) => setAge(e.target.value)}
						className="w-full sm:w-3/4 p-2 rounded max-w-[626px]"
						style={customShadowStyle}
					/>
				</div>

				<div className="flex flex-col sm:flex-row sm:items-center">
					<label className="block mb-2 sm:mb-0 sm:w-1/4 font-semibold">
						견종
					</label>
					<div className="flex items-center sm:w-3/4 max-w-[626px] space-x-6">
						<label className="inline-flex items-center">
							<input
								type="radio"
								className="form-radio text-[#5326AC] h-5 w-5"
								name="breedType"
								value="purebred"
								checked={breedType === "purebred"}
								onChange={() => setBreedType("purebred")}
							/>
							<span className="ml-2">믹스견이 아니에요</span>
						</label>
						<label className="inline-flex items-center">
							<input
								type="radio"
								className="form-radio text-[#5326AC] h-5 w-5"
								name="breedType"
								value="mixed"
								checked={breedType === "mixed"}
								onChange={() => setBreedType("mixed")}
							/>
							<span className="ml-2">믹스견이에요</span>
						</label>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row sm:items-center">
					<label className="block mb-2 sm:mb-0 sm:w-1/4 font-semibold">
						예정 안락사 일자
					</label>
					<DatePicker
						selected={euthanasiaDate}
						onChange={(date) => setEuthanasiaDate(date)}
						className="w-full sm:w-3/4 p-2 rounded max-w-[626px]"
						style={customShadowStyle}
						dateFormat="yyyy/MM/dd"
					/>
				</div>

				<div className="flex flex-col sm:flex-row sm:items-start">
					<label className="block mb-2 sm:mb-0 sm:w-1/4 font-semibold">
						사진 등록
					</label>
					<div className="sm:w-3/4 max-w-[626px] flex items-start">
						<div
							className="w-[273px] h-[304px] bg-[#F4F4F4] flex flex-col items-center justify-center cursor-pointer"
							onClick={() =>
								document.getElementById("imageUpload")?.click()
							}
						>
							{image ? (
								<img
									src={image}
									alt="Uploaded dog"
									className="max-w-full max-h-full object-contain"
								/>
							) : (
								<>
									<FiDownload className="text-4xl text-[#D5D5D5] mb-2" />
									<p className="text-[#D5D5D5]">
										클릭해서 파일을 선택해주세요
									</p>
								</>
							)}
						</div>
						<input
							id="imageUpload"
							type="file"
							accept="image/*"
							onChange={handleImageUpload}
							className="hidden"
						/>
						<p className="text-[#7D7D7D] text-sm ml-4">
							*사진크기 : <br />
							*png이미지 파일 업로드를 권장합니다
						</p>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row sm:items-center">
					<label className="block mb-2 sm:mb-0 sm:w-1/4 font-semibold">
						좋아하는 것
					</label>
					<input
						type="text"
						value={likes}
						onChange={(e) => setLikes(e.target.value)}
						className="w-full sm:w-3/4 p-2 rounded max-w-[626px]"
						style={customShadowStyle}
					/>
				</div>

				<div className="flex flex-col sm:flex-row sm:items-center">
					<label className="block mb-2 sm:mb-0 sm:w-1/4 font-semibold">
						싫어하는 것
					</label>
					<input
						type="text"
						value={dislikes}
						onChange={(e) => setDislikes(e.target.value)}
						className="w-full sm:w-3/4 p-2 rounded max-w-[626px]"
						style={customShadowStyle}
					/>
				</div>

				<div className="flex flex-col sm:flex-row sm:items-start">
					<label className="block mb-2 sm:mb-0 sm:w-1/4 font-semibold">
						한줄소개
					</label>
					<textarea
						value={extra}
						onChange={(e) => setExtra(e.target.value)}
						className="w-full sm:w-3/4 p-2 rounded max-w-[626px]"
						style={customShadowStyle}
						rows={3}
					/>
				</div>

				<div className="flex flex-col sm:flex-row sm:items-start">
					<label className="block mb-2 sm:mb-0 sm:w-1/4 font-semibold">
						성격
					</label>
					<textarea
						value={personality}
						onChange={(e) => setPersonality(e.target.value)}
						className="w-full sm:w-3/4 p-2 rounded max-w-[626px]"
						style={customShadowStyle}
						rows={3}
					/>
				</div>

				<div className="flex flex-col sm:flex-row sm:items-center">
					<label className="block mb-2 sm:mb-0 sm:w-1/4 font-semibold">
						발견된 곳
					</label>
					<input
						type="text"
						value={findingLocation}
						onChange={(e) => setFindingLocation(e.target.value)}
						className="w-full sm:w-3/4 p-2 rounded max-w-[626px]"
						style={customShadowStyle}
					/>
				</div>

				{/* <div className="flex flex-col sm:flex-row sm:items-start">
					<label className="block mb-2 sm:mb-0 sm:w-1/4 font-semibold">
						해시태그
					</label>
					<div className="sm:w-3/4 max-w-[626px]">
						<input
							type="text"
							onKeyPress={handleHashtagInput}
							className="w-full p-2 rounded mb-2"
							style={customShadowStyle}
							placeholder="Enter를 눌러 해시태그 추가"
						/>
						<div className="flex flex-wrap">
							{hashtags.map((tag, index) => (
								<span
									key={index}
									className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
								>
									#{tag}
								</span>
							))}
						</div>
					</div>
				</div> */}
			</div>

			<div className="mt-12 text-center ">
				<button
					onClick={handleSubmit}
					className="bg-[#8A50FF] text-white py-2 px-4 rounded hover:bg-[#3E1C8F] transition duration-300 w-full sm:w-[140px]"
				>
					저장하기
				</button>
			</div>
		</div>
	);
};

export default AddDogPage;
