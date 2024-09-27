import React from "react";
import CMSForm from "@/Components/CMS/CMSForm";
import CMSLayout from "@/Components/CMS/CMSLayout";
import CMSTable from "@/Components/CMS/CMSTable";

const CMSActors = () => {
  const actorFields = [
    { id: "name", label: "Actor's Name", type: "text", placeholder: "Actor's Name" },
    { id: "country", label: "Actor's Country", type: "text", placeholder: "Actor's Country" },
    { id: "birth", label: "Actor's Date of Birth", type: "date" },
    { id: "profilePicture", label: "Profile Picture", type: "file" },
  ];

  const handleActorSubmit = (formData) => {
    console.log("Submitted form data:", formData);
  };

  const actorsData = [
    { name: "Actor Name 1", country: "Country 1", birth: "01/01/1990", profilePicture: "path/to/valid_image.png" },
    { name: "Actor Name 2", country: "Country 2", birth: "02/02/1985", profilePicture: null },
  ];

  const actorColumns = [
    { id: 'profilePicture', title: 'Photo', width: 'w-2/12' },
    { id: 'name', title: 'Name' },
    { id: 'country', title: 'Country' },
    { id: 'birth', title: 'Date of Birth' },
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
    <CMSLayout title="Actors">
      <CMSForm fields={actorFields} onSubmit={handleActorSubmit} />
      <CMSTable columns={actorColumns} data={actorsData} actions={actions} />
    </CMSLayout>
  );
};

export default CMSActors;
