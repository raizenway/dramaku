import ReviewCard from "./ReviewCard";

const ReviewSection = ({ reviews }) => {
    return (
        <div className="mb-10">
            <h2 className="text-4xl font-semibold text-dark">Reviews</h2>
            <span className="inline-block h-[2px] w-20 bg-primary" />
            <div className="h-80 overflow-auto p-4 mb-10">
                {reviews.length > 0 ? (
                    reviews.map((review, index) => (
                        <ReviewCard
                            key={index}
                            author={review.author}
                            email={review.email}
                            content={review.content}
                            rating={review.rating}
                            image={review.image}
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
