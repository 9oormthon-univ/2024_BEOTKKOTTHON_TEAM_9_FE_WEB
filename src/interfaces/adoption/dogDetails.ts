// src/interfaces/adoption/dogDetails.ts

export interface ApiResponse<T> {
	code: string;
	message: string;
	result: T;
}

export interface DogPost {
	postId: number;
	shelterId: number;
	imageUrl: string;
	bomInfo: DogDetails;
}

export interface DogDetails {
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
	hashtags: string;
}
