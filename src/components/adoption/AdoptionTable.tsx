"use client";
import { Adoption } from "@/interfaces/adoption/types";
import React, { useState } from "react";

const AdoptionTable: React.FC<{ adoptions: Adoption[] }> = ({ adoptions }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedAdoptions, setSelectedAdoptions] = useState<Set<number>>(
		new Set()
	);
	const itemsPerPage = 5;
	const totalPages = Math.ceil(adoptions.length / itemsPerPage);

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = adoptions.slice(indexOfFirstItem, indexOfLastItem);

	const handlePageChange = (newPage: number) => setCurrentPage(newPage);
	const toggleAdoptionSelection = (id: number) => {
		const newSelection = new Set(selectedAdoptions);
		if (newSelection.has(id)) {
			newSelection.delete(id);
		} else {
			newSelection.add(id);
		}
		setSelectedAdoptions(newSelection);
	};
	const toggleAllAdoptions = () => {
		if (selectedAdoptions.size === currentItems.length) {
			setSelectedAdoptions(new Set());
		} else {
			const newSelection = new Set<number>();
			currentItems.forEach((adoption) => newSelection.add(adoption.id));
			setSelectedAdoptions(newSelection);
		}
	};
	return (
		<div className="w-full px-4 md:px-0 overflow-x-auto">
			<h1 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
				보호견 리스트
			</h1>
			<table
				className="min-w-full text-center text-sm md:text-base"
				style={{ backgroundColor: "rgba(249, 247, 255, 0.5)" }}
			>
				<thead>
					<tr>
						<th
							className="p-2 md:p-3"
							style={{ borderBottom: "1px solid #C7C7C7" }}
						>
							<input
								type="checkbox"
								onChange={toggleAllAdoptions}
								checked={
									selectedAdoptions.size ===
									currentItems.length
								}
							/>
						</th>
						<th
							className="font-semibold text-[#787878] p-2 md:p-3 truncate"
							style={{ borderBottom: "1px solid #C7C7C7" }}
						>
							공고번호
						</th>
						<th
							className="font-semibold text-[#787878] p-2 md:p-3 truncate"
							style={{ borderBottom: "1px solid #C7C7C7" }}
						>
							이름
						</th>
						<th
							className="font-semibold text-[#787878] p-2 md:p-3 truncate"
							style={{ borderBottom: "1px solid #C7C7C7" }}
						>
							견종
						</th>
						<th
							className="font-semibold text-[#787878] p-2 md:p-3 truncate"
							style={{ borderBottom: "1px solid #C7C7C7" }}
						>
							성별
						</th>
						<th
							className="font-semibold text-[#787878] p-2 md:p-3 truncate"
							style={{ borderBottom: "1px solid #C7C7C7" }}
						>
							특성
						</th>
						<th
							className="font-semibold text-[#787878] p-2 md:p-3 truncate"
							style={{ borderBottom: "1px solid #C7C7C7" }}
						>
							등록일
						</th>
						<th
							className="font-semibold text-[#787878] p-2 md:p-3 truncate"
							style={{ borderBottom: "1px solid #C7C7C7" }}
						>
							신청현황
						</th>
					</tr>
				</thead>
				<tbody>
					{currentItems.map((adoption, index) => (
						<tr key={adoption.id}>
							<td
								className="p-2 md:p-3"
								style={{ borderBottom: "1px solid #C7C7C7" }}
							>
								<input
									type="checkbox"
									checked={selectedAdoptions.has(adoption.id)}
									onChange={() =>
										toggleAdoptionSelection(adoption.id)
									}
								/>
							</td>
							<td
								className="p-2 md:p-3 truncate max-w-[100px]"
								style={{ borderBottom: "1px solid #C7C7C7" }}
							>
								{adoption.id}
							</td>
							<td
								className="p-2 md:p-3 truncate max-w-[100px]"
								style={{ borderBottom: "1px solid #C7C7C7" }}
							>
								{adoption.name}
							</td>
							<td
								className="p-2 md:p-3 truncate max-w-[100px]"
								style={{ borderBottom: "1px solid #C7C7C7" }}
							>
								{adoption.breed}
							</td>
							<td
								className="p-2 md:p-3 truncate max-w-[50px]"
								style={{ borderBottom: "1px solid #C7C7C7" }}
							>
								{adoption.gender}
							</td>
							<td
								className="p-2 md:p-3 truncate max-w-[150px]"
								style={{ borderBottom: "1px solid #C7C7C7" }}
							>
								{adoption.characteristic}
							</td>
							<td
								className="p-2 md:p-3 truncate max-w-[100px]"
								style={{ borderBottom: "1px solid #C7C7C7" }}
							>
								{adoption.date}
							</td>
							<td
								className="p-2 md:p-3 truncate max-w-[100px]"
								style={{ borderBottom: "1px solid #C7C7C7" }}
							>
								<div
									style={{
										display: "inline-flex",
										alignItems: "center",
										justifyContent: "center",
										width: "38.75px",
										height: "25px",
										backgroundColor: "#8A50FF",
										borderRadius: "12.5px",
										color: "white",
									}}
								>
									{adoption.status}
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="flex flex-col md:flex-row justify-between my-4 mt-10">
				<button className="bg-[#C7C7C7] text-white py-2 px-4 rounded mb-2 md:mb-0">
					삭제하기
				</button>
				<button className="bg-[#8A50FF] text-white py-2 px-4 rounded">
					새로 추가하기
				</button>
			</div>
			<div className="flex justify-between items-center my-4"></div>
		</div>
	);
};

export default AdoptionTable;
