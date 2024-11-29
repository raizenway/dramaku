import React, {useState} from "react";
import Layout from "@/Components/CMS/CMSLayout";
import CMSNav from "@/Components/CMS/CMSNav";
import CMSModal from "@/Components/CMS/CMSModal"
import {router, usePage} from "@inertiajs/react"
import CMSLayout from "@/Components/CMS/CMSLayout";
import CMSTable from "@/Components/CMS/CMSTable";
import Pagination from "@/Components/Home/Pagination";

const CMSValidateShows = () => {
    const { movies } = usePage().props;
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(movies.length / itemsPerPage);
    const indexOfLastMovie = currentPage * itemsPerPage;
    const indexOfFirstMovie = indexOfLastMovie - itemsPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
    const [showSuccessMessage, setShowSuccessMessage] = useState(null);

    const showData = currentMovies.map((movie) => ({
        id: movie.id,
        title: movie.title,
        actors: movie.actors.join(", "),
        genres: movie.genres.join(", "),
        country: movie.country,
        awards: movie.awards.join(", "),
        availability: movie.availability.join(", "),
        synopsis: movie.synopsis,
        status: movie.status,
        year: movie.year,
        poster: movie.poster,
        trailerUrl: movie.trailerUrl,
        otherTitle: movie.otherTitle,
        platforms: movie.platforms        
    }));

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    }

    //Terima film
    const approveMovie = (id) => {
        router.post(`cms/movies/${id}/approve`, {}, {
            onSuccess: () => {
                setShowSuccessMessage("Movie diterima");
                window.location.reload();
            }
        })
    };

    //Tolak movie
    const rejectMovie = (id) => {
        router.post(`cms/movies/${id}/reject`, {}, {
            onSuccess: () => {
                setShowSuccessMessage("Movie ditolak");
                window.location.reload();
            }
        })
    };

    //Kolom
    const showColumns = [
        { id: "title", title: "Title" },
        { id: "otherTitle", title: "Alternative Title" },
        { id: "year", title: "Year" },
        { id: "genres", title: "Genres" },
        { id: "country", title: "Country" },
        { id: "actors", title: "Actors" },
        { id: "availability", title: "Availability" },
        { id: "awards", title: "Awards" }
    ];

    const actions = [
        {
            label: "Reject",
            className: "text-red-500 hover:text-red-700 cursor-pointer m-2",
            onClick: (movie) =>rejectMovie(movie.id)
        },
        
        {
            label: "Approve",
            className: "text-green-500 hover:text-green-700 cursor-pointer m-2",
            onClick: (movie) =>approveMovie(movie.id)
        }

    ];

    return(
        <CMSLayout title="Validate Movies">
            <CMSTable 
                columns={showColumns}
                data={showData}
                actions={actions}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
            />
        <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}        
        />

        {/* Pop-up Pesan Sukses */}
        {showSuccessMessage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h2 className="text-xl font-semibold mb-4">Success!</h2>
                        <p className="mb-4">{showSuccessMessage}</p>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setShowSuccessMessage(null)} // Menutup pop-up
                                className="py-2 px-4 text-white bg-primary rounded hover:bg-primary-dark"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </CMSLayout>
    );


};

export default CMSValidateShows;