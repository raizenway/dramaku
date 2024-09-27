import React from "react";
import CMSLayout from "@/Components/CMS/CMSLayout";
import CMSForm from "@/Components/CMS/CMSForm";
import CMSTable from "@/Components/CMS/CMSTable";

const CMSGenres = () => {
  const formFields = [
    { id: 'genre', placeholder: 'Genre Name' }
  ];

  const genresData = [
    { genre: "Action" },
    { genre: "Adventure" },
    { genre: "Fantasy" },
  ];

  const columns = [
    { id: 'genre', title: 'Genre' },
  ];

  const actions = [
    {
      label: "Rename",
      className: "text-primary hover:underline px-1",
      onClick: (item) => console.log("Rename clicked for", item),
    },
    {
      label: "Delete",
      className: "text-red-500 hover:underline px-1",
      onClick: (item) => console.log("Delete clicked for", item),
    },
  ];

  return (
    <CMSLayout title="Genres">
      <CMSForm fields={formFields} />
      <CMSTable columns={columns} data={genresData} actions={actions} />
    </CMSLayout>
  );
};

export default CMSGenres;
