import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";

interface AddressInputProps {
	value: string;
	onChange: (address: string) => void;
}

const AddressInput: React.FC<AddressInputProps> = ({ value, onChange }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleComplete = (data: any) => {
		let fullAddress = data.address;
		let extraAddress = "";

		if (data.addressType === "R") {
			if (data.bname !== "") {
				extraAddress += data.bname;
			}
			if (data.buildingName !== "") {
				extraAddress +=
					extraAddress !== ""
						? `, ${data.buildingName}`
						: data.buildingName;
			}
			fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
		}

		onChange(fullAddress);
		setIsModalOpen(false);
	};

	return (
		<div className="flex flex-col">
			<label
				htmlFor="location"
				className="mb-2 font-medium text-gray-700"
			>
				<span className="text-[#FF0000] mr-1">*</span>
				기관 위치
			</label>
			<div className="flex">
				<input
					type="text"
					id="location"
					name="location"
					value={value}
					readOnly
					className="p-2 border border-gray-300 rounded-l-md flex-grow focus:ring-[#8A50FF] focus:border-[#8A50FF]"
				/>
				<button
					type="button"
					onClick={() => setIsModalOpen(true)}
					className="p-2 bg-[#8A50FF] text-white rounded-r-md"
				>
					주소 검색
				</button>
			</div>
			{isModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
					<div className="bg-white p-4 rounded-md">
						<DaumPostcode onComplete={handleComplete} />
						<button
							onClick={() => setIsModalOpen(false)}
							className="mt-4 p-2 bg-gray-200 rounded-md w-full"
						>
							닫기
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default AddressInput;
