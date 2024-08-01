import React, { useState, useEffect, useRef, useCallback } from "react";

declare global {
	interface Window {
		daum: any;
		kakao: {
			maps: {
				services: {
					Geocoder: new () => any;
					Status: { OK: string };
				};
			};
		};
	}
}

interface AddressInputProps {
	value: string;
	onChange: (address: string, latitude: string, longitude: string) => void;
}

const AddressInput: React.FC<AddressInputProps> = ({ value, onChange }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isKakaoLoaded, setIsKakaoLoaded] = useState(false);
	const [isDaumLoaded, setIsDaumLoaded] = useState(false);
	const postcodeRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const apiKey = process.env.NEXT_PUBLIC_KAKAO_MAPS_APP_KEY;
		if (!apiKey) {
			console.error("Kakao Maps API key is not set");
			return;
		}
		console.log(`API Key: ${apiKey}`);
		loadKakaoMapsScript();
		loadDaumPostcodeScript();
	}, []);

	const loadKakaoMapsScript = () => {
		const script = document.createElement("script");
		script.async = true;
		script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAPS_APP_KEY}&libraries=services`;
		script.onerror = () =>
			console.error("Failed to load Kakao Maps script");
		document.head.appendChild(script);

		script.onload = () => {
			console.log("Kakao Maps API loaded");
			setIsKakaoLoaded(true);
		};
	};

	const loadDaumPostcodeScript = () => {
		if (document.getElementById("daumPostcode")) {
			setIsDaumLoaded(true);
			return;
		}

		const script = document.createElement("script");
		script.id = "daumPostcode";
		script.async = true;
		script.src =
			"//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
		script.onerror = () =>
			console.error("Failed to load Daum Postcode script");
		document.head.appendChild(script);

		script.onload = () => {
			console.log("Daum Postcode API loaded");
			setIsDaumLoaded(true);
		};
	};

	const getAddressCoords = (
		address: string
	): Promise<{ lat: number; lng: number }> => {
		return new Promise((resolve, reject) => {
			if (!isKakaoLoaded) {
				reject(new Error("Kakao Maps API not loaded"));
				return;
			}

			if (!window.kakao?.maps?.services?.Geocoder) {
				reject(new Error("Kakao Maps Geocoder service not available"));
				return;
			}

			const geocoder = new window.kakao.maps.services.Geocoder();
			geocoder.addressSearch(address, (result: any, status: any) => {
				if (status === window.kakao.maps.services.Status.OK) {
					resolve({
						lat: Number(result[0].y),
						lng: Number(result[0].x),
					});
				} else {
					reject(new Error(`Geocoding failed: ${status}`));
				}
			});
		});
	};

	const handlePostcode = useCallback(() => {
		if (!isDaumLoaded) {
			console.error("Daum Postcode script not loaded");
			return;
		}

		if (!window.daum?.Postcode) {
			console.error("Daum Postcode object not found");
			return;
		}

		try {
			new window.daum.Postcode({
				oncomplete: async (data: any) => {
					let fullAddress = data.address;
					let extraAddress = "";

					if (data.addressType === "R") {
						if (data.bname !== "") {
							extraAddress += data.bname;
						}
						if (data.buildingName !== "") {
							extraAddress +=
								extraAddress !== ""
									? `, ${data.buildingName}`
									: data.buildingName;
						}
						fullAddress +=
							extraAddress !== "" ? ` (${extraAddress})` : "";
					}

					try {
						if (!isKakaoLoaded) {
							throw new Error("Kakao Maps API not loaded");
						}
						const coords = await getAddressCoords(fullAddress);
						onChange(
							fullAddress,
							coords.lat.toString(),
							coords.lng.toString()
						);
					} catch (error) {
						console.error("Failed to get coordinates:", error);
						onChange(fullAddress, "0", "0");
					}

					setIsModalOpen(false);
				},
				width: "100%",
				height: "100%",
			}).embed(postcodeRef.current);
		} catch (error) {
			console.error("Error initializing Daum Postcode:", error);
		}
	}, [isDaumLoaded, isKakaoLoaded, onChange]);

	useEffect(() => {
		if (isModalOpen && isDaumLoaded) {
			handlePostcode();
		}
	}, [isModalOpen, isDaumLoaded, handlePostcode]);

	return (
		<div className="flex flex-col">
			<label
				htmlFor="location"
				className="mb-2 font-medium text-gray-700"
			>
				<span className="text-[#FF0000] mr-1">*</span>
				기관 위치
			</label>
			<div className="flex">
				<input
					type="text"
					id="location"
					name="location"
					value={value}
					readOnly
					className="p-2 border border-gray-300 rounded-l-md flex-grow focus:ring-[#8A50FF] focus:border-[#8A50FF]"
				/>
				<button
					type="button"
					onClick={() => setIsModalOpen(true)}
					className="p-2 bg-[#8A50FF] text-white rounded-r-md"
				>
					주소 검색
				</button>
			</div>
			{isModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
					<div className="bg-white p-4 rounded-md w-full max-w-md">
						<div ref={postcodeRef} style={{ height: "400px" }} />
						<button
							onClick={() => setIsModalOpen(false)}
							className="mt-4 p-2 bg-gray-200 rounded-md w-full"
						>
							닫기
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default AddressInput;
