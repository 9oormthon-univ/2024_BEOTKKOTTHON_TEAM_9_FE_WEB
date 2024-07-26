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
		<div className="p-1 w-4/5 mx-auto">
			<div className="flex justify-between items-center py-10">
				<h1 className="text-2xl font-semibold">보호견 리스트</h1>
				<div
					className="bg-[#F9F7FF] rounded-full flex items-center p-2"
					style={{ borderRadius: "21.5px" }}
				>
					<input
						type="text"
						placeholder="리스트 검색"
						className="border-none bg-transparent outline-none"
					/>
					<img src="/search.svg" alt="Search" className="mr-2" />
				</div>
			</div>
			<hr className="my-1" />
			<table className="min-w-full divide-y divide-gray-200 bg-[#FCFBFF] text-center">
				<thead className="bg-gray-50">
					<tr>
						<th>
							<input
								type="checkbox"
								onChange={toggleAllAdoptions}
								checked={
									selectedAdoptions.size ===
									currentItems.length
								}
							/>
						</th>
						<th className="font-semibold text-1xl text-[#787878]">
							공고번호
						</th>
						<th className="font-semibold text-1xl text-[#787878]">
							이름
						</th>
						<th className="font-semibold text-1xl text-[#787878]">
							견종
						</th>
						<th className="font-semibold text-1xl text-[#787878]">
							성별
						</th>
						<th className="font-semibold text-1xl text-[#787878]">
							특성
						</th>
						<th className="font-semibold text-1xl text-[#787878]">
							등록일
						</th>
						<th className="font-semibold text-1xl text-[#787878]">
							신청현황
						</th>
					</tr>
				</thead>
				<tbody>
					{currentItems.map((adoption, index) => (
						<tr
							key={adoption.id}
							className={`border-b-2 ${
								index % 2 === 0 ? "bg-white" : "bg-gray-50"
							}`}
						>
							<td>
								<input
									type="checkbox"
									checked={selectedAdoptions.has(adoption.id)}
									onChange={() =>
										toggleAdoptionSelection(adoption.id)
									}
								/>
							</td>
							<td className="py-4">{adoption.id}</td>
							<td>{adoption.name}</td>
							<td>{adoption.breed}</td>
							<td>{adoption.gender}</td>
							<td>{adoption.characteristic}</td>
							<td>{adoption.date}</td>
							<td>{adoption.status}</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="flex justify-between my-4">
				<button className="bg-[#C1C1C1] text-white py-2 px-4 rounded">
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
