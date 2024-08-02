export interface AddDogRequest {
	shelterId: number;
	expectedEuthanasiaDate: Date;
	bomInfo: {
		name: string;
		age: string;
		gender: string;
		breed: string;
		personality: string;
		extra: string;
		likes: string;
		hates: string;
		hashtags: string[];
	};
	uploadFile: File | null;
}

export interface AddDogResponse {
	code: string;
	data(data: any): unknown;
	// API 응답 구조에 맞게 정의
	success: boolean;
	message: string;
	// 필요한 다른 필드들...
}
