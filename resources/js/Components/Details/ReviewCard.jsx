const ReviewCard = ({ author, email, content, rating}) => {
    const starsFilled = rating ? Math.round(rating) : 0;

    return (
        <div className="flex items-start gap-4 rounded-xl border-b bg-white p-4 sm:px-[30px]">
            <div className="flex flex-col w-full">
                <div className="flex w-full">
                    <div>
                        <h3 className="text-m font-semibold text-dark">{author}</h3>
                        <p className="text-sm text-body-secondary">{email}</p>
                    </div>
                    <div className="mb-[18px] flex items-center gap-2 ml-4">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <span
                                key={index}
                                className={`w-6 h-6 text-lg ${index < starsFilled ? 'text-yellow-500' : 'text-gray-300'}`}
                            >
                                &#9733;
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
