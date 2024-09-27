const GenreTags = ({ genres }) => {
    return (
        <div className="flex flex-wrap items-center gap-4 mt-4 mb-10">
            {genres.map((genre, index) => (
                <a
                    key={index}
                    className="block rounded-md bg-primary/[0.08] px-[14px] py-[5px] text-base text-dark hover:bg-primary hover:text-white"
                >
                    {genre}
                </a>
            ))}
        </div>
    );
};

export default GenreTags;
