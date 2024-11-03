import React, { useState } from 'react';
import { usePage, router as Inertia } from '@inertiajs/react';

const ReviewForm = ({ movieId, onReviewSubmitted }) => {
    const [data, setData] = useState({
        rate: 0,
        comment: '',
    });
    const [errors, setErrors] = useState({});

    const handleClick = (index) => {
        setData({ ...data, rate: index + 1 });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(`/movies/${movieId}/reviews`, data, {
            onSuccess: (response) => {
                const newReview = response.props.review;
                if (newReview) {
                    onReviewSubmitted(newReview);
                    setData({ rate: 0, comment: '' });
                    setErrors({});
                }
            },
            onError: (error) => {
                if (error.response && error.response.data.errors) {
                    setErrors(error.response.data.errors);
                }
            }
        });
    };

    return (
        <form className="mb-10 bg-gray-100 p-4 rounded-lg" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4">Add yours!</h2>
            
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
                <label htmlFor="comment">Your thoughts</label>
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

            <p className="text-body-secondary">You can only submit your comment once.</p>

            <div className="m-4 w-full">
                <button
                    type="submit"
                    className="text-white inline-flex items-center justify-center py-2 text-base font-medium text-center rounded-md bg-primary px-7 hover:bg-blue-dark"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ReviewForm;