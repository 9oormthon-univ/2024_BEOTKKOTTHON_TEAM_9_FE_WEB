export interface Applicant {
	memberId: number;
	email: string;
	name: string;
	reasonForAdoption: string;
}

export interface ApiResponse {
	code: string;
	message: string;
	result: Applicant[];
}
