import React from "react";

interface ProgressIndicatorProps {
	step: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ step }) => {
	const steps = [
		{ number: "1", text: "약관동의", active: step >= 1 },
		{ number: "2", text: "본인인증", active: step >= 2 },
		{ number: "3", text: "기관정보 입력", active: step >= 3 },
		{ number: "4", text: "회원가입완료", active: step >= 4 },
	];

	return (
		<div className="w-full">
			<div className="flex justify-center my-8">
				{steps.map((stepItem, index) => (
					<div
						key={index}
						className="flex flex-col items-center w-1/5 px-2"
					>
						<span
							className={`font-medium mb-1 ${
								stepItem.active
									? "text-[#A273FF]"
									: "text-gray-400"
							} text-2xl sm:text-3xl md:text-4xl lg:text-[24px]`}
						>
							{stepItem.number}
						</span>
						<span
							className={`text-center font-medium whitespace-nowrap ${
								stepItem.active
									? "text-[#A273FF]"
									: "text-gray-400"
							} text-xs sm:text-sm md:text-base lg:text-[24px]`}
						>
							{stepItem.text}
						</span>
					</div>
				))}
			</div>
			{/* Horizontal line */}
			<div className="w-full px-4 sm:px-8 lg:px-16 mb-6">
				<hr className="border-t border-[#C7C7C7]" />
			</div>
		</div>
	);
};

export default ProgressIndicator;
