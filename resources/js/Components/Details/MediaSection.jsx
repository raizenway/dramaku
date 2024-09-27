import { useState } from 'react';

const MediaSection = ({ poster, trailerUrl }) => {
    const [isPosterBroken, setIsPosterBroken] = useState(false); // State to track if the poster is broken

    return (
        <div className="flex flex-wrap">
            <div className="px-1 w-3/12">
                <div className="relative w-full" style={{ aspectRatio: '2 / 3' }}>
                    {isPosterBroken ? (
                        // Fallback placeholder if poster is broken
                        <div
                            className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-600 rounded-lg"
                        >
                            <span>No Poster Available</span>
                        </div>
                    ) : (
                        <img
                            src={poster}
                            alt="Movie Poster"
                            className="absolute inset-0 w-full h-full object-cover rounded-lg"
                            onError={() => setIsPosterBroken(true)}
                        />
                    )}
                </div>
            </div>
            <div className="px-1 w-9/12">
                <iframe
                    className="w-full h-full rounded-lg"
                    src={trailerUrl}
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen=""
                ></iframe>
            </div>
        </div>
    );
};

export default MediaSection;
