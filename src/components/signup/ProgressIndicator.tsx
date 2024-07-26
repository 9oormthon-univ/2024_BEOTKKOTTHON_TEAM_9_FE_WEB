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
		<div className="w-full flex justify-center my-8">
			{steps.map((stepItem, index) => (
				<div
					key={index}
					className="flex flex-col items-center w-24 mx-2"
				>
					<span
						className={`font-bold mb-1 ${
							stepItem.active
								? "text-purple-600"
								: "text-gray-400"
						}`}
						style={{ fontSize: "24px" }}
					>
						{stepItem.number}
					</span>
					<span
						className={`text-center font-medium whitespace-nowrap ${
							stepItem.active
								? "text-purple-600"
								: "text-gray-400"
						}`}
						style={{ fontSize: "14px" }}
					>
						{stepItem.text}
					</span>
				</div>
			))}
		</div>
	);
};

export default ProgressIndicator;
