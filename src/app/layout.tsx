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
		pathname === "/signup/step3";

	return (
		<html lang="ko" className="w-full h-full bg-[#fff]">
			<body
				className={clsx(
					[NotoSans.className],
					"min-h-screen w-full bg-[#FFFFFF] text-black flex flex-col"
				)}
			>
				{notNaviPage ? (
					children
				) : (
					<NavigationProvider>
						<Header />
						<div className="flex flex-grow overflow-hidden">
							<VerticalNavigation />
							<main className="flex-grow lg:ml-64">
								{children}
							</main>
						</div>
					</NavigationProvider>
				)}
			</body>
		</html>
	);
}
