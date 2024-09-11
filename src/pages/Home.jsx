import poster1 from "../assets/images/blog/poster-1.jpg";
import React from "react";

function showFilter () {
  const filterMobile = document.querySelector('.filterMobile');
  const filterButton = document.querySelector('.filterButton');
  const hideFilterButton = document.querySelector('.hideFilterButton');

  console.log(filterMobile, filterButton, hideFilterButton); // Cek apakah elemen ditemukan

  if (filterMobile && filterButton && hideFilterButton) {
    filterMobile.style.display = 'flex';
    filterButton.style.display = 'none';
    hideFilterButton.style.display = 'flex';
  } else {
    console.error('Elemen tidak ditemukan');
  }
}

function hideFilter (){
  const filterMobile = document.querySelector('.filterMobile')
  const filterButton = document.querySelector('.filterButton')
  const hideFilterButton = document.querySelector('.hideFilterButton')
  
  filterMobile.style.display = 'none'
  filterButton.style.display = 'flex'
  hideFilterButton.style.display = 'none'
}

function showSort (){
  const sortMobile = document.querySelector('.sortMobile')
  const sortButton = document.querySelector('.sortButton')
  const hideSortButton = document.querySelector('.hideSortButton')
  
  sortMobile.style.display = 'flex'
  sortButton.style.display = 'none'
  hideSortButton.style.display = 'flex'
  
}

function hideSort (){
    const sortMobile = document.querySelector('.sortMobile')
    const sortButton = document.querySelector('.sortButton')
    const hideSortButton = document.querySelector('.hideSortButton')
    
    sortMobile.style.display = 'none'
    sortButton.style.display = 'flex'
    hideSortButton.style.display = 'none'
  } 

function Home() {
  return (
    //baru
    <div className="flex mt-16 justify-center">
  {/* DESKTOP SIDEBAR*/}
  <div className="hideOnMobile w-1/10 bg-dark hide">
    <a className="mx-8 mt-8 mb-4 inline-block text-xl font-semibold text-white dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
      Admin
    </a>
    <a
      href="cms-awards.html"
      className="mx-8 flex py-2 text-base font-medium text-white hover:text-primary"
    >
      Content Management
    </a>
    <h1 className="mx-8 mt-8 mb-4 inline-block text-xl font-semibold text-white dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
      Region
    </h1>
    <a
      href="#"
      className="mx-8 flex py-2 text-base font-medium text-white hover:text-primary"
    >
      Jepang
    </a>
    <a
      href="#"
      className="mx-8 flex py-2 text-base font-medium text-white hover:text-primary"
    >
      Cina
    </a>
    <a
      href="#"
      className="mx-8 flex py-2 text-base font-medium text-white hover:text-primary"
    >
      Korea
    </a>
  </div>
  {/* MOBILE SIDEBAR*/}
  <div
    className="fixed hideOnDesktop sidebar flex-col w-full h-full hide p-10 z-50"
    style={{ backgroundColor: "rgba(17, 24, 40, 0.9)" }}
  >
    <a className="mx-8 mb-4 inline-block text-xl font-semibold text-white dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
      Admin
    </a>
    <a
      href="cms-awards.html"
      className="mx-8 flex py-2 text-base font-medium text-white hover:text-primary"
    >
      Content Management
    </a>
    <h1 className="mx-8 mt-4 mb-4 inline-block text-xl font-semibold text-white dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
      Region
    </h1>
    <a
      href="#"
      className="mx-8 flex py-2 text-base font-medium text-white hover:text-primary"
    >
      Jepang
    </a>
    <a
      href="#"
      className="mx-8 flex py-2 text-base font-medium text-white hover:text-primary"
    >
      Cina
    </a>
    <a
      href="#"
      className="mx-8 flex py-2 text-base font-medium text-white hover:text-primary"
    >
      Korea
    </a>
  </div>
  {/* konten */}
  <div className="w-9/10 pb-10 lg:pb-20 lg:pt-[]">
    <div className="container mx-auto">
      {/* FILTER MOBILE*/}
      <div className="hideOnDesktop">
        <div className="w-full px-4">
          <div className="mb-7 mt-12 text-center">
            {/* button */}
            <div className="flex justify-end">
              {/* filter */}
              <div
                className="filterButton mr-3 items-center"
                onClick={showFilter}
              >
                <a href="#">Filter</a>
                <a className="" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="30px"
                    fill="#111928"
                  >
                    <path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z" />
                  </svg>
                </a>
              </div>
              {/* hide filter */}
              <div className="hideFilterButton mr-3" onClick={hideFilter}>
                <a className="" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="30px"
                    fill="#111928"
                  >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </a>
              </div>
              {/* sort */}
              <div
                className="sortButton mr-3 items-center"
                onClick={showSort}
              >
                <a href="#">Sort</a>
                <a className="" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="30px"
                    fill="#111928"
                  >
                    <path d="M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z" />
                  </svg>
                </a>
              </div>
              {/* hide sort */}
              <div className="hideSortButton mr-3" onClick={hideSort}>
                <a className="" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="30px"
                    fill="#111928"
                  >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </a>
              </div>
            </div>
            {/* filter and sort  */}
            <div className="gap-1 sm:flex-col">
              {/* filter */}
              <div className="filterMobile gap-1 sm:flex-col">
                <p className="mt-1 py-2 mr-4" style={{ textAlign: "left" }}>
                  Filtered By
                </p>
                <select
                  id="year"
                  name="year"
                  className="flex-grow mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="" disabled="" selected="">
                    [Year]
                  </option>
                  <option value="japan">[Year]</option>
                  <option value="china">[Year]</option>
                  <option value="korea">[Year]</option>
                </select>
                <select
                  id="genre"
                  name="genre"
                  className="flex-grow mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="" disabled="" selected="">
                    Genre
                  </option>
                  <option value="japan">[Genre]</option>
                  <option value="china">[Genre]</option>
                  <option value="korea">[Genre]</option>
                </select>
                <select
                  id="status"
                  name="status"
                  className="flex-grow mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="" disabled="" selected="">
                    Status
                  </option>
                  <option value="japan">On Going</option>
                  <option value="china">Finished</option>
                  <option value="korea">Coming Soon</option>
                </select>
                <select
                  id="availability"
                  name="availability"
                  className="flex-grow mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="" disabled="" selected="">
                    Availability
                  </option>
                  <option value="japan">[Availability]</option>
                  <option value="china">[Availability]</option>
                  <option value="korea">[Availability]</option>
                </select>
                <select
                  id="award"
                  name="award"
                  className="flex-grow mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="" disabled="" selected="">
                    Award
                  </option>
                  <option value="japan">[Award]</option>
                  <option value="china">[Award]</option>
                  <option value="korea">[Award]</option>
                </select>
                {/* button */}
                <div className="flex pt-2 justify-center mb-10">
                  <a
                    href="search-result.html"
                    className="w-64 mt-3 px-5 p-3 text-base text-white text-center transition duration-300 ease-in-out border rounded-md cursor-pointer border-white bg-dark hover:bg-blue-dark"
                  >
                    Submit
                  </a>
                </div>
              </div>
              {/* sort */}
              <div className="sortMobile gap-1 p- sm:flex-col">
                <p
                  className="mt-1 py-2 ml-2 mr-4"
                  style={{ textAlign: "left" }}
                >
                  Sorted By
                </p>
                <select
                  id="sortedby"
                  name="sortedby"
                  className="flex-grow mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="alphabetics" selected="">
                    Alphabetics
                  </option>
                  <option value="release">Release</option>
                  <option value="rates">Rates</option>
                  <option value="views">Views</option>
                </select>
                <select
                  id="sort"
                  name="sort"
                  className="flex-grow mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="alphabetics" selected="">
                    Ascending
                  </option>
                  <option value="release">Descending</option>
                </select>
                {/* button */}
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
        {/* button submit */}
      </div>
      <div className="-mx-4 flex flex-wrap">
        {/* film 1 */}
        <div className="w-full px-10 md:w-1/2 lg:w-1/5">
          <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
            <div className="mb-8 overflow-hidden rounded-[5px]">
              <a href="detail-page.html" className="block">
                <img
                  src={poster1}
                  alt="image"
                  className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                />
              </a>
            </div>
            {/* title   */}
            <h3>
              <a
                href="detail-page.html"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
              >
                [Title]
              </a>
            </h3>
            <h2>
              <a
                href="javascript:void(0)"
                className="mb-4 inline-block text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
              >
                [Year]
              </a>
            </h2>
            {/* genre */}
            <div className="flex-wrap mt-1">
              <a
                href="javascript:void(0)"
                className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
            </div>
            {/* rate view */}
            <div className="flex mt-1">
              <p className="w-full text-base text-body-color dark:text-dark-6">
                Rate 3.5/5
              </p>
              <p
                className="w-full text-base text-body-color dark:text-dark-6"
                style={{ textAlign: "right" }}
              >
                19 views
              </p>
            </div>
          </div>
        </div>
        {/* film 2 */}
        <div className="w-full px-10 md:w-1/2 lg:w-1/5">
          <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
            <div className="mb-8 overflow-hidden rounded-[5px]">
              <a href="detail-page.html" className="block">
                <img
                  src={poster1}
                  alt="image"
                  className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                />
              </a>
            </div>
            {/* title   */}
            <h3>
              <a
                href="detail-page.html"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
              >
                [Title]
              </a>
            </h3>
            <h2>
              <a
                href="javascript:void(0)"
                className="mb-4 inline-block text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
              >
                [Year]
              </a>
            </h2>
            {/* genre */}
            <div className="flex-wrap mt-1">
              <a
                href="javascript:void(0)"
                className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
            </div>
            {/* rate view */}
            <div className="flex mt-1">
              <p className="w-full text-base text-body-color dark:text-dark-6">
                Rate 3.5/5
              </p>
              <p
                className="w-full text-base text-body-color dark:text-dark-6"
                style={{ textAlign: "right" }}
              >
                19 views
              </p>
            </div>
          </div>
        </div>
        {/* film 3 */}
        <div className="w-full px-10 md:w-1/2 lg:w-1/5">
          <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
            <div className="mb-8 overflow-hidden rounded-[5px]">
              <a href="detail-page.html" className="block">
                <img
                  src={poster1}
                  alt="image"
                  className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                />
              </a>
            </div>
            {/* title   */}
            <h3>
              <a
                href="detail-page.html"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
              >
                [Title]
              </a>
            </h3>
            <h2>
              <a
                href="javascript:void(0)"
                className="mb-4 inline-block text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
              >
                [Year]
              </a>
            </h2>
            {/* genre */}
            <div className="flex-wrap mt-1">
              <a
                href="javascript:void(0)"
                className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
            </div>
            {/* rate view */}
            <div className="flex mt-1">
              <p className="w-full text-base text-body-color dark:text-dark-6">
                Rate 3.5/5
              </p>
              <p
                className="w-full text-base text-body-color dark:text-dark-6"
                style={{ textAlign: "right" }}
              >
                19 views
              </p>
            </div>
          </div>
        </div>
        {/* film 4 */}
        <div className="w-full px-10 md:w-1/2 lg:w-1/5">
          <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
            <div className="mb-8 overflow-hidden rounded-[5px]">
              <a href="detail-page.html" className="block">
                <img
                  src={poster1}
                  alt="image"
                  className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                />
              </a>
            </div>
            {/* title   */}
            <h3>
              <a
                href="detail-page.html"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
              >
                [Title]
              </a>
            </h3>
            <h2>
              <a
                href="javascript:void(0)"
                className="mb-4 inline-block text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
              >
                [Year]
              </a>
            </h2>
            {/* genre */}
            <div className="flex-wrap mt-1">
              <a
                href="javascript:void(0)"
                className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
            </div>
            {/* rate view */}
            <div className="flex mt-1">
              <p className="w-full text-base text-body-color dark:text-dark-6">
                Rate 3.5/5
              </p>
              <p
                className="w-full text-base text-body-color dark:text-dark-6"
                style={{ textAlign: "right" }}
              >
                19 views
              </p>
            </div>
          </div>
        </div>
        {/* film */}
        <div className="w-full px-10 md:w-1/2 lg:w-1/5">
          <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
            <div className="mb-8 overflow-hidden rounded-[5px]">
              <a href="detail-page.html" className="block">
                <img
                  src={poster1}
                  alt="image"
                  className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                />
              </a>
            </div>
            {/* title   */}
            <h3>
              <a
                href="detail-page.html"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
              >
                [Title]
              </a>
            </h3>
            <h2>
              <a
                href="javascript:void(0)"
                className="mb-4 inline-block text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
              >
                [Year]
              </a>
            </h2>
            {/* genre */}
            <div className="flex-wrap mt-1">
              <a
                href="javascript:void(0)"
                className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
            </div>
            {/* rate view */}
            <div className="flex mt-1">
              <p className="w-full text-base text-body-color dark:text-dark-6">
                Rate 3.5/5
              </p>
              <p
                className="w-full text-base text-body-color dark:text-dark-6"
                style={{ textAlign: "right" }}
              >
                19 views
              </p>
            </div>
          </div>
        </div>
        {/* film */}
        <div className="w-full px-10 md:w-1/2 lg:w-1/5">
          <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
            <div className="mb-8 overflow-hidden rounded-[5px]">
              <a href="detail-page.html" className="block">
                <img
                  src={poster1}
                  alt="image"
                  className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                />
              </a>
            </div>
            {/* title   */}
            <h3>
              <a
                href="detail-page.html"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
              >
                [Title]
              </a>
            </h3>
            <h2>
              <a
                href="javascript:void(0)"
                className="mb-4 inline-block text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
              >
                [Year]
              </a>
            </h2>
            {/* genre */}
            <div className="flex-wrap mt-1">
              <a
                href="javascript:void(0)"
                className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
            </div>
            {/* rate view */}
            <div className="flex mt-1">
              <p className="w-full text-base text-body-color dark:text-dark-6">
                Rate 3.5/5
              </p>
              <p
                className="w-full text-base text-body-color dark:text-dark-6"
                style={{ textAlign: "right" }}
              >
                19 views
              </p>
            </div>
          </div>
        </div>
        {/* film */}
        <div className="w-full px-10 md:w-1/2 lg:w-1/5">
          <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
            <div className="mb-8 overflow-hidden rounded-[5px]">
              <a href="detail-page.html" className="block">
                <img
                  src={poster1}
                  alt="image"
                  className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                />
              </a>
            </div>
            {/* title   */}
            <h3>
              <a
                href="detail-page.html"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
              >
                [Title]
              </a>
            </h3>
            <h2>
              <a
                href="javascript:void(0)"
                className="mb-4 inline-block text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
              >
                [Year]
              </a>
            </h2>
            {/* genre */}
            <div className="flex-wrap mt-1">
              <a
                href="javascript:void(0)"
                className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
            </div>
            {/* rate view */}
            <div className="flex mt-1">
              <p className="w-full text-base text-body-color dark:text-dark-6">
                Rate 3.5/5
              </p>
              <p
                className="w-full text-base text-body-color dark:text-dark-6"
                style={{ textAlign: "right" }}
              >
                19 views
              </p>
            </div>
          </div>
        </div>
        {/* film */}
        <div className="w-full px-10 md:w-1/2 lg:w-1/5">
          <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
            <div className="mb-8 overflow-hidden rounded-[5px]">
              <a href="detail-page.html" className="block">
                <img
                  src={poster1}
                  alt="image"
                  className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                />
              </a>
            </div>
            {/* title   */}
            <h3>
              <a
                href="detail-page.html"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
              >
                [Title]
              </a>
            </h3>
            <h2>
              <a
                href="javascript:void(0)"
                className="mb-4 inline-block text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
              >
                [Year]
              </a>
            </h2>
            {/* genre */}
            <div className="flex-wrap mt-1">
              <a
                href="javascript:void(0)"
                className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
            </div>
            {/* rate view */}
            <div className="flex mt-1">
              <p className="w-full text-base text-body-color dark:text-dark-6">
                Rate 3.5/5
              </p>
              <p
                className="w-full text-base text-body-color dark:text-dark-6"
                style={{ textAlign: "right" }}
              >
                19 views
              </p>
            </div>
          </div>
        </div>
        {/* film */}
        <div className="w-full px-10 md:w-1/2 lg:w-1/5">
          <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
            <div className="mb-8 overflow-hidden rounded-[5px]">
              <a href="detail-page.html" className="block">
                <img
                  src={poster1}
                  alt="image"
                  className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                />
              </a>
            </div>
            {/* title   */}
            <h3>
              <a
                href="detail-page.html"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
              >
                [Title]
              </a>
            </h3>
            <h2>
              <a
                href="javascript:void(0)"
                className="mb-4 inline-block text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
              >
                [Year]
              </a>
            </h2>
            {/* genre */}
            <div className="flex-wrap mt-1">
              <a
                href="javascript:void(0)"
                className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
            </div>
            {/* rate view */}
            <div className="flex mt-1">
              <p className="w-full text-base text-body-color dark:text-dark-6">
                Rate 3.5/5
              </p>
              <p
                className="w-full text-base text-body-color dark:text-dark-6"
                style={{ textAlign: "right" }}
              >
                19 views
              </p>
            </div>
          </div>
        </div>
        {/* film */}
        <div className="w-full px-10 md:w-1/2 lg:w-1/5">
          <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
            <div className="mb-8 overflow-hidden rounded-[5px]">
              <a href="detail-page.html" className="block">
                <img
                  src={poster1}
                  alt="image"
                  className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                />
              </a>
            </div>
            {/* title   */}
            <h3>
              <a
                href="detail-page.html"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
              >
                [Title]
              </a>
            </h3>
            <h2>
              <a
                href="javascript:void(0)"
                className="mb-4 inline-block text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
              >
                [Year]
              </a>
            </h2>
            {/* genre */}
            <div className="flex-wrap mt-1">
              <a
                href="javascript:void(0)"
                className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
              <a
                href="javascript:void(0)"
                className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
              >
                [Genre]
              </a>
            </div>
            {/* rate view */}
            <div className="flex mt-1">
              <p className="w-full text-base text-body-color dark:text-dark-6">
                Rate 3.5/5
              </p>
              <p
                className="w-full text-base text-body-color dark:text-dark-6"
                style={{ textAlign: "right" }}
              >
                19 views
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Pagination */}
    <div className="flex flex-row gap-4 justify-center">
      <a
        href="javascript:void(0)"
        className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] p-4 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
      >
        &lt;-
      </a>
      <a
        href="javascript:void(0)"
        className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] p-4 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
      >
        1
      </a>
      <a
        href="javascript:void(0)"
        className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] p-4 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
      >
        2
      </a>
      <p className="p-4">...</p>
      <a
        href="javascript:void(0)"
        className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] p-4 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
      >
        98
      </a>
      <a
        href="javascript:void(0)"
        className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] p-4 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
      >
        99
      </a>
      <a
        href="javascript:void(0)"
        className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] p-4 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
      >
        -&gt;
      </a>
    </div>
  </div>
</div>

  );
}

export default Home;
