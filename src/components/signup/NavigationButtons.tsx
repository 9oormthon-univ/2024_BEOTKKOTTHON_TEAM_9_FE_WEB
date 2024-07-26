import Link from "next/link";
import React from "react";

interface NavigationButtonsProps {
	currentStep: number;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
	currentStep,
}) => {
	const getNextStepPath = () => {
		switch (currentStep) {
			case 1:
				return "/signup/step3";
			case 3:
				return "/signup/step4";
			default:
				return "/signup";
		}
	};

	const getPreviousStepPath = () => {
		switch (currentStep) {
			case 3:
				return "/signup";
			case 4:
				return "/signup/step3";
			default:
				return "/login";
		}
	};

	return (
		<div className="flex w-full max-w-md mt-8 justify-center mb-20">
			<Link href={getPreviousStepPath()}>
				<button className="px-6 py-2 bg-gray-200 text-gray-700 rounded mr-2">
					이전
				</button>
			</Link>
			<Link href={getNextStepPath()}>
				<button className="px-6 py-2 bg-[#A273FF] text-white rounded">
					다음
				</button>
			</Link>
		</div>
	);
};

export default NavigationButtons;
