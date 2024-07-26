import "../styles/reset.css";
import "../styles/globals.css";
import clsx from "clsx";
import Script from "next/script";
import { NotoSans } from "./fonts";
import VerticalNavigation from "./components/navigation";
import Header from "./components/header";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ko" className="flex w-screen h-screen bg-[#fff]">
			<body
				className={clsx(
					[NotoSans.className],
					"min-h-screen w-full shadow-xl bg-[#FFFFFF] text-black flex flex-col"
				)}
			>
				<Header />
				<div className="flex flex-grow overflow-hidden">
					<VerticalNavigation />
					{/* Main content area, dynamically adjusting for the header and navigation width */}
					{/* Adjusting margin-left to accommodate navigation width at different screen sizes */}
					<div
						className="flex-grow mt-12"
						style={{
							marginLeft: "calc(5rem + 18%)",
							marginRight: "2%",
							paddingTop: "1rem",
						}}
					>
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
