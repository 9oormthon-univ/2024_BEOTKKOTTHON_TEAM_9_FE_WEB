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
export interface UpdateOrganizationInfoRequest {
	shelterId: number;
	phone: string;
	managerName: string;
	subEmail: string;
}

export interface UpdateOrganizationInfoResponse {
	code: string;
	message: string;
	result: null;
}
