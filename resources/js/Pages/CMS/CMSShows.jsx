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
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [movieToDelete, setMovieToDelete] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

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
        setMovieToDelete(movie); // Menyimpan film yang akan dihapus
        setShowDeleteConfirm(true); // Menampilkan pop-up konfirmasi
    };

    const confirmDelete = () => {
        if (movieToDelete) {
            router.delete(`/cms/movies/${movieToDelete.id}`, {
                onSuccess: () => {
                    setShowSuccessMessage(true);
                    setCurrentPage(1); // Refresh atau reset halaman jika diperlukan
                },
                onError: (errors) => {
                    console.error(errors);
                }
            });
            setShowDeleteConfirm(false); // Menutup pop-up setelah penghapusan
        }
    };

    const cancelDelete = () => {
        setShowDeleteConfirm(false); // Menutup pop-up jika tombol Cancel ditekan
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

            {showDeleteConfirm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
                        <p className="mb-4">Are you sure you want to delete {movieToDelete?.title}?</p>
                        <div className="flex justify-end">
                            <button
                                onClick={cancelDelete}
                                className="mr-4 py-2 px-4 text-white bg-primary rounded hover:primary-dark"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showSuccessMessage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Success!</h2>
                        <p className="mb-4">Movie deleted successfully.</p>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setShowSuccessMessage(false)} // Menutup pop-up
                                className="py-2 px-4 text-white bg-primary rounded hover:bg-primary-dark"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
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
