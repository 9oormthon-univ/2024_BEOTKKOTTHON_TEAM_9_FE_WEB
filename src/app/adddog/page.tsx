"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiDownload } from "react-icons/fi";

const customShadowStyle = {
	boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
};

const AddDogPage = () => {
	const [name, setName] = useState("");
	const [gender, setGender] = useState("");
	const [isMixed, setIsMixed] = useState(false);
	const [breedType, setBreedType] = useState("");
	const [euthanasiaDate, setEuthanasiaDate] = useState(new Date());
	const [image, setImage] = useState(null);
	const [likes, setLikes] = useState("");
	const [dislikes, setDislikes] = useState("");
	const [introduction, setIntroduction] = useState("");
	const [hashtags, setHashtags] = useState<string[]>([]);

	const handleImageUpload = (event: { target: { files: any[] } }) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => setImage(e.target.result);
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
						value={introduction}
						onChange={(e) => setIntroduction(e.target.value)}
						className="w-full sm:w-3/4 p-2 rounded max-w-[626px]"
						style={customShadowStyle}
						rows={3}
					/>
				</div>

				<div className="flex flex-col sm:flex-row sm:items-start">
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
				</div>
			</div>

			<div className="mt-12 text-center ">
				<button className="bg-[#8A50FF] text-white py-2 px-4 rounded hover:bg-[#3E1C8F] transition duration-300 w-full sm:w-[140px] ">
					저장하기
				</button>
			</div>
		</div>
	);
};

export default AddDogPage;
