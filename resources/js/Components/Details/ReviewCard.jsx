import starIcon from "../../../../public/images/detail/icon-star.svg";

const ReviewCard = ({ author, email, content, rating, image }) => {
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
                    <span className="text-gray-500">No Image</span>
                </div>
            )}
            <div className="flex flex-col w-full">
                <div className="flex w-full">
                    <div>
                        <h3 className="text-sm font-semibold text-dark">{author}</h3>
                        <p className="text-xs text-body-secondary">{email}</p>
                    </div>
                    <div className="mb-[18px] flex items-center gap-2 ml-4">
                        {Array.from({ length: rating }).map((_, index) => (
                            <img key={index} src={starIcon} alt="star icon" />
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
