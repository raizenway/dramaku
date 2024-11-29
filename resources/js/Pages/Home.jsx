import { usePage } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import MovieCard from "../Components/Home/MovieCard";
import Sidebar from '../Components/Home/Sidebar';
import Filter from "../Components/Home/Filter";
import Pagination from '../Components/Home/Pagination';


export default function Home() {
  
  const { filters } = usePage().props;
  console.log("filters at home: ", filters);
  const { movies } = usePage().props;
  const { countries } = usePage().props;
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState({
    year: '',
    genre: '',
    availability: '',
    award: ''
  });
  const itemsPerPage = 10;

  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
  const indexOfLastMovie = currentPage * itemsPerPage;
  const indexOfFirstMovie = indexOfLastMovie - itemsPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountrySelect = (countries) => {
    setSelectedCountry(countries);
    setCurrentPage(1);
  }

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterSubmit = (filter) => {
    setSelectedFilter(filter);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (!movies || movies.length === 0) return;

    const filtered = movies.filter((movie) => {
      const matchesCountry = !selectedCountry || movie.country === selectedCountry;
      
      const matchesSearch =
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.actors.some((actor) =>
          actor.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesFilter =
        (!selectedFilter.year || movie.year === parseInt(selectedFilter.year)) &&
        (!selectedFilter.genre || movie.genres.includes(selectedFilter.genre)) &&
        (!selectedFilter.availability || movie.availability.includes(selectedFilter.availability)) &&
        (!selectedFilter.award ||
          (selectedFilter.award === 'Yes' && movie.awards.length > 0) || 
          (selectedFilter.award === 'No' && movie.awards.length === 0));

      return matchesSearch && matchesFilter && matchesCountry;
      
    });

    setFilteredMovies(filtered);
  }, [searchQuery, selectedFilter, selectedCountry, movies]);

  return (
    <>
      <Navbar searchQuery={searchQuery} handleSearchChange={handleSearchChange}/>
      <div className="flex mt-16 justify-center">
        <Sidebar countries={countries} onCountrySelect={handleCountrySelect} selectedCountry={selectedCountry}/>
        <div className="w-11/12 pb-10 lg:pb-20">
          <div className="container mx-auto">
            <Filter filters={filters} onFilterSubmit={handleFilterSubmit} />
            <div className="-mx-4 flex flex-wrap mt-14">
              {currentMovies.length > 0 ? (
                currentMovies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    year={movie.year}
                    genres={movie.genres}
                    poster={movie.photo_url}
                    rating={movie.rating}
                  />
                ))
              ) : (
                <p className="text-center text-white">No movies found.</p>
              )}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
