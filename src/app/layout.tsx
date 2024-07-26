"use client";

import "../styles/reset.css";
import "../styles/globals.css";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { NotoSans } from "./fonts";
import VerticalNavigation from "../components/navigation";
import Header from "../components/header";
import { NavigationProvider } from "../context/NavigationContext";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const notNaviPage =
		pathname === "/login" ||
		pathname === "/signup" ||
		pathname === "/signup/step2" ||
		pathname === "/signup/step3" ||
		pathname === "/signup/step4";

	return (
		<html lang="ko" className="w-full h-full bg-[#fff]">
			<body
				className={clsx(
					"pretendard",
					"min-h-screen w-full bg-[#FFFFFF] text-black flex flex-col"
				)}
			>
				{notNaviPage ? (
					children
				) : (
					<NavigationProvider>
						<div className="flex flex-col flex-grow overflow-hidden">
							<div className="relative z-20">
								<Header />
							</div>
							<div className="flex overflow-hidden z-10">
								<VerticalNavigation />
								<main className="flex-grow lg:ml-64 z-0">
									{children}
								</main>
							</div>
						</div>
					</NavigationProvider>
				)}
			</body>
		</html>
	);
}
