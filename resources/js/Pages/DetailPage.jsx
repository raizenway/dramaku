import React, { useState } from 'react';
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
import AwardSection from "@/Components/Details/AwardSection";

export default function DetailPage() {
    const { movie, userReview, user } = usePage().props;
    const [reviews, setReviews] = useState(movie.reviews || []);

    const handleReviewSubmitted = (newReview) => {
        setReviews([newReview, ...reviews]);
    };

    

    return (
        <>
            <Head title={movie.title || "Detail"} />
            <Navbar />
            <section className="pt-24 md:pt-28 pb-20">
                <div className="container">
                    <MovieHeader
                        title={movie.title || 'Untitled'}
                        otherTitle={movie.otherTitle || ''}
                        year={movie.year || 'N/A'}
                        rating={movie.rating || 0}
                    />
                    <MediaSection poster={movie.poster} trailerUrl={movie.trailerUrl} />
                    <GenreTags genres={movie.genres} />
                    <SynopsisSection synopsis={movie.synopsis} platforms={movie.platforms || []} />
                    <CastSection casts={movie.casts} />
                    <AwardSection awards={movie.awards} />
                    <ReviewSection reviews={reviews} />
                    {user ? (
                        <ReviewForm
                            onReviewSubmitted={handleReviewSubmitted}
                            user={user}
                            movie={movie}
                            userReview={userReview}
                        />
                    ) : (
                        <p className="text-base">You need to log in to submit your review.</p>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
}
