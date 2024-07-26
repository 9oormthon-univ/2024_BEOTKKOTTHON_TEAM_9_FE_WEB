// src/components/navigation.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavigation } from "../context/NavigationContext";

interface NavItem {
	label: string;
	link: string;
	icon_w: string;
	icon_b: string;
}

const selectStyle = "bg-[#8A50FF] text-white font-bold";

const VerticalNavigation = () => {
	const pathname = usePathname();
	const { isNavOpen, toggleNav } = useNavigation();

	const NavigationList: NavItem[] = [
		{
			label: "입양신청관리",
			link: "/adoption",
			icon_w: "/svg/navi/1_w.svg",
			icon_b: "/svg/navi/1_b.svg",
		},
		{
			label: "기관정보 관리",
			link: "/shelter",
			icon_w: "/svg/navi/2_w.svg",
			icon_b: "/svg/navi/2_b.svg",
		},
	];

	return (
		<>
			<div
				className={`fixed inset-0 bg-black bg-opacity-35 z-20 transition-opacity duration-300 lg:hidden ${
					isNavOpen ? "opacity-100 visible" : "opacity-0 invisible"
				}`}
				onClick={toggleNav}
			></div>
			<div
				className={`fixed top-0 left-0 h-full w-64 bg-[#F7F7F9] text-black z-30 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
					isNavOpen ? "translate-x-0" : "-translate-x-full"
				}`}
				style={{ boxShadow: "0 1px 4px rgba(0, 0, 0, 0.25)" }}
			>
				<div className="p-5">
					<div className="text-xl font-bold mt-20 ml-10 text-[#8A50FF]">
						보호소 이름
					</div>
				</div>
				<ul className="mt-5">
					{NavigationList.map((item, index) => (
						<li
							key={index}
							className={`flex items-center my-2 ${
								pathname === item.link
									? selectStyle
									: "hover:bg-[#8A50FF] hover:text-white"
							}`}
							onClick={toggleNav}
						>
							<img
								src={
									pathname === item.link
										? item.icon_w
										: item.icon_b
								}
								className="h-6 w-6 ml-5"
								alt={`${item.label} Icon`}
							/>
							<Link href={item.link}>
								<span className="block p-4 flex-grow">
									{item.label}
								</span>
							</Link>
						</li>
					))}
				</ul>
				<div className="absolute bottom-0 mb-10 ml-20 mr-20">
					<img
						src="/svg/navi/dog.png"
						alt="Footer Image"
						width={90}
						height={90}
					/>
					<div className="text-xs text-center mt-2">
						사용에 관하여 어려움을 겪고 있나요?
					</div>
				</div>
			</div>
		</>
	);
};

export default VerticalNavigation;
