"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Main = () => {
	const chatRef1 = useRef<HTMLImageElement>(null);
	const chatRef2 = useRef<HTMLImageElement>(null);
	const chatRef3 = useRef<HTMLImageElement>(null);
	const chatRef4 = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (
						entry.isIntersecting &&
						entry.target instanceof HTMLElement
					) {
						entry.target.style.opacity = "1";
						entry.target.style.transform = "translateX(0)";
					}
				});
			},
			{ threshold: 0.5 }
		);

		[chatRef1, chatRef2, chatRef3, chatRef4].forEach((ref) => {
			if (ref.current) {
				observer.observe(ref.current);
			}
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div
			style={{
				fontFamily: "Pretendard, sans-serif",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
				position: "relative",
				height: "auto",
				overflowY: "scroll",
				paddingTop: "100px",
				backgroundImage: 'url("/images/main/main_background.png")',
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<header
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					display: "flex",
					justifyContent: "space-between",
					padding: "20px",
					backgroundColor: "white",
					zIndex: 1000,
				}}
			>
				<img
					src="/svg/navi/logo.svg"
					alt="BomMeong Logo"
					style={{ height: "40px" }}
				/>
				<Link href="/login" passHref>
					<button
						style={{
							backgroundColor: "#9763FF",
							color: "white",
							border: "none",
							borderRadius: "37px",
							padding: "10px 20px",
							cursor: "pointer",
						}}
					>
						로그인
					</button>
				</Link>
			</header>

			<div className="w-full px-4 lg:px-0 max-w-6xl mx-auto">
				<h1 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4">
					유기견과 대화하는 순간을 상상해 보셨나요?
				</h1>
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
					유기견과 대화해 볼 수 있는
				</h1>
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
					새로운 입양 서비스
				</h1>
				<Link href="/signup" passHref>
					<button className="bg-[#A273FF] text-white border-none rounded-full py-3 px-6 text-lg md:text-xl cursor-pointer mb-24">
						기관 정보 등록하기
					</button>
				</Link>
			</div>

			<div className="relative w-full max-w-md mx-auto mb-48">
				<img
					src="/images/main/phone.png"
					alt="Phone Background"
					className="w-full h-auto"
				/>
				<img
					ref={chatRef1}
					src="/images/main/first_chat.png"
					alt="First Chat"
					className="chat-img absolute top-[15%] right-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ease-out"
				/>
				<img
					ref={chatRef2}
					src="/images/main/second_chat.png"
					alt="Second Chat"
					className="chat-img absolute top-[28%] right-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ease-out"
				/>
				<img
					ref={chatRef3}
					src="/images/main/third_chat.png"
					alt="Third Chat"
					className="chat-img absolute top-[41%] left-1/2 transform translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ease-out"
				/>
				<img
					ref={chatRef4}
					src="/images/main/fourth_chat.png"
					alt="Fourth Chat"
					className="chat-img absolute top-[54%] right-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ease-out"
				/>
			</div>

			<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
				더 친근하게, 입양 정보를 전합니다
			</h1>
			<div className="flex flex-col lg:flex-row justify-center items-center text-lg md:text-xl lg:text-2xl text-[#505050]">
				<span className="font-medium">
					봄멍에선 강아지별 특성을 활용해
				</span>
				<span className="font-bold mx-2">말투와 답변을 생성</span>
				<span className="font-medium">할 수 있어요.</span>
			</div>

			<div className="flex flex-col lg:flex-row justify-center items-center mt-20 lg:mt-32 w-full max-w-6xl mx-auto">
				<div className="w-full lg:w-1/2 flex justify-center">
					<img
						src="/images/main/dog_1.png"
						alt="First Dog"
						className="w-full max-w-md h-auto"
					/>
				</div>
				<div className="w-full lg:w-1/2 text-left px-4 lg:px-12 mt-10 lg:mt-0">
					<h1 className="text-[#634EC0] text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
						강아지의 종류
					</h1>
					<p className="text-[#505050] text-lg mb-2">
						견종별 특징에 따라서 말투를 생성해요.
					</p>
					<p className="text-[#505050] text-lg">
						<span className="font-bold">
							성견이 되었을 때의 크기
						</span>
						까지 말해주며
					</p>
					<p className="text-[#505050] text-lg">
						더 실감나게{" "}
						<span className="font-bold">정보를 전해요.</span>
					</p>
				</div>
			</div>

			<div className="flex flex-col-reverse lg:flex-row justify-center items-center mt-20 lg:mt-32 w-full max-w-6xl mx-auto">
				<div className="w-full lg:w-1/2 text-left lg:text-right px-4 lg:px-12 mt-10 lg:mt-0">
					<h1 className="text-[#634EC0] text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
						강아지의 건강상태
					</h1>
					<p className="text-[#505050] text-lg mb-2">
						현재 강아지의 건강 상태를 고지하고,
					</p>
					<p className="text-[#505050] text-lg">
						<span className="font-bold">
							생성형 AI로 건강 관리법을 찾아{" "}
						</span>
						알려줘요.
					</p>
				</div>
				<div className="w-full lg:w-1/2 flex justify-center">
					<img
						src="/images/main/dog_2.png"
						alt="Second Dog"
						className="w-full max-w-md h-auto"
					/>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row justify-center items-center mt-20 lg:mt-32 w-full max-w-6xl mx-auto">
				<div className="w-full lg:w-1/2 flex justify-center">
					<img
						src="/images/main/dog_1.png"
						alt="Third Dog"
						className="w-full max-w-md h-auto"
					/>
				</div>
				<div className="w-full lg:w-1/2 text-left px-4 lg:px-12 mt-10 lg:mt-0">
					<h1 className="text-[#634EC0] text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
						구조된 장소와 이야기
					</h1>
					<p className="text-[#505050] text-lg mb-2">
						어디에서 구조되었는지 이야기를 적어주신다면
					</p>
					<p className="text-[#505050] text-lg">
						<span className="font-bold">
							대화의 소재로 사용되며{" "}
						</span>
						정보를 전해요.
					</p>
					<p className="text-[#505050] text-lg mt-2">
						성격을 설정할 때에도 사용할 수 있어요.
					</p>
				</div>
			</div>

			<button className="bg-[#8A50FF] text-white border-none rounded-full py-3 px-6 text-xl cursor-pointer mt-24 mb-32">
				더 확인하기
			</button>

			<div
				className="w-full bg-cover bg-center py-24 px-4"
				style={{
					backgroundImage: 'url("/images/main/background.png")',
				}}
			>
				<div className="flex flex-col lg:flex-row justify-center items-center max-w-6xl mx-auto">
					<div className="lg:w-2/3 text-left mb-12 lg:mb-0">
						<h2 className="text-white text-opacity-50 text-2xl md:text-3xl font-bold mb-4">
							입양절차는 이렇게 진행됩니다.
						</h2>
						<h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
							기존 입양체계에
							<br />
							새로운 변화를 던져요
						</h1>
					</div>
					<div className="lg:w-1/3 flex justify-center">
						<img
							src="/images/main/adoption.png"
							alt="Adoption Process"
							className="w-full max-w-sm h-auto"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
