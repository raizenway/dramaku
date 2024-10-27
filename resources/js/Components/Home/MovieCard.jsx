import { useState } from 'react';
import { Link } from '@inertiajs/react';

function MovieCard({ id, poster, title, year, genres, rating }) {
    const [isPosterBroken, setIsPosterBroken] = useState(false);
    const displayRating = rating === null ? 0 : rating;
    const handleCardClick = () => {
      window.location.href = `/movies/${id}`;
    };
 
    return (
    <div className="w-full px-10 md:w-1/2 lg:w-1/5" onClick={handleCardClick}>
      <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
        <div className="mb-8 overflow-hidden rounded-[5px]">
          <Link to={`/movies/${id}`} className="block">
            <img
              src={poster}
              alt={title}
              className="w-full transition group-hover:rotate-6 group-hover:scale-125"
            />
          </Link>
        </div>
        <h3>
          <Link
            to={`/movies/${id}`}
            className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
          >
            {title}
          </Link>
        </h3>
        <h2>
          <a
            href="#"
            className="mb-4 inline-block text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
          >
            {year}
          </a>
        </h2>
        <div className="flex-wrap mt-1">
        {genres.map((genre, index) => (
          <a key={index} href="#" className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white">
            {genre}
          </a>
          ))}
        </div>
        <div className="flex mt-1">
          <p className="w-full text-base text-body-color dark:text-dark-6">
            Rate {displayRating}/10
          </p>
        </div>
    );
}

export default MovieCard;