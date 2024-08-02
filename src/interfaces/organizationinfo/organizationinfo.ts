export interface OrganizationInfoResponse {
	code: string;
	message: string;
	result: {
		shelterId: number;
		email: string;
		name: string;
		phone: string;
		managerName: string;
		subEmail: string;
		docName: string;
		docUrl: string;
		address: string;
	};
}
