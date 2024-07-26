import React from "react";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
	return (
		<div className="flex min-h-screen">
			{/* 왼쪽 이미지 섹션 */}
			<div className="hidden lg:block lg:w-1/2 relative">
				<Image
					src="/images/logIma.png"
					alt="Login"
					layout="fill"
					objectFit="cover"
				/>
			</div>

			{/* 오른쪽 로그인 폼 섹션 */}
			<div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 lg:px-16">
				<div className="w-full max-w-md">
					{/* 로고와 환영 메시지를 세로로 정렬 */}

					<div className="flex flex-col items-center justify-center mb-16">
						<Image
							className="mb-4"
							src="/svg/login/foot.svg"
							alt="Logo"
							width={49.81}
							height={35.01}
						/>
						<h2 className="text-3xl font-bold ml-4">
							관리도 편하게 봄멍으로!
						</h2>
					</div>

					{/* 로그인 폼 */}
					<form>
						<div className="mb-4">
							<input
								type="email"
								placeholder="아이디를 입력해주세요"
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 bg-[#F7F4FF]"
							/>
						</div>
						<div className="mb-6">
							<input
								type="password"
								placeholder="비밀번호를 입력해주세요"
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 bg-[#F7F4FF]"
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-[#A273FF] text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
						>
							로그인
						</button>
					</form>

					{/* 비밀번호 찾기와 회원가입 버튼 */}
					<div className="mt-6 text-center">
						<Link
							href="/forgot-password"
							className="text-[#9A9A9A] hover:underline"
						>
							비밀번호 찾기
						</Link>
						<span className="mx-2 text-gray-400">|</span>
						<Link
							href="/signup"
							className="text-[#9A9A9A] hover:underline"
						>
							회원가입
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
