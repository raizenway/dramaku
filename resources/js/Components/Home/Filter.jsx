import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Filter = ({ onFilterSubmit, showFilter, hideFilter, showSort, hideSort }) => {
  const [filters, setFilters] = useState({
    years: [],
    genres: [],
    availability: [],
    awards: []
  });

const [selectedFilter, setSelectedFilter] = useState({
  year: '',
  genre: '',
  availability: '',
  award: '',
});

const filterOptions = {
  year: 'years',
  genre: 'genres',
  availability: 'availability',
  award: 'awards',
};


  useEffect(() => {
    axios.get('/api/filters')
      .then((response) => {
        console.log('Filters data:', response.data); // Debugging log
        setFilters(response.data);
      })
      .catch((error) => {
        console.error('Error fetching filters:', error);
      });
  }, []);
  

  // Handle perubahan input filter
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Filter Changed: ${name} = ${value}`);
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
            <div className="flex gap-1">
              {Object.keys(filterOptions).map((filter) => (
                <select
                  key={filter}
                  name={filter}
                  value={selectedFilter[filter]}
                  onChange={handleInputChange}
                  className="flex-grow mt-1 block w-full py-2 px-3 border rounded-md"
                >
                  <option value="">{filter.charAt(0).toUpperCase() + filter.slice(1)}</option>
                  {filters[filterOptions[filter]]?.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ))}
            </div>
            <button type="submit" className="w-64 mt-3 px-5 p-3 text-white bg-dark hover:bg-dark-3 rounded-md">
              Submit
            </button>
          </form>
          </div>
        </div>
      </div>

      {/* Filter Mobile */}
      <div className="hideOnDesktop">
        <div className="w-full px-4">
          <div className="mb-7 mt-12 text-center">
            <div className="flex justify-end">
              <div className="filterButton mr-3 items-center" onClick={showFilter}>
                <a href="#">Filter</a>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#111928">
                    <path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z" />
                  </svg>
                </a>
              </div>
              <div className="hideFilterButton mr-3" onClick={hideFilter}>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#111928">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </a>
              </div>
              <div className="sortButton mr-3 items-center" onClick={showSort}>
                <a href="#">Sort</a>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#111928">
                    <path d="M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z" />
                  </svg>
                </a>
              </div>
              <div className="hideSortButton mr-3" onClick={hideSort}>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#111928">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="filterMobile gap-1 sm:flex-col">
              <p className="mt-1 py-2 mr-4" style={{ textAlign: 'left' }}>
                Filtered By
              </p>

              {/* {['year', 'genre', 'availability', 'award'].map((filter) => (
                <select
                  key={filter}
                  id={filter}
                  name={filter}
                  className="flex-grow mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </option>
                  <option value="option1">[Option 1]</option>
                  <option value="option2">[Option 2]</option>
                  <option value="option3">[Option 3]</option>
                </select>
              ))} */}


              <div className="flex pt-2 justify-center mb-10">
                <a
                  href="search-result.html"
                  className="w-64 mt-3 px-5 p-3 text-base text-white text-center transition duration-300 ease-in-out border rounded-md cursor-pointer border-white bg-dark hover:bg-blue-dark"
                >
                  Submit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;

function showFilter() {
  const filterMobile = document.querySelector('.filterMobile');
  const filterButton = document.querySelector('.filterButton');
  const hideFilterButton = document.querySelector('.hideFilterButton');

  if (filterMobile && filterButton && hideFilterButton) {
    filterMobile.style.display = 'flex';
    filterButton.style.display = 'none';
    hideFilterButton.style.display = 'flex';
  } else {
    console.error('Elemen tidak ditemukan');
  }
}

function hideFilter() {
  const filterMobile = document.querySelector('.filterMobile');
  const filterButton = document.querySelector('.filterButton');
  const hideFilterButton = document.querySelector('.hideFilterButton');

  filterMobile.style.display = 'none';
  filterButton.style.display = 'flex';
  hideFilterButton.style.display = 'none';
}

function showSort() {
  const sortMobile = document.querySelector('.sortMobile');
  const sortButton = document.querySelector('.sortButton');
  const hideSortButton = document.querySelector('.hideSortButton');

  sortMobile.style.display = 'flex';
  sortButton.style.display = 'none';
  hideSortButton.style.display = 'flex';
}

function hideSort() {
  const sortMobile = document.querySelector('.sortMobile');
  const sortButton = document.querySelector('.sortButton');
  const hideSortButton = document.querySelector('.hideSortButton');

  sortMobile.style.display = 'none';
  sortButton.style.display = 'flex';
  hideSortButton.style.display = 'none';
}