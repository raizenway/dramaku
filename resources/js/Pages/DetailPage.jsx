import MovieHeader from "@/Components/Details/MovieHeader";
import MediaSection from "@/Components/Details/MediaSection";
import GenreTags from "@/Components/Details/GenreTags";
import SynopsisSection from "@/Components/Details/SynopsisSection";
import CastSection from "@/Components/Details/CastSection";
import ReviewForm from "@/Components/Details/ReviewForm";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import MovieCard from "@/Components/Home/MovieCard"
import { Head, usePage } from '@inertiajs/react';
import ReviewSection from "@/Components/Details/ReviewSection";

export default function DetailPage() {
    const { movie } = usePage().props;

    console.log("Movie Data:", movie);

    return (
        <>
            <Head title="Detail" />
            <Navbar />
            <section className="pt-24 md:pt-28">
                <div className="container">
                    <MovieHeader
                        title={movie.title || 'Untitled'}
                        otherTitle={movie.otherTitle || ''}
                        year={movie.year || 'N/A'}
                        rating={movie.rating || 0}
                    />
                    <MediaSection poster={movie.poster} trailerUrl={movie.trailerUrl} />
                    {movie.genres && <GenreTags genres={movie.genres} />}
                    {movie.synopsis && <SynopsisSection synopsis={movie.synopsis} platforms={movie.platforms || []} />}
                    {movie.casts && <CastSection casts={movie.casts} />}
                    {movie.reviews && <ReviewSection reviews={movie.reviews} />}
                    <ReviewForm />
                </div>
            </section>
            <Footer />
        </>
    );
}
