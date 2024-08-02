"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AdoptionItem } from "@/interfaces/adoption/types";

const AdoptionTable: React.FC<{ adoptions: AdoptionItem[] }> = ({
	adoptions = [],
}) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedAdoptions, setSelectedAdoptions] = useState<Set<number>>(
		new Set()
	);
	const [currentItems, setCurrentItems] = useState<AdoptionItem[]>([]);
	const itemsPerPage = 5;

	useEffect(() => {
		const indexOfLastItem = currentPage * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		setCurrentItems(adoptions.slice(indexOfFirstItem, indexOfLastItem));
	}, [adoptions, currentPage]);

	const toggleAdoptionSelection = (id: number) => {
		setSelectedAdoptions((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(id)) {
				newSet.delete(id);
			} else {
				newSet.add(id);
			}
			return newSet;
		});
	};

	const toggleAllAdoptions = () => {
		if (selectedAdoptions.size === currentItems.length) {
			setSelectedAdoptions(new Set());
		} else {
			setSelectedAdoptions(
				new Set(currentItems.map((item) => item.postId))
			);
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
								checked={
									selectedAdoptions.size ===
									currentItems.length
								}
								onChange={toggleAllAdoptions}
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
							성별
						</th>
						<th
							className="font-semibold text-[#787878] p-2 md:p-3 truncate"
							style={{ borderBottom: "1px solid #C7C7C7" }}
						>
							특이사항
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
					{currentItems.map((adoption) => (
						<Link
							href={`/adoption/${adoption.postId}`}
							key={adoption.postId}
							passHref
							legacyBehavior
						>
							<tr
								key={adoption.postId}
								className="cursor-pointer hover:bg-[#F0E7FF]"
							>
								<td
									className="p-2 md:p-3"
									style={{
										borderBottom: "1px solid #C7C7C7",
									}}
								>
									<input
										type="checkbox"
										checked={selectedAdoptions.has(
											adoption.postId
										)}
										onChange={() =>
											toggleAdoptionSelection(
												adoption.postId
											)
										}
										onClick={(e) => e.stopPropagation()}
									/>
								</td>
								<td
									className="p-2 md:p-3 truncate max-w-[100px]"
									style={{
										borderBottom: "1px solid #C7C7C7",
									}}
								>
									{adoption.postId}
								</td>
								<td
									className="p-2 md:p-3 truncate max-w-[100px]"
									style={{
										borderBottom: "1px solid #C7C7C7",
									}}
								>
									{adoption.name}
								</td>
								<td
									className="p-2 md:p-3 truncate max-w-[50px]"
									style={{
										borderBottom: "1px solid #C7C7C7",
									}}
								>
									{adoption.gender}
								</td>
								<td
									className="p-2 md:p-3 truncate max-w-[150px]"
									style={{
										borderBottom: "1px solid #C7C7C7",
									}}
								>
									{adoption.extra}
								</td>
								<td
									className="p-2 md:p-3 truncate max-w-[100px]"
									style={{
										borderBottom: "1px solid #C7C7C7",
									}}
								>
									{new Date(
										adoption.createdAt
									).toLocaleDateString()}
								</td>
								<td
									className="p-2 md:p-3 truncate max-w-[100px]"
									style={{
										borderBottom: "1px solid #C7C7C7",
									}}
								>
									{adoption.adoptStatusCount}
								</td>
							</tr>
						</Link>
					))}
				</tbody>
			</table>
			<div className="flex flex-col md:flex-row justify-between my-4 mt-10">
				<button className="bg-[#C7C7C7] text-white py-2 px-4 rounded mb-2 md:mb-0">
					삭제하기
				</button>
				<Link href="/adddog" className="text-[#9A9A9A] hover:underline">
					<button className="bg-[#8A50FF] text-white py-2 px-4 rounded">
						새로 추가하기
					</button>
				</Link>
			</div>
			<div className="flex justify-between items-center my-4"></div>
		</div>
	);
};

export default AdoptionTable;
