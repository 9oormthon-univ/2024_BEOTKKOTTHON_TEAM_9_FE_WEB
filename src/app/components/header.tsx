// src/components/header.tsx
"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useNavigation } from "../../context/NavigationContext";
import { FiMenu } from "react-icons/fi";

const Header = () => {
	const pathname = usePathname();
	const userName = "사용자 이름";
	const { toggleNav } = useNavigation();

	const navigationName: { [key: string]: string } = {
		"/adoption": "입양신청 관리",
		"/shelter": "기관정보 관리",
	};

	const currentNavigationName = navigationName[pathname] || "기본 페이지";

	return (
		<div
			className="fixed top-0 left-0 w-full h-12 bg-white text-black flex items-center px-4 z-30 shadow"
			style={{ boxShadow: "0 1px 4px rgba(0, 0, 0, 0.25)" }}
		>
			<div className="flex-2 flex items-center mr-10">
				<Image
					src="/svg/navi/logo.svg"
					alt="Logo"
					width={207}
					height={30}
				/>
			</div>
			<div className="flex-2 text-center H6 font-bold">
				{currentNavigationName}
			</div>
			<div className="flex-1 text-right flex items-center justify-end">
				<span className="mr-4">{userName}</span>
				<button onClick={toggleNav} className="lg:hidden">
					<button onClick={toggleNav} className="lg:hidden">
						<FiMenu size={24} color="#5326AC" />
					</button>
				</button>
			</div>
		</div>
	);
};

export default Header;
