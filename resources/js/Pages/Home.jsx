import { usePage } from '@inertiajs/react';
import React, { useState } from 'react';
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import MovieCard from "../Components/Home/MovieCard";
import Sidebar from '../Components/Home/Sidebar';
import Filter from "../Components/Home/Filter";
import Pagination from'../Components/Home/Pagination';

function showFilter () {
    const filterMobile = document.querySelector('.filterMobile');
    const filterButton = document.querySelector('.filterButton');
    const hideFilterButton = document.querySelector('.hideFilterButton');
  
    console.log(filterMobile, filterButton, hideFilterButton);
  
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


    
export default function Home() {

  const { movies } = usePage().props;
  const { filter } = usePage().props;
  console.log("movie", movies);


    // Pagination logic
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2; // Menampilkan satu item per halaman
  
    // Menghitung total pages
    const totalPages = Math.ceil(movies.length / itemsPerPage);
  
    // Mendapatkan index film yang ditampilkan pada halaman saat ini
    const indexOfLastMovie = currentPage * itemsPerPage;
    const indexOfFirstMovie = indexOfLastMovie - itemsPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  
    const handlePageChange = (page) => {
      if (page < 1 || page > totalPages) return; // Cek jika page valid
      setCurrentPage(page);
    };


    console.log("Movie data:", movies);

    return (
    <>
      <Navbar />
      <div className="flex mt-16 justify-center">
      <Sidebar />
      {/* konten */}
      <div className="w-11/12 pb-10 lg:pb-20 lg:pt-[]">
        <div className="container mx-auto">
          <Filter
          showFilter={showFilter}
          hideFilter={hideFilter}
          showSort={showSort}
          hideSort={hideSort} />
          {/* FILM */}
          <div className="-mx-4 flex flex-wrap mt-14">
            {currentMovies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            year={movie.year}
                            genres={movie.genres}
                            poster={movie.photo_url}
                            rating={movie.rating}
                        />
                    ))}
          </div>
        </div>
        {/* Pagination */}
        <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}/>
      </div>
        </div>
        < Footer />
    </>
    
      );
}
