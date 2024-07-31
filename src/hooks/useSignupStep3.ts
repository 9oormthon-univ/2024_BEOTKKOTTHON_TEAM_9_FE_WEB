import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/api/auth";

export const useSignupStep3 = () => {
	const [formData, setFormData] = useState<{
		email: string;
		organizationName: string;
		managerName: string;
		password: string;
		confirmPassword: string;
		secondaryEmail: string;
		certFile: File | null;
		phoneNumber: string;
		location: string;
	}>({
		email: "",
		organizationName: "",
		managerName: "",
		password: "",
		confirmPassword: "",
		secondaryEmail: "",
		certFile: null,
		phoneNumber: "",
		location: "",
	});

	const router = useRouter();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFormData((prev) => ({ ...prev, certFile: e.target.files![0] }));
		}
	};

	const handleAddressChange = (address: string) => {
		setFormData((prev) => ({ ...prev, location: address }));
	};

	const handleSubmit = async () => {
		try {
			console.log("Submitting form data:", formData); // 디버깅용 로그
			await signUp(formData);
			console.log("Signup successful"); // 디버깅용 로그
			localStorage.setItem("signupEmail", formData.email);
			router.push("/signup/complete");
		} catch (error) {
			console.error("Signup failed:", error);
			alert("회원가입에 실패했습니다. 다시 시도해주세요.");
		}
	};

	return {
		formData,
		handleInputChange,
		handleFileChange,
		handleAddressChange,
		handleSubmit,
	};
};
