import React, { useState } from "react";
import CMSLayout from "@/Components/CMS/CMSLayout";
import CMSTable from "@/Components/CMS/CMSTable";
import CMSModal from "@/Components/CMS/CMSModal";
import Pagination from "@/Components/Home/Pagination";
import { router, usePage } from "@inertiajs/react";

const CMSShows = () => {
    const { movies } = usePage().props;
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedShow, setSelectedShow] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(movies.length / itemsPerPage);

    const indexOfLastMovie = currentPage * itemsPerPage;
    const indexOfFirstMovie = indexOfLastMovie - itemsPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    const showColumns = [
        { id: "title", title: "Title", width: "w-2/12" },
        { id: "actors", title: "Actors", width: "w-2/12" },
        { id: "genres", title: "Genres", width: "w-2/12" },
        { id: "synopsis", title: "Synopsis", width: "w-fit" }
    ];

    const showData = currentMovies.map((movie) => ({
        id: movie.id,
        title: movie.title,
        actors: movie.actors.join(", "),
        genres: movie.genres.join(", "),
        synopsis: movie.synopsis.length > 255 ? movie.synopsis.slice(0, 255) + "..." : movie.synopsis,
        status: movie.status,
        year: movie.year,
        poster: movie.poster,
        trailerUrl: movie.trailerUrl,
        otherTitle: movie.otherTitle,
        platforms: movie.platforms,
    }));

    const handleDelete = (movie) => {
        if (window.confirm(`Are you sure you want to delete ${movie.title}?`)) {
            router.delete(`/cms/movies/${movie.id}`, {
                onSuccess: () => {
                    alert("Movie deleted successfully");
                    setCurrentPage(1); // Refresh atau reset halaman jika diperlukan
                },
                onError: (errors) => {
                    console.error(errors);
                }
            });
        }
    };
    
    
    const actions = [
        {
            label: "Edit",
            className: "text-blue-500 hover:underline px-1",
            onClick: (item) => {
                console.log("Editing item:", item); // Debugging untuk memastikan item.id
                if (item.id) {
                    router.get(`/cms/movies/${item.id}/edit`);
                } else {
                    console.error("Movie ID is undefined");
                }
            },
        },
        {
            label: "Delete",
            className: "text-red-500 hover:underline px-1",
            onClick: (item) => handleDelete(item),
        },
    ];
    

    const closeModal = () => setModalVisible(false);

    return (
        <CMSLayout title="Shows">
            <CMSTable 
                columns={showColumns} 
                data={showData} 
                actions={actions}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                />

            {selectedShow && (
                <CMSModal
                    isVisible={modalVisible}
                    onClose={closeModal}
                    movieData={{
                        title: selectedShow.title,
                        otherTitle: selectedShow.otherTitle,
                        year: selectedShow.year,
                        poster: selectedShow.poster,
                        trailerUrl: selectedShow.trailerUrl,
                        genres: selectedShow.genres,
                        synopsis: selectedShow.synopsis,
                        platforms: selectedShow.platforms,
                    }}
                />
            )}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </CMSLayout>
    );
};

export default CMSShows;