import React, { useState } from "react";
import CMSLayout from "@/Components/CMS/CMSLayout";
import CMSTable from "@/Components/CMS/CMSTable";
import CMSModal from "@/Components/CMS/CMSModal";
import Pagination from "@/Components/Home/Pagination";
import { usePage } from "@inertiajs/react";

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
        { id: "synopsis", title: "Synopsis", width: "w-fit" },
        { id: "status", title: "Status", width: "w-1/12" },
    ];

    const showData = currentMovies.map((movie) => ({
        title: movie.title,
        actors: movie.actors.join(", "),
        genres: movie.genres.join(", "),
        synopsis: movie.synopsis,
        status: "Approved",
        year: movie.year,
        poster: movie.poster,
        trailerUrl: movie.trailerUrl,
        otherTitle: movie.otherTitle,
        platforms: movie.platforms,
    }));

    const actions = [
        {
            label: "Edit",
            className: "text-blue-500 hover:underline px-1",
            onClick: (item) => {
                setSelectedShow(item);
                setModalVisible(true);
            },
        },
        {
            label: "Delete",
            className: "text-red-500 hover:underline px-1",
            onClick: (item) => console.log("Delete clicked for", item),
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