export interface ChatMessage {
	input: string;
	response: string;
}

export interface ApplicantDetailResponse {
	code: string;
	message: string;
	result: {
		memberId: number;
		name: string;
		userName: string;
		application: {
			petHistoryAnswer: string;
			petHistory: string;
			currentPetAnswer: string;
			currentPet: string;
			familyAnswer: string;
			familyAgreement: string;
			reasonForAdoption: string;
			dogNewsAnswer: string;
		};
	};
}

export interface ChatHistoryResponse {
	code: string;
	message: string;
	result: ChatMessage[];
}
