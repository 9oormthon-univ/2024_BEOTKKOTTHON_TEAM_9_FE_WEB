import React from 'react';
import { Adoption } from '../../interfaces/home/types'; // 데이터 타입

const AdoptionTable: React.FC<{ adoptions: Adoption[] }> = ({ adoptions }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th>관리번호</th>
          <th>이름</th>
          <th>견종</th>
          <th>상태</th>
          <th>등록일</th>
        </tr>
      </thead>
      <tbody>
        {adoptions.map((adoption) => (
          <tr key={adoption.id}>
            <td>{adoption.id}</td>
            <td>{adoption.name}</td>
            <td>{adoption.breed}</td>
            <td>{adoption.status}</td>
            <td>{adoption.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdoptionTable;
