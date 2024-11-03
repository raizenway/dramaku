import starIcon from "../../../../public/images/detail/icon-star.svg";

const MovieHeader = ({ title, otherTitle, year, rating }) => {
    const displayRating = rating === null ? 0 : rating;

    return (
        <div className="flex justify-between items-center mb-4">
            <div>
                <h2 className="text-6xl font-bold text-dark">{title}</h2>
                <p className="text-base text-body-color">
                    <strong>Other Title:</strong> {otherTitle}
                </p>
                <p className="text-base text-body-color">
                    <strong>Year:</strong> {year}
                </p>
            </div>
            <div className="flex items-center">
                <img src={starIcon} alt="star icon" className="w-10 h-10" />
                <div className="ml-2 flex flex-col items-center">
                    <p className="text-base font-bold text-body-color">Rating</p>
                    <span className="text-xl text-body-color">{displayRating.toFixed(1)} / 5</span>
                </div>
            </div>
        </div>
    );
};

export default MovieHeader;
