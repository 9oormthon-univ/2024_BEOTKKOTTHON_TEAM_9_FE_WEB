import React from "react";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
	return (
		<div className="flex min-h-screen">
			{/* 왼쪽 이미지 섹션 */}
			<div className="hidden lg:block lg:w-1/2 relative">
				<Image
					src="/login-image.png"
					alt="Login"
					layout="fill"
					objectFit="cover"
				/>
			</div>

			{/* 오른쪽 로그인 폼 섹션 */}
			<div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 lg:px-16">
				<div className="w-full max-w-md">
					{/* 로고 */}
					<div className="mb-8">
						<Image
							src="/logo.svg"
							alt="Logo"
							width={150}
							height={50}
						/>
					</div>

					{/* 환영 메시지 */}
					<h2 className="text-3xl font-bold mb-6">반갑습니다!</h2>
					<p className="text-gray-600 mb-8">계정에 로그인하세요.</p>

					{/* 로그인 폼 */}
					<form>
						<div className="mb-4">
							<input
								type="email"
								placeholder="이메일"
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
							/>
						</div>
						<div className="mb-6">
							<input
								type="password"
								placeholder="비밀번호"
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
						>
							로그인
						</button>
					</form>

					{/* 추가 링크 */}
					<div className="mt-6 text-center">
						<Link
							href="/forgot-password"
							className="text-sm text-purple-600 hover:underline"
						>
							비밀번호를 잊으셨나요?
						</Link>
					</div>
					<div className="mt-4 text-center">
						<span className="text-gray-600">
							계정이 없으신가요?{" "}
						</span>
						<Link
							href="/signup"
							className="text-purple-600 hover:underline"
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
