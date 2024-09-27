import MovieHeader from "@/Components/Details/MovieHeader";
import MediaSection from "@/Components/Details/MediaSection";
import GenreTags from "@/Components/Details/GenreTags";
import SynopsisSection from "@/Components/Details/SynopsisSection";
import CastSection from "@/Components/Details/CastSection";
import ReviewForm from "@/Components/Details/ReviewForm";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Head } from '@inertiajs/react';
import ReviewSection from "@/Components/Details/ReviewSection";

export default function DetailPage() {
    const movie = {
        title: "Overlord",
        otherTitle: "Ôbârôdo",
        year: 2015,
        rating: 7.5,
        poster: "https://image.tmdb.org/t/p/original/hRshcrYYVkmrpKzbH9gNhYCcpGt.jpg",
        trailerUrl: "https://www.youtube.com/embed/3jE9moHQePI?si=V8fCal7jJZky9Shj",
        genres: ["Animation", "Action", "Adventure", "Fantasy"],
        synopsis: "The final hour of the popular virtual reality game Yggdrasil has come. However, Momonga, a powerful wizard and master of the dark guild Ainz Ooal Gown, decides to spend his last few moments in the game as the servers begin to shut down. To his surprise, despite the clock having struck midnight, Momonga is still fully conscious as his character and, moreover, the non-player characters appear to have developed personalities of their own! Confronted with this abnormal situation, Momonga commands his loyal servants to help him investigate and take control of this new world, with the hopes of figuring out what has caused this development and if there may be others in the same predicament.",
        platforms: ["Crunchyroll", "Netflix"],
        casts: [
            { name: "Actor 1", role: "Momonga", image: "https://image.tmdb.org/t/p/original/8ZJIiwIVF2zDyyFr7oXewj0eEuu.jpg" },
            { name: "Actor 2", role: "Albedo", image: "https://image.tmdb.org/t/p/original/hPmr7BEFQIO8IFaWHAcaFLUuSxV.jpg" }, 
            { name: "Actor 3", role: "Shalltear", image: "https://image.tmdb.org/t/p/original/AbouCe2WVBHvMlBm9NnG7GHyJpa.jpg" },
            { name: "Actor 4", role: "Demiurge", image: "https://image.tmdb.org/t/p/original/1BKgxx1FXJ99WanpgWCBRG6YOHT.jpg" },
        ],
        reviews: [
            { author: "Reviewer 1", email: "user1@gmail.com", content: "Great show!", rating: 5, image: null },
            { author: "Reviewer 2", email: "user2@gmail.com", content: "Loved the animation.", rating: 4, image: null },
        ],
    };
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
