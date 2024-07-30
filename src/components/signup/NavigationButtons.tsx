import React from "react";
import { useRouter } from "next/navigation";

interface NavigationButtonsProps {
	currentStep: number;
	onNext?: () => void;
	isLastStep?: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
	currentStep,
	onNext,
	isLastStep = false,
}) => {
	const router = useRouter();

	const handleNext = () => {
		if (isLastStep && onNext) {
			onNext();
		} else {
			const nextPath = getNextStepPath();
			router.push(nextPath);
		}
	};

	const getNextStepPath = () => {
		switch (currentStep) {
			case 1:
				return "/signup/step3";
			case 3:
				return "/signup/complete";
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
			<button
				onClick={() => router.push(getPreviousStepPath())}
				className="px-6 py-2 bg-gray-200 text-gray-700 rounded mr-2"
			>
				이전
			</button>
			<button
				onClick={handleNext}
				className="px-6 py-2 bg-[#A273FF] text-white rounded"
			>
				{isLastStep ? "완료" : "다음"}
			</button>
		</div>
	);
};

export default NavigationButtons;
