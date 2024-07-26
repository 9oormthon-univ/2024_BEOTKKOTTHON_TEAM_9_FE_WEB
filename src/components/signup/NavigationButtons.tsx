import Link from "next/link";
import React from "react";

const NavigationButtons = () => {
	return (
		<div className="flex w-full max-w-md mt-8 justify-center mb-8">
			<Link href="/login">
				<button className="px-6 py-2 bg-gray-200 text-gray-700 rounded mr-2">
					이전
				</button>
			</Link>
			<Link href="/signup/step3">
				<button className="px-6 py-2 bg-[#A273FF] text-white rounded">
					다음
				</button>
			</Link>
		</div>
	);
};

export default NavigationButtons;
