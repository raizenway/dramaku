import React, { useState } from "react";
import CMSLayout from "@/Components/CMS/CMSLayout";
import CMSTable from "@/Components/CMS/CMSTable";
import CMSModal from "@/Components/CMS/CMSModal";

const CMSShows = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedShow, setSelectedShow] = useState(null);

    const showColumns = [
        { id: "show", title: "Show", width: "w-2/12" },
        { id: "actors", title: "Actors", width: "w-2/12" },
        { id: "genres", title: "Genres", width: "w-2/12" },
        { id: "synopsis", title: "Synopsis", width: "w-fit" },
        { id: "status", title: "Status", width: "w-1/12" },
    ];

    const showData = [
        {
            show: "Show 1",
            actors: "Actor 1, Actor 2",
            genres: ["Action", "Adventure"],
            synopsis: "A brief description of Show 1",
            status: "Pending",
            year: "2023",
            poster: "path/to/poster1.jpg",
            trailerUrl: "http://example.com/trailer1",
            otherTitle: "Another Show Title 1",
            platforms: ["Netflix", "Hulu"],
            casts: ["Actor 1", "Actor 2", "Actor 3"],
        },
        {
            show: "Show 2",
            actors: "Actor 3, Actor 4",
            genres: ["Drama", "Thriller"],
            synopsis: "A brief description of Show 2",
            status: "Pending",
            year: "2024",
            poster: "path/to/poster2.jpg",
            trailerUrl: "http://example.com/trailer2",
            otherTitle: "Another Show Title 2",
            platforms: ["Amazon Prime", "Disney+"],
            casts: ["Actor 4", "Actor 5", "Actor 6"],
        },
    ];

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
            <CMSTable columns={showColumns} data={showData} actions={actions} />
            {selectedShow && (
                <CMSModal
                    isVisible={modalVisible}
                    onClose={closeModal}
                    movieData={{
                        title: selectedShow.show,
                        otherTitle: selectedShow.otherTitle,
                        year: selectedShow.year,
                        rating: selectedShow.rating,
                        poster: selectedShow.poster,
                        trailerUrl: selectedShow.trailerUrl,
                        genres: selectedShow.genres,
                        synopsis: selectedShow.synopsis,
                        platforms: selectedShow.platforms,
                        casts: selectedShow.casts,
                    }}
                />
            )}
        </CMSLayout>
    );
};

export default CMSShows;
