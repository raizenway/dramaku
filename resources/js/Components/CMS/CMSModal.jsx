import React from 'react';
import MovieHeader from "@/Components/Details/MovieHeader";
import MediaSection from "@/Components/Details/MediaSection";
import GenreTags from "@/Components/Details/GenreTags";
import SynopsisSection from "@/Components/Details/SynopsisSection";
import CastSection from "@/Components/Details/CastSection";

const CMSModal = ({ 
    isVisible, 
    onClose, 
    movieData 
}) => {
    if (!isVisible) return null;

    return (
        <div
            id="modal"
            className="fixed inset-0 z-50 flex h-full overflow-y-auto bg-black bg-opacity-50 justify-center items-center"
        >
            <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-screen overflow-y-auto">
                <section className="py-10 pt-20 lg:py-20 lg:pt-[120px]">
                    <div className="container">
                        <MovieHeader
                            title={movieData.title}
                            otherTitle={movieData.otherTitle}
                            year={movieData.year}
                            rating={movieData.rating}
                        />
                        <MediaSection 
                            poster={movieData.poster} 
                            trailerUrl={movieData.trailerUrl} 
                        />
                        <GenreTags genres={movieData.genres} />
                        <SynopsisSection 
                            synopsis={movieData.synopsis} 
                            platforms={movieData.platforms} 
                        />
                        <CastSection casts={movieData.casts} />
                    </div>
                </section>

                <div className="flex justify-end p-4">
                    <button
                        className="bg-primary text-white py-2 px-4 rounded hover:bg-blue-dark mr-2"
                        onClick={onClose}
                    >
                        Accept
                    </button>
                    <button
                        className="bg-gray-300 text-dark py-2 px-4 rounded hover:bg-gray-400 mr-2"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CMSModal;
