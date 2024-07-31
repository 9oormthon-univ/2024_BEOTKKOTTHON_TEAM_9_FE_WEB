import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProgressIndicator from "@/components/signup/ProgressIndicator";
import Banner from "@/components/signup/Banner";
import { IoCheckmarkCircle } from "react-icons/io5";

interface SignupCompletePresenterProps {
	email: string;
}

const SignupCompletePresenter: React.FC<SignupCompletePresenterProps> = ({
	email,
}) => {
	return (
		<div className="flex flex-col items-center min-h-screen bg-white">
			<Banner />
			<ProgressIndicator step={4} />

			<div className="w-full px-4 sm:px-8 lg:px-[240px] mt-9">
				<div className="w-full bg-white p-6 lg:p-8 border-solid border-[#C7C7C7] rounded-sm text-center">
					<IoCheckmarkCircle
						className="mx-auto mb-6 text-[#8A50FF]"
						size={100}
					/>
					<h2 className="text-2xl font-bold mb-3.5">
						회원가입이 완료되었습니다!
					</h2>
					<p className="text-sm text-gray-500 mb-6">
						봄멍에 오신 것을 환영합니다. 이제 서비스를 이용하실 수
						있습니다.
					</p>
					<div className="space-y-4">
						<p className="text-sm">
							입력하신 이메일
							<span className="font-semibold">{email}</span>로
							로그인하실 수 있습니다.
						</p>
						<p className="text-sm">
							봄멍의 다양한 서비스를 이용해 보세요. 유기견 관리와
							입양 절차가 더욱 편리해집니다.
						</p>
					</div>
				</div>
			</div>

			<div className="mt-8 mb-28">
				<Link href="/login">
					<button className="px-6 py-2 bg-[#8A50FF] text-white rounded">
						로그인 하러 가기
					</button>
				</Link>
			</div>
		</div>
	);
};

export default SignupCompletePresenter;
