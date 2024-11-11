import React, { useState } from "react";
import CMSLayout from "@/Components/CMS/CMSLayout";
import Pagination from "@/Components/Home/Pagination";
import { usePage, router as Inertia } from "@inertiajs/react";
import ConfirmationModal from "@/Components/ConfirmationModal";

const CMSReviews = () => {
    const { reviews } = usePage().props;
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedReview, setSelectedReview] = useState(null);
    const [actionType, setActionType] = useState(null);

    const totalPages = Math.ceil((reviews?.length || 0) / itemsPerPage);
    const indexOfLastReview = currentPage * itemsPerPage;
    const indexOfFirstReview = indexOfLastReview - itemsPerPage;
    const currentReviews = reviews?.slice(indexOfFirstReview, indexOfLastReview) || [];

    const handleStatusChange = (review, newStatus) => {
        Inertia.put(`/cms-reviews/${review.id}/status`, { status: newStatus }, {
            onSuccess: () => {},
            onError: (error) => {
                console.error('Error updating review status:', error);
            }
        });
    };

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    const handleReject = (review) => {
        setSelectedReview(review);
        setActionType('reject');
        setShowConfirmModal(true);
    };

    const handleConfirm = () => {
        if (actionType === 'reject' && selectedReview) {
            handleStatusChange(selectedReview, 'rejected');
        }
        setShowConfirmModal(false);
        setSelectedReview(null);
        setActionType(null);
    };

    return (
        <CMSLayout title="Reviews">
            <div className="relative overflow-x-auto shadow-md rounded-lg my-10">
                <table className="w-full">
                    <thead className="text-white bg-dark-2 text-left">
                        <tr>
                            <th className="p-4 w-1/12 text-center">No.</th>
                            <th className="p-4 w-2/12">Username</th>
                            <th className="p-4 w-1/12 text-center">Rate</th>
                            <th className="p-4 w-2/12">Shows</th>
                            <th className="p-4 w-3/12">Comment</th>
                            <th className="p-4 w-1/12 text-center">Status</th>
                            <th className="p-4 w-2/12 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-base text-body-color dark:text-dark-6">
                        {currentReviews.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="text-center py-4">No reviews available</td>
                            </tr>
                        ) : (
                            currentReviews.map((review, index) => (
                                <tr key={review.id} className="border-b hover:bg-gray-100">
                                    <td className="px-2 py-4 text-center">
                                        {(currentPage - 1) * itemsPerPage + index + 1}
                                    </td>
                                    <td className="px-2 py-4">{review.user?.name || "Unknown User"}</td>
                                    <td className="px-2 py-4 text-center">{review.rate}</td>
                                    <td className="px-2 py-4">{review.movie?.title || "Unknown Movie"}</td>
                                    <td className="px-2 py-4">{review.comment}</td>
                                    <td className="px-2 py-4 text-center">
                                        {review.status ? review.status.charAt(0).toUpperCase() + review.status.slice(1) : "Unknown Status"}
                                    </td>
                                    <td className="px-2 py-4 text-center">
                                        <div>
                                            {review.status !== 'approved' && (
                                                <button
                                                    onClick={() => handleStatusChange(review, 'approved')}
                                                    className="text-primary hover:underline px-1"
                                                >
                                                    Approve
                                                </button>
                                            )}
                                            <button
                                                onClick={() => handleReject(review)}
                                                className="text-red-500 hover:underline px-1 ml-2"
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

            <ConfirmationModal
                show={showConfirmModal}
                title="Confirm Rejection"
                message="Are you sure you want to reject this review?"
                onConfirm={handleConfirm}
                onCancel={() => setShowConfirmModal(false)}
                isDangerousAction={true}
            />
        </CMSLayout>
    );
};

export default CMSReviews;
