import { useState } from "react";
import { useRouter } from "next/navigation";

export const useSignup = () => {
	const [agreements, setAgreements] = useState({
		all: false,
		service: false,
		privacy: false,
		marketing: false,
	});
	const router = useRouter();

	const handleCheckboxChange = (name: keyof typeof agreements) => {
		if (name === "all") {
			const newValue = !agreements.all;
			setAgreements({
				all: newValue,
				service: newValue,
				privacy: newValue,
				marketing: newValue,
			});
		} else {
			setAgreements((prev) => {
				const newAgreements = { ...prev, [name]: !prev[name] };
				const allChecked = Object.values(newAgreements).every(Boolean);
				return { ...newAgreements, all: allChecked };
			});
		}
	};

	const handleNext = () => {
		if (agreements.service && agreements.privacy) {
			router.push("/signup/step2");
		} else {
			alert("필수 약관에 동의해주세요.");
		}
	};

	return { agreements, handleCheckboxChange, handleNext };
};
