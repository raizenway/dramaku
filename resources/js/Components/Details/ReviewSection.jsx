import React, { useState } from "react";
import ReviewCard from "./ReviewCard";

const ReviewSection = ({ reviews = [] }) => {
    const [filterRating, setFilterRating] = useState(0);

    const filteredReviews = filterRating > 0 
        ? reviews.filter(review => review.rating === filterRating) 
        : reviews;

    const handleStarClick = (index) => {
        setFilterRating(index + 1);
    };

    const clearFilter = () => {
        setFilterRating(0);     
    };

    return (
        <div className="mb-10">
            <h2 className="text-4xl font-semibold text-dark">Reviews</h2>
            <span className="inline-block h-[2px] w-20 bg-primary" />
            <div className="flex items-center mb-4 justify-end">
                <span className="text-base mr-4 font-bold">Filter:</span>
                <div className="flex space-x-1 mr-4">
                    {[...Array(5)].map((_, index) => (
                        <span
                            key={index}
                            className={`text-xl cursor-pointer ${index < filterRating ? 'text-yellow-500' : 'text-gray-300'}`}
                            onClick={() => handleStarClick(index)}
                        >
                            ★
                        </span>
                    ))}
                </div>
                <button 
                    className="text-base text-red-600 hover:text-red-800 hover:underline" 
                    onClick={clearFilter}
                >
                    Clear
                </button>
            </div>

            <div className={`overflow-auto p-4 mb-10 ${filteredReviews.length > 0 ? 'max-h-80' : ''}`} style={{ maxHeight: filteredReviews.length > 0 ? 'h-80' : 'auto' }}>
                {filteredReviews.length > 0 ? (
                    filteredReviews.map((review, index) => (
                        <ReviewCard
                            key={index}
                            author={review.author}
                            email={review.email}
                            content={review.content}
                            rating={review.rating}
                        />
                    ))
                ) : (
                    <p className="text-gray-500">No reviews available.</p>
                )}
            </div>
        </div>
    );
};

export default ReviewSection;