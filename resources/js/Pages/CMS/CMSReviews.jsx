  import React, { useState } from "react";
  import CMSLayout from "@/Components/CMS/CMSLayout";
  import CMSTable from "@/Components/CMS/CMSTable";
  import Pagination from "@/Components/Home/Pagination";
  import { usePage } from "@inertiajs/react";

  const CMSReviews = () => {
    const { reviews } = usePage().props;
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil((reviews?.length || 0) / itemsPerPage);

    const indexOfLastReview = currentPage * itemsPerPage;
    const indexOfFirstReview = indexOfLastReview - itemsPerPage;
    
    const currentReviews = reviews?.slice(indexOfFirstReview, indexOfLastReview) || [];

    const handlePageChange = (page) => {
      if (page < 1 || page > totalPages) return;
      setCurrentPage(page);
    };

    const commentColumns = [
      { id: "username", title: "Username", width: "w-2/12" },
      { id: "rate", title: "Rate", width: "w-2/12" },
      { id: "shows", title: "Shows", width: "w-2/12" },
      { id: "comment", title: "Comment", width: "w-fit" },
      { id: "status", title: "Status", width: "w-1/12" },
    ];

    const reviewData = currentReviews.map((review) => ({
      username: review.user?.name || "Unknown User",
      rate: review.rate,
      shows: review.movie?.title || "Unknown Movie",
      comment: review.comment,
      status: "Approved",
    }));

    const actions = [
      {
        label: "Rename",
        className: "text-primary hover:underline px-1",
        onClick: (item) => handleRename(item),
      },
      {
        label: "Delete",
        className: "text-red-500 hover:underline px-1",
        onClick: (item) => handleDelete(item),
      },
    ];

    return (
      <CMSLayout title="Reviews">
        <CMSTable 
          columns={commentColumns} 
          data={reviewData} 
          actions={actions}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </CMSLayout>
    );
  };

  export default CMSReviews;
