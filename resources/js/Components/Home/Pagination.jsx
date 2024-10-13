import React from 'react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-row gap-4 justify-center">
      {/* Tombol Sebelumnya */}
      <a
        href="javascript:void(0)"
        onClick={() => onPageChange(currentPage - 1)}
        className={`mb-3 bg-primary/[0.08] inline-block rounded-[5px] p-4 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white ${
          currentPage === 1 ? 'pointer-events-none opacity-50' : ''
        }`}
      >
        &lt;
      </a>

      {/* Nomor Halaman */}
      {pageNumbers.map((number) => (
        <a
          key={number}
          href="javascript:void(0)"
          onClick={() => onPageChange(number)}
          className={`mb-3 bg-primary/[0.08] inline-block rounded-[5px] p-4 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white ${
            currentPage === number ? 'bg-primary hover:bg-primary/[0.08] text-dark-5 hover:text-dark-5' : ''
          }`}
        >
          {number}
        </a>
      ))}

      {/* Tombol Selanjutnya */}
      <a
        href="javascript:void(0)"
        onClick={() => onPageChange(currentPage + 1)}
        className={`mb-3 bg-primary/[0.08] inline-block rounded-[5px] p-4 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white ${
          currentPage === totalPages ? 'pointer-events-none opacity-50' : ''
        }`}
      >
        &gt;
      </a>
    </div>
  );
}
