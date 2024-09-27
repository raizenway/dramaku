import React from 'react';
import CMSLayout from "@/Components/CMS/CMSLayout";
import CMSForm from "@/Components/CMS/CMSForm";
import CMSTable from "@/Components/CMS/CMSTable";

const CMSCountries = () => {
  const formFields = [
    { id: 'country', placeholder: 'Country Name' }
  ];

  const countriesData = [
    { country: "Japan" },
    { country: "Canada" },
    { country: "Germany" },
  ];

  const columns = [
    { id: 'country', title: 'Country' },
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
    <CMSLayout title="Countries">
      <CMSForm fields={formFields} />
      <CMSTable columns={columns} data={countriesData} actions={actions} />
    </CMSLayout>
  );
};

export default CMSCountries;
