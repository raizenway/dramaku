import React, { useState } from 'react';
import { usePage, Inertia } from '@inertiajs/react';
import CMSLayout from "@/Components/CMS/CMSLayout";
import CMSForm from "@/Components/CMS/CMSForm";
import CMSTable from "@/Components/CMS/CMSTable";

const CMSAwards = () => {
  const { awards } = usePage().props; // Get awards from props
  const [awardList, setAwardList] = useState(awards);

  const formFields = [
    { id: 'award', placeholder: 'Award Name', label: 'Award' },
    { id: 'year', placeholder: 'What Year', type: 'number', label: 'Year' },
    { id: 'country', placeholder: 'Country Origin', label: 'Country' },
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
      onClick: (item) => handleRename(item),
    },
    {
      label: "Delete",
      className: "text-red-500 hover:underline px-1",
      onClick: (item) => handleDelete(item),
    },
  ];

  const handleSubmit = (formData) => {
    Inertia.post('/cms-awards', formData, {
      onSuccess: (response) => {
        const newAward = response.props.awards.find(a => a.award === formData.award && a.year === formData.year);
        if (newAward) {
          setAwardList([...awardList, newAward]);
        }
        alert('Award created successfully!');
      },
      onError: (errors) => {
        alert('Failed to create award: ' + errors.award);
      }
    });
  };

  const handleRename = (item) => {
    const newAwardName = prompt("Enter new award name", item.award);
    if (newAwardName) {
      Inertia.put(`/cms-awards/${item.id}`, { award: newAwardName, year: item.year, country: item.country }, {
        onSuccess: () => {
          setAwardList(awardList.map(award => 
            award.id === item.id ? { ...award, award: newAwardName } : award
          ));
          alert('Award renamed successfully!');
        },
        onError: (errors) => {
          alert('Failed to rename award: ' + errors.award);
        }
      });
    }
  };

  const handleDelete = (item) => {
    if (confirm("Are you sure you want to delete this award?")) {
      Inertia.delete(`/cms-awards/${item.id}`, {
        onSuccess: () => {
          setAwardList(awardList.filter(award => award.id !== item.id));
          alert('Award deleted successfully!');
        },
        onError: () => {
          alert('Failed to delete award.');
        }
      });
    }
  };

  return (
    <CMSLayout title="Awards">
      <CMSForm fields={formFields} onSubmit={handleSubmit} />
      <CMSTable columns={awardColumns} data={awardList} actions={actions} />
    </CMSLayout>
  );
};

export default CMSAwards;
