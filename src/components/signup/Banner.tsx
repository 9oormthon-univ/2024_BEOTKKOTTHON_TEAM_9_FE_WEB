import React from "react";
import Image from "next/image"; // Import the 'Image' component from the correct library

const Banner = () => {
	return (
		<div className="w-full mt-8 mb-8 px-4 sm:px-8 lg:px-[50px]">
			<div className="w-full">
				<Image
					src="/images/signup/banner.png"
					alt="Signup Banner"
					width={1803}
					height={260}
					layout="responsive"
					className="w-full"
				/>
			</div>
		</div>
	);
};

export default Banner;
