// types.ts
export interface Adoption {
	id: number;
	name: string;
	breed: string;
	gender: string;
	characteristic: string;
	date: string;
	status: number;
}

export interface BomInfo {
	infoId: number;
	postId: number;
	name: string;
	age: string;
	breed: string;
	gender: string;
	personality: string;
	likes: string;
	hates: string;
	extra: string;
}

export interface AdoptionsResponse {
	result: AdoptionItem[];
}

export interface AdoptionResponse {
	code: string;
	message: string;
	result: {
		postId: number;
		shelterId: number;
		bomInfo: {
			infoId: number;
			postId: number;
			name: string;
			age: string;
			breed: string;
			gender: string;
			personality: string;
			likes: string;
			hates: string;
			extra: string;
		};
	};
}

export interface AdoptionItem {
	postId: number;
	name: string;
	gender: string;
	extra: string;
	createdAt: string;
	adoptStatusCount: number;
	result: {};
}

export interface AdoptionSummaryResponse {
	code: string;
	message: string;
	result: {
		totalDogsCount: number;
		todayAdoptionRequests: number;
		completedAdoptions: number;
		pendingAdoptions: number;
	};
}
