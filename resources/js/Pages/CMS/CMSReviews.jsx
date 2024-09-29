import React from "react";
import CMSLayout from "@/Components/CMS/CMSLayout";
import CMSTable from "@/Components/CMS/CMSTable";

const Reviews = () => {
  const commentColumns = [
    { id: "username", title: "Username", width: "w-2/12" },
    { id: "rate", title: "Rate", width: "w-2/12" },
    { id: "shows", title: "Shows", width: "w-2/12" },
    { id: "comment", title: "Comment", width: "w-fit" },
    { id: "status", title: "Status", width: "w-2/12" },
  ];

  const ReviewsData = [
    { username: "User 1", rate: "5", shows: "Show 1", comment: "Amazing show!", status: "Approved" },
    { username: "User 2", rate: "3", shows: "Show 2", comment: "It was okay.", status: "Approved" },
    { username: "User 3", rate: "4", shows: "Show 3", comment: "I enjoyed it!", status: "Unapproved" },
  ];

  const actions = [
    {
      label: "Approve",
      className: "text-primary hover:underline px-1",
      onClick: (item) => console.log("Approve clicked for", item),
    },
    {
      label: "Delete",
      className: "text-red-500 hover:underline px-1",
      onClick: (item) => console.log("Delete clicked for", item),
    },
  ];

  return (
    <CMSLayout title="Reviews">
      <CMSTable columns={commentColumns} data={ReviewsData} actions={actions} />
      <div className="m-4 w-full flex gap-8">
        <button
          className="text-white inline-flex items-center justify-center py-2 text-base font-medium text-center rounded-md bg-primary px-7 hover:bg-blue-dark"
          onClick={() => console.log("Approve selected reviews")}
        >
          Approve
        </button>
        <button
          className="text-white inline-flex items-center justify-center py-2 text-base font-medium text-center rounded-md bg-red-600 px-7 hover:bg-red-800"
          onClick={() => console.log("Delete selected reviews")}
        >
          Delete
        </button>
      </div>
    </CMSLayout>
  );
};

export default Reviews;
