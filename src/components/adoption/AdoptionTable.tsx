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
			<table className="min-w-full divide-y divide-gray-200 bg-[#FCFBFF] text-center text-sm md:text-base">
				<thead className="bg-gray-50">
					<tr>
						<th className="p-2 md:p-3">
							<input
								type="checkbox"
								onChange={toggleAllAdoptions}
								checked={
									selectedAdoptions.size ===
									currentItems.length
								}
							/>
						</th>
						<th className="font-semibold text-[#787878] p-2 md:p-3 truncate">
							공고번호
						</th>
						<th className="font-semibold text-[#787878] p-2 md:p-3 truncate">
							이름
						</th>
						<th className="font-semibold text-[#787878] p-2 md:p-3 truncate">
							견종
						</th>
						<th className="font-semibold text-[#787878] p-2 md:p-3 truncate">
							성별
						</th>
						<th className="font-semibold text-[#787878] p-2 md:p-3 truncate">
							특성
						</th>
						<th className="font-semibold text-[#787878] p-2 md:p-3 truncate">
							등록일
						</th>
						<th className="font-semibold text-[#787878] p-2 md:p-3 truncate">
							신청현황
						</th>
					</tr>
				</thead>
				<tbody>
					{currentItems.map((adoption, index) => (
						<tr
							key={adoption.id}
							className={`border-b ${
								index % 2 === 0 ? "bg-white" : "bg-gray-50"
							}`}
						>
							<td className="p-2 md:p-3">
								<input
									type="checkbox"
									checked={selectedAdoptions.has(adoption.id)}
									onChange={() =>
										toggleAdoptionSelection(adoption.id)
									}
								/>
							</td>
							<td className="p-2 md:p-3 truncate max-w-[100px]">
								{adoption.id}
							</td>
							<td className="p-2 md:p-3 truncate max-w-[100px]">
								{adoption.name}
							</td>
							<td className="p-2 md:p-3 truncate max-w-[100px]">
								{adoption.breed}
							</td>
							<td className="p-2 md:p-3 truncate max-w-[50px]">
								{adoption.gender}
							</td>
							<td className="p-2 md:p-3 truncate max-w-[150px]">
								{adoption.characteristic}
							</td>
							<td className="p-2 md:p-3 truncate max-w-[100px]">
								{adoption.date}
							</td>
							<td className="p-2 md:p-3 truncate max-w-[100px]">
								{adoption.status}
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="flex flex-col md:flex-row justify-between my-4">
				<button className="bg-[#C1C1C1] text-white py-2 px-4 rounded mb-2 md:mb-0">
					삭제하기
				</button>
				<button className="bg-[#8A50FF] text-white py-2 px-4 rounded">
					새로 추가하기
				</button>
			</div>
			<div className="flex justify-between items-center my-4">
				<button
					className="bg-[#C1C1C1] text-white py-2 px-4 rounded"
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
				>
					이전 페이지
				</button>
				<button
					className="bg-[#8A50FF] text-white py-2 px-4 rounded"
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					다음 페이지
				</button>
			</div>
		</div>
	);
};

export default AdoptionTable;
