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
	findingLocation: string;
	extra: string;
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
			findingLocation: string;
			extra: string;
		};
	};
}

export interface AdoptionItem {
	postId: number; // Long을 TypeScript에서는 number로 처리합니다.
	name: string;
	gender: string;
	extrat: string; // API 응답에 'extrat'로 되어 있는데, 'extra'의 오타인지 확인이 필요합니다.
	createdAt: string; // LocalDateTime은 문자열로 받아 처리합니다.
	adoptStatusCount: number;
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
