import React from 'react';
import CMSLayout from "@/Components/CMS/CMSLayout";
import CMSForm from "@/Components/CMS/CMSForm";
import CMSTable from "@/Components/CMS/CMSTable";

const CMSAwards = () => {
  const formFields = [
    { id: 'award', placeholder: 'Award Name' },
    { id: 'year', placeholder: 'What Year', type: 'number' },
    { id: 'country', placeholder: 'Country Origin' },
  ];

  const awardsData = [
    { award: "Award 1", country: "Country 1", year: "2021" },
    { award: "Award 2", country: "Country 2", year: "2022" },
  ];

  const awardColumns = [
    { id: 'award', title: 'Award' },
    { id: 'country', title: 'Country' },
    { id: 'year', title: 'Year' },
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
    <CMSLayout title="Awards">
      <CMSForm fields={formFields} />
      <CMSTable columns={awardColumns} data={awardsData} actions={actions} />
    </CMSLayout>
  );
};

export default CMSAwards;
