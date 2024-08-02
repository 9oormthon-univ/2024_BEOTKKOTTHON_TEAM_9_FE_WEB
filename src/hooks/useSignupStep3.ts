import { useState } from "react";
import { ShelterSignUpData } from "@/api/auth";

export const useSignupStep3 = () => {
	const [formData, setFormData] = useState({
		email: "",
		organizationName: "",
		managerName: "",
		password: "",
		confirmPassword: "",
		secondaryEmail: "",
		certFile: null as File | null,
		phoneNumber: "",
		location: "",
	});

	const [addressData, setAddressData] = useState<{
		address: string;
		latitude: string;
		longitude: string;
	}>({
		address: "",
		latitude: "0",
		longitude: "0",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFormData((prev) => ({ ...prev, certFile: e.target.files![0] }));
		}
	};

	const handleAddressChange = (
		address: string,
		latitude: string,
		longitude: string
	) => {
		setFormData((prev) => ({ ...prev, location: address }));
		setAddressData({ address, latitude, longitude });
	};

	return {
		formData,
		addressData,
		handleInputChange,
		handleFileChange,
		handleAddressChange,
		setFormData,
	};
};
