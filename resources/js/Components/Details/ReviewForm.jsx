import React, { useState } from 'react';
import { usePage, router as Inertia } from '@inertiajs/react';
import ConfirmationModal from '@/Components/ConfirmationModal';

const ReviewForm = ({ onReviewSubmitted, user, movie, userReview }) => {
    if (!user || !movie) {
        return <p className="text-lg text-gray-700">Unable to load review form. Please try again later.</p>;
    }

    const [data, setData] = useState({
        rate: 0,
        comment: '',
        user_id: user.id,
        movie_id: movie.id,
    });
    const [errors, setErrors] = useState({});
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [rejectedMessage, setRejectedMessage] = useState('');

    const handleClick = (index) => {
        setData({ ...data, rate: index + 1 });
    };

    const validateForm = (formData) => {
        const errors = {};
        if (formData.rate === 0) {
            errors.rate = 'Rating is required';
        }
        if (!formData.comment) {
            errors.comment = 'Comment is required';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(data);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setShowConfirmModal(true);
    };

    const confirmSubmit = () => {
        setShowConfirmModal(false);
        Inertia.post('/review', data, {
            onSuccess: ({ props }) => {
                if (props.review) {
                    onReviewSubmitted(props.review);
                    setShowSuccessModal(true);
                } else {
                    setRejectedMessage('Your previous review has been rejected.');
                }
                setErrors({});
            },
            onError: (errors) => {
                setErrors(errors);
                alert('Failed to submit review: ' + (errors.comment || "Unknown error"));
            },
        });
    };

    if (userReview) {
        let message;
        switch (userReview.status) {
            case 'pending':
                message = 'Your review is pending approval.';
                break;
            case 'approved':
                message = 'Your review has been approved.';
                break;
            case 'rejected':
                message = 'Your review has been rejected.';
                break;
            default:
                message = 'Your review status is unknown.';
        }
        return <p className="text-lg text-gray-700">{message}</p>;
    }

    return (
        <>
            <form className="mb-10 bg-gray-100 p-4 rounded-lg" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4">Share Your Thoughts, {user.name}!</h2>
                <div className="mb-4 lg:w-1/2">
                    <label htmlFor="rate">Rate</label>
                    <div className="flex space-x-1">
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                className={`text-xl cursor-pointer ${index < data.rate ? 'text-yellow-500' : 'text-gray-300'}`}
                                onClick={() => handleClick(index)}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    {errors.rate && <div className="text-red-500">{errors.rate}</div>}
                </div>

                <div className="mb-4">
                    <label htmlFor="comment">Your thoughts on {movie.title}</label>
                    <textarea
                        id="comment"
                        name="comment"
                        rows={4}
                        value={data.comment}
                        onChange={(e) => setData({ ...data, comment: e.target.value })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                    />
                    {errors.comment && <div className="text-red-500">{errors.comment}</div>}
                </div>

                <p className="text-base">Once submitted, your review will be sent for approval.</p>

                <div className="m-4 w-full">
                    <button
                        type="submit"
                        className="text-white inline-flex items-center justify-center py-2 text-base font-medium text-center rounded-md bg-primary px-7 hover:bg-blue-dark"
                    >
                        Submit
                    </button>
                </div>

                {rejectedMessage && (
                    <div className="text-red-600">{rejectedMessage}</div>
                )}
            </form>

            <ConfirmationModal
                show={showConfirmModal}
                title="Confirm Submission"
                message="Are you sure you want to submit this review?"
                onConfirm={confirmSubmit}
                onCancel={() => setShowConfirmModal(false)}
            />

            <ConfirmationModal
                show={showSuccessModal}
                title="Success"
                message="Your review has been submitted successfully."
                onConfirm={() => setShowSuccessModal(false)}
            />
        </>
    );
};

export default ReviewForm;
