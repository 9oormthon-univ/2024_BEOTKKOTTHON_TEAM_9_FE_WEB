"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
	const pathname = usePathname(); // Use usePathname to get the current route path
	const userName = "사용자 이름"; // Example user name, replace with actual data fetching logic if needed

	// Mapping of routes to navigation names
	const navigationName = {
		"/adoption": "입양신청 관리",
		"/shelter": "기관정보 관리",
		// Add more routes as necessary
	};

	// Get the current navigation name based on the pathname
	const currentNavigationName = navigationName[pathname] || "기본 페이지";

	return (
		<div
			className="fixed top-0 left-0 w-full h-12 bg-white text-black flex items-center px-4 z-20 shadow"
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
			<div className="flex-1 text-right">{userName}</div>
		</div>
	);
};

export default Header;
