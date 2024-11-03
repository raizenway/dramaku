import React, { useState } from 'react';
import { usePage, router as Inertia } from '@inertiajs/react';

const ReviewForm = ({ onReviewSubmitted, user, movie }) => {
    const [data, setData] = useState({
        rate: 0,
        comment: '',
        user_id: user.id,
        movie_id: movie.id,
    });
    const [errors, setErrors] = useState({});

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
        Inertia.post('/review', data, {
            onSuccess: ({ props }) => {
                onReviewSubmitted(props.review);
                setErrors({});
            },
            onError: (errors) => {
                setErrors(errors);
                alert('Failed to submit review: ' + (errors.comment || "Unknown error"));
            },
        });        
    };

    return (
        <form className="mb-10 bg-gray-100 p-4 rounded-lg" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4">Add Yours {user.name}!</h2>
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