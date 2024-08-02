module.exports = {
	images: {
		unoptimized: true,
	},
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
			},
		];
	},
	// 정적 내보내기 설정 제거 (output: "export" 제거)
	// "exportPathMap"을 "generateStaticParams"로 변경
	generateStaticParams: async () => {
		return {
			paths: [
				{ params: { slug: "" } }, // 메인 페이지
				{ params: { slug: "about" } }, // About 페이지

				// 추가적인 페이지 구성이 필요한 경우 여기에 명시
			],
			fallback: false,
		};
	},
};
