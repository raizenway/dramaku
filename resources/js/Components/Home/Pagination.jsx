import React from 'react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    const maxPagesToShow = 5;
    let startPage, endPage;

    if (totalPages <= maxPagesToShow) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= Math.ceil(maxPagesToShow / 2)) {
        startPage = 1;
        endPage = maxPagesToShow;
      } else if (currentPage + Math.floor(maxPagesToShow / 2) >= totalPages) {
        startPage = totalPages - maxPagesToShow + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.floor(maxPagesToShow / 2);
        endPage = currentPage + Math.floor(maxPagesToShow / 2);
      }
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-row gap-4 justify-center">
      {/* Previous Button */}
      <a
        href="javascript:void(0)"
        onClick={() => onPageChange(currentPage - 1)}
        className={`mb-3 bg-primary/[0.08] inline-block rounded-[5px] p-4 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white ${
          currentPage === 1 ? 'pointer-events-none opacity-50' : ''
        }`}
      >
        &lt;
      </a>

      {/* Page Numbers */}
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

      {/* Next Button */}
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
