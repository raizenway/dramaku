const ReviewCard = ({ author, email, content, rating, image }) => {
    // Divide rating by 2 and round it down
    const starsFilled = Math.floor(rating / 2);

    return (
        <div className="flex items-start gap-4 rounded-xl border-b bg-white p-4 sm:px-[30px]">
            {image ? (
                <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
                    <img
                        src={image}
                        alt={author}
                        className="h-[50px] w-[50px] overflow-hidden rounded-full"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                </div>
            ) : (
                <div className="h-[50px] w-[50px] overflow-hidden rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-center">No Image</span>
                </div>
            )}
            <div className="flex flex-col w-full">
                <div className="flex w-full">
                    <div>
                        <h3 className="text-m font-semibold text-dark">{author}</h3>
                        <p className="text-sm text-body-secondary">{email}</p>
                    </div>
                    <div className="mb-[18px] flex items-center gap-2 ml-4">
                        {/* Render the stars based on the rating */}
                        {Array.from({ length: 5 }).map((_, index) => (
                            <span
                                key={index}
                                className={`w-6 h-6 text-lg ${index < starsFilled ? 'text-yellow-500' : 'text-gray-300'}`}
                            >
                                &#9733; {/* Unicode star symbol */}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-base text-body-color">{content}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
