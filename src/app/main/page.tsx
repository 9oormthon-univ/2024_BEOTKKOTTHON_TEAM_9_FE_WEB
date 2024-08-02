"use client";
import React, { useEffect, useRef } from "react";

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
			{ threshold: 0.5 } // 50% 이상 보이면 애니메이션 적용
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
				paddingTop: "200px",
				backgroundImage: 'url("/images/main/main_background.png")',
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<header
				style={{
					position: "fixed", // 헤더를 화면 상단에 고정
					top: 0,
					left: 0,
					right: 0,
					display: "flex",
					justifyContent: "space-between",
					padding: "20px",
					backgroundColor: "white", // 배경색 추가로 내용이 겹쳐 보이지 않도록 함
					zIndex: 1000, // 헤더가 다른 내용 위에 오도록 함
				}}
			>
				<img
					src="/svg/navi/logo.svg"
					alt="BomMeong Logo"
					style={{ height: "40px" }}
				/>
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
			</header>

			<div className="w-full px-4 lg:px-0">
				<h1
					style={{
						fontSize: "clamp(10px, 5vw, 25px)",
						fontFamily: "Pretendard Medium",
						fontWeight: "normal",
						marginBottom: "20px",
					}}
				>
					유기견과 대화하는 순간을 상상해 보셨나요?
				</h1>
				<h1
					style={{
						fontSize: "clamp(40px, 8vw, 70px)",
						fontFamily: "Pretendard Bold",
						fontWeight: "bold",
					}}
				>
					유기견과 대화해 볼 수 있는
				</h1>
				<h1
					style={{
						fontSize: "clamp(40px, 8vw, 70px)",
						fontFamily: "Pretendard Bold",
						fontWeight: "bold",
						marginBottom: "60px",
					}}
				>
					새로운 입양 서비스
				</h1>

				<button
					style={{
						backgroundColor: "#A273FF",
						color: "white",
						border: "none",
						borderRadius: "37px",
						padding: "15px 30px",
						fontSize: "clamp(16px, 3vw, 20px)",
						cursor: "pointer",
						marginBottom: "100px",
					}}
				>
					기관 정보 등록하기
				</button>
			</div>

			<div
				style={{
					position: "relative",
					width: "100%",
					maxWidth: "400px",
					marginBottom: "200px",
				}}
			>
				<img
					src="/images/main/phone.png"
					alt="Phone Background"
					style={{ width: "100%", height: "auto" }}
				/>
				<img
					ref={chatRef1}
					src="/images/main/first_chat.png"
					alt="First Chat"
					style={{
						position: "absolute",
						top: "15%",
						right: "50%",
						width: "90%",
						opacity: 0,
						transform: "translateX(-100px)",
						transition: "all 0.5s ease-out",
					}}
				/>
				<img
					ref={chatRef2}
					src="/images/main/second_chat.png"
					alt="Second Chat"
					style={{
						position: "absolute",
						top: "28%",
						right: "50%",
						width: "90%",
						opacity: 0,
						transform: "translateX(-100px)",
						transition: "all 0.5s ease-out",
					}}
				/>
				<img
					ref={chatRef3}
					src="/images/main/third_chat.png"
					alt="Third Chat"
					style={{
						position: "absolute",
						top: "41%",
						left: "50%",
						width: "90%",
						opacity: 0,
						transform: "translateX(100px)",
						transition: "all 0.5s ease-out",
					}}
				/>
				<img
					ref={chatRef4}
					src="/images/main/fourth_chat.png"
					alt="Fourth Chat"
					style={{
						position: "absolute",
						top: "54%",
						right: "50%",
						width: "90%",
						opacity: 0,
						transform: "translateX(-100px)",
						transition: "all 0.5s ease-out",
					}}
				/>
			</div>

			<h1
				style={{
					fontSize: "clamp(30px, 6vw, 45px)",
					fontFamily: "Pretendard Bold",
					fontWeight: "Bold",
				}}
			>
				더 친근하게, 입양 정보를 전합니다
			</h1>
			<div className="flex flex-col lg:flex-row justify-center items-center">
				<span
					style={{
						color: "#505050",
						fontSize: "clamp(16px, 3vw, 20px)",
						fontFamily: "Pretendard Medium",
						fontWeight: "normal",
					}}
				>
					봄멍에선 강아지별 특성을 활용해
				</span>
				<span
					style={{
						color: "#505050",
						fontSize: "clamp(16px, 3vw, 20px)",
						fontFamily: "Pretendard Bold",
						fontWeight: "bold",
						margin: "0 5px",
					}}
				>
					말투와 답변을 생성
				</span>
				<span
					style={{
						color: "#505050",
						fontSize: "clamp(16px, 3vw, 20px)",
						fontFamily: "Pretendard Medium",
						fontWeight: "normal",
					}}
				>
					할 수 있어요.
				</span>
			</div>

			<div className="flex flex-col lg:flex-row justify-center items-center mt-20 lg:mt-100">
				<div className="w-full lg:w-1/2 flex justify-center">
					<img
						src="/images/main/dog_1.png"
						alt="First Dog"
						style={{
							width: "100%",
							maxWidth: "400px",
							height: "auto",
						}}
					/>
				</div>
				<div className="w-full lg:w-1/2 text-left px-4 lg:px-20 mt-10 lg:mt-0">
					<h1
						style={{
							color: "#634EC0",
							fontSize: "clamp(25px, 5vw, 35px)",
							fontFamily: "Pretendard Bold",
							fontWeight: "Bold",
						}}
					>
						강아지의 종류
					</h1>
					<h1
						style={{
							color: "#505050",
							fontSize: "20px",
							fontFamily: "Pretendard Medium",
							fontWeight: "normal",
						}}
					>
						견종별 특징에 따라서 말투를 생성해요.
					</h1>
					<span
						style={{
							color: "#505050",
							fontSize: "20px",
							fontFamily: "Pretendard Bold",
							fontWeight: "bold",
						}}
					>
						성견이 되었을 때의 크기
					</span>
					<span
						style={{
							color: "#505050",
							fontSize: "20px",
							fontFamily: "Pretendard Medium",
							fontWeight: "normal",
						}}
					>
						까지 말해주며
					</span>
					<h1></h1>
					<span
						style={{
							color: "#505050",
							fontSize: "20px",
							fontFamily: "Pretendard Medium",
							fontWeight: "normal",
						}}
					>
						더 실감나게
					</span>
					<span
						style={{
							color: "#505050",
							fontSize: "20px",
							fontFamily: "Pretendard Bold",
							fontWeight: "bold",
							margin: "0 5px",
						}}
					>
						정보를 전해요.
					</span>
				</div>
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					marginTop: "30px",
				}}
			>
				<div
					className=""
					style={{
						flex: 1,
						textAlign: "right",
						paddingRight: "90px",
					}}
				>
					<h1
						style={{
							color: "#634EC0",
							fontSize: "clamp(25px, 5vw, 35px)",
							fontFamily: "Pretendard Bold",
							fontWeight: "Bold",
						}}
					>
						강아지의 건강상태
					</h1>
					<h1
						style={{
							color: "#505050",
							fontSize: "20px",
							fontFamily: "Pretendard Medium",
							fontWeight: "normal",
						}}
					>
						현재 강아지의 건강 상태를 고지하고,
					</h1>
					<span
						style={{
							color: "#505050",
							fontSize: "20px",
							fontFamily: "Pretendard Bold",
							fontWeight: "bold",
						}}
					>
						생성형 AI로 건강 관리법을 찾아{" "}
					</span>
					<span
						style={{
							color: "#505050",
							fontSize: "20px",
							fontFamily: "Pretendard Medium",
							fontWeight: "normal",
						}}
					>
						알려줘요.
					</span>
				</div>
				<div style={{ flex: 1 }}>
					<img
						src="/images/main/dog_2.png"
						alt="First Dog"
						style={{
							width: "100%",
							maxWidth: "400px",
							height: "auto",
						}}
					/>
				</div>
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					marginTop: "30px",
				}}
			>
				<div style={{ flex: 1 }}>
					<img
						src="/images/main/dog_1.png"
						alt="First Dog"
						style={{
							width: "100%",
							maxWidth: "400px",
							height: "auto",
						}}
					/>
				</div>
				<div
					style={{ flex: 1, textAlign: "left", paddingLeft: "90px" }}
				>
					<h1
						style={{
							color: "#634EC0",
							fontSize: "clamp(25px, 5vw, 35px)",
							fontFamily: "Pretendard Bold",
							fontWeight: "Bold",
						}}
					>
						구조된 장소와 이야기
					</h1>
					<h1
						style={{
							color: "#505050",
							fontSize: "20px",
							fontFamily: "Pretendard Medium",
							fontWeight: "normal",
						}}
					>
						어디에서 구조되었는지 이야기를 적어주신다면
					</h1>
					<span
						style={{
							color: "#505050",
							fontSize: "20px",
							fontFamily: "Pretendard Bold",
							fontWeight: "bold",
						}}
					>
						대화의 소재로 사용되며{" "}
					</span>
					<span
						style={{
							color: "#505050",
							fontSize: "20px",
							fontFamily: "Pretendard Medium",
							fontWeight: "normal",
						}}
					>
						정보를 전해요.
					</span>
					<h1></h1>
					<span
						style={{
							color: "#505050",
							fontSize: "20px",
							fontFamily: "Pretendard Medium",
							fontWeight: "normal",
						}}
					>
						성격을 설정할 때에도 사용할 수 있어요.
					</span>
				</div>
			</div>

			<button
				style={{
					backgroundColor: "#8A50FF",
					color: "white",
					border: "none",
					borderRadius: "50px",
					padding: "15px 30px",
					fontSize: "20px",
					cursor: "pointer",
					marginTop: "120px",
				}}
			>
				더 확인하기
			</button>

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					marginTop: "160px",
					backgroundImage: 'url("/images/main/background.png")',
					backgroundRepeat: "no-repeat",
					backgroundSize: "100% 100%",
					backgroundPosition: "center",
					width: "100%",
					padding: "20px",
					position: "relative",
				}}
			>
				<div
					style={{
						flex: 2,
						textAlign: "left",
						paddingRight: "20px",
						position: "relative",
						top: "-100px",
					}}
				>
					<div
						style={{
							color: "rgba(255, 255, 255, 0.5)",
							fontSize: "30px",
							fontFamily: "Pretendard Bold",
							fontWeight: "bold",
							marginBottom: "10px",
						}}
					>
						입양절차는 이렇게 진행됩니다.
					</div>
					<div
						style={{
							color: "rgba(255, 255, 255, 1)",
							fontSize: "70px",
							fontFamily: "Pretendard Bold",
							fontWeight: "bold",
						}}
					>
						기존 입양체계에
					</div>
					<div
						style={{
							color: "rgba(255, 255, 255, 1)",
							fontSize: "70px",
							fontFamily: "Pretendard Bold",
							fontWeight: "bold",
						}}
					>
						새로운 변화를 던져요
					</div>
				</div>
				<div
					style={{
						flex: 1,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<img
						src="/images/main/adoption.png"
						alt="First Dog"
						style={{
							width: "100%",
							maxWidth: "300px",
							height: "auto",
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Main;
