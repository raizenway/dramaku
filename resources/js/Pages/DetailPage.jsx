import MovieHeader from "@/Components/Details/MovieHeader";
import MediaSection from "@/Components/Details/MediaSection";
import GenreTags from "@/Components/Details/GenreTags";
import SynopsisSection from "@/Components/Details/SynopsisSection";
import CastSection from "@/Components/Details/CastSection";
import ReviewForm from "@/Components/Details/ReviewForm";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Head, usePage } from '@inertiajs/react';
import ReviewSection from "@/Components/Details/ReviewSection";

export default function DetailPage() {
    const { movie } = usePage().props;

    return (
        <>
            <Head title="Detail" />
            <Navbar />
            <section className="pt-24 md:pt-28">
                <div className="container">
                    <MovieHeader
                        title={movie.title}
                        otherTitle={movie.otherTitle}
                        year={movie.year}
                        rating={movie.rating}
                    />
                    <MediaSection poster={movie.poster} trailerUrl={movie.trailerUrl} />
                    <GenreTags genres={movie.genres} />
                    <SynopsisSection synopsis={movie.synopsis} platforms={movie.platforms} />
                    <CastSection casts={movie.casts} />
                    <ReviewSection reviews={movie.reviews} />
                    <ReviewForm />
                </div>
            </section>
            <Footer />
        </>
    );
}
