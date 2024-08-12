// src/components/TableComponent.jsx
import React from 'react';
// import coverProposal from '../../assets/dokumen/COVER_PROPOSAL_KUPPAT'
const data = [
  {id: 1, name: 'COVER PROPOSAL', desc: 'Cover Proposal Agustusan KUPPAT', fileUrl: '../../assets/dokumen/COVER_PROPOSAL_KUPPAT.docx'},
  {id: 2, name: 'PROPOSAL KUPPAT', desc: 'Proposal Kegiatan Agustusan KUPPAT', fileUrl: '../../assets/dokumen/PROPOSAL_KEGIATAN.docx'},
  
  // Tambahkan data lainnya jika diperlukan
];

const TableComponent = () => {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-screen min-h-screen flex justify-center font-sans overflow-hidden">
        <div className="w-full lg:w-5/6">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-[#111827] text-white uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">ID</th>
                  <th className="py-3 px-6 text-left">Nama</th>
                  <th className="py-3 px-6 text-left">Deskripsi</th>
                  <th className="py-3 px-6 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {data.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="font-medium">{item.id}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <span>{item.desc}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <a href={item.fileUrl} download className="text-blue-500 hover:text-blue-700">
                          Download
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
