import React from "react";

export default function Search({ searchQuery, handleSearchChange }) {
  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Search by title/actor..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-full px-10 py-3 text-base bg-transparent border rounded-md text-white border-stroke placeholder:text-dark-6 focus:border-primary"
      />
    </div>
  );
}
