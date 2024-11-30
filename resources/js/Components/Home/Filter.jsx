import React, { useState } from 'react';

const Filter = ({ filters, onFilterSubmit, showFilter, hideFilter, showSort, hideSort }) => {
  console.log("Filters: ", filters);

const [selectedFilter, setSelectedFilter] = useState({
  year: '',
  genre: '',
  availability: '',
  award: '',
});

  // Handle perubahan input filter
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(Filter Changed: ${name} = ${value});
    setSelectedFilter((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submit filter
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload form default
    onFilterSubmit(selectedFilter); // Mengirimkan filter ke parent component
  };

  return (
    <>
      {/* Filter Desktop */}
      <div className="hideOnMobile">
        <div className="w-full px-4">
          <div className="mb-7 mt-12 text-center">
            <form onSubmit={handleSubmit}>
              <div className="filter-options flex gap-1">
                <select
                  name="year"
                  value={selectedFilter.year}
                  onChange={handleInputChange}
                  className="flex-grow mt-1 block w-full py-2 px-3 border rounded-md"
                >
                  <option value="">Select Year</option>
                  {filters.years?.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                
                <select
                  name="genre"
                  value={selectedFilter.genre}
                  onChange={handleInputChange}
                  className="flex-grow mt-1 block w-full py-2 px-3 border rounded-md"
                >
                  <option value="">Select Genre</option>
                  {filters.genres?.map((genre) => (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  ))}
                </select>
                
                <select
                  name="availability"
                  value={selectedFilter.availability}
                  onChange={handleInputChange}
                  className="flex-grow mt-1 block w-full py-2 px-3 border rounded-md"
                >
                  <option value="">Select Platform</option>
                  {filters.availability?.map((platform) => (
                    <option key={platform} value={platform}>
                      {platform}
                    </option>
                  ))}
                </select>
                
                <select
                  name="award"
                  value={selectedFilter.award}
                  onChange={handleInputChange}
                  className="flex-grow mt-1 block w-full py-2 px-3 border rounded-md"
                >
                  <option value="">Select Award</option>
                  {filters.awards?.map((award) => (
                    <option key={award} value={award}>
                      {award}
                    </option>
                  ))}
                </select>
              </div>
                
              <button type="submit" className="w-64 mt-3 px-5 p-3 text-white bg-dark hover:bg-dark-3 rounded-md">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;