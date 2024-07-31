export interface Applicant {
	memberId: string;
	name: string;
	reasonForAdoption: string;
}

export interface ApiResponse {
	code: string;
	message: string;
	result: Applicant[];
}
