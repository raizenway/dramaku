import React, { useState } from 'react';
import { usePage, router as Inertia } from '@inertiajs/react';
import CMSLayout from "@/Components/CMS/CMSLayout";
import CMSForm from "@/Components/CMS/CMSForm";
import CMSTable from "@/Components/CMS/CMSTable";
import Pagination from '@/Components/Home/Pagination';
import ConfirmationModal from "@/Components/ConfirmationModal"; // Import the reusable modal component

const CMSAwards = () => {
  const { awards, countries } = usePage().props;
  const [awardList, setAwardList] = useState(awards);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(awardList.length / itemsPerPage);

  const indexOfLastAward = currentPage * itemsPerPage;
  const indexOfFirstAward = indexOfLastAward - itemsPerPage;
  const currentAwards = awardList.slice(indexOfFirstAward, indexOfLastAward);

  const countryOptions = countries.map(country => ({
    value: country.id,
    label: country.name,
  }));

  const awardFields = [
    { id: "name", label: "Award Name", type: "text", placeholder: "Award Name", width: "w-6/12" },
    { id: "year", label: "Year", type: "number", placeholder: "Year", width: "w-2/12"  },
    {
      id: "country_id",
      label: "Country",
      type: "searchable-select", 
      options: countryOptions,
      placeholder: "Select Country", 
      width: "w-4/12" 
    }
  ];

  const columns = [
    { id: 'name', title: "Name", width: "w-8/12" },
    { id: 'year', title: "Year", width: "w-1/12" },
    { id: 'country', title: "Country", width: "w-2/12" }
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

  // Modal state and handlers
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null);
  const [actionType, setActionType] = useState(null); // 'create' or 'delete'
  const [isDangerousAction, setIsDangerousAction] = useState(false); // For determining if the action is dangerous

  const handleConfirm = () => {
    if (actionType === 'create') {
      // Handle the creation process
      handleAwardSubmit(selectedAward);
    } else if (actionType === 'delete') {
      // Handle deletion
      handleDeleteAward(selectedAward);
    }
    setShowConfirmModal(false);
    setSelectedAward(null);
    setActionType(null);
    setIsDangerousAction(false);
  };

  const handleCancel = () => {
    setShowConfirmModal(false);
    setSelectedAward(null);
    setActionType(null);
    setIsDangerousAction(false);
  };

  const handleAwardSubmit = (formData) => {
    Inertia.post('/cms-awards', { 
      name: formData.name, 
      country_id: formData.country_id,
      year: formData.year 
    }, {
      onSuccess: (response) => {
        const newAward = response.props.awards.find(a => a.name === formData.name);
        if (newAward) {
          setAwardList([newAward, ...awardList]);
          alert('Award created successfully!');
        }
      },
      onError: (errors) => {
        alert('Failed to create award: ' + errors.name);
      }
    });
  };

  const handleRename = (item) => {
    const newAwardName = prompt("Enter new award name", item.name);
    if (newAwardName) {
      Inertia.put(`/cms-awards/${item.id}`, { name: newAwardName }, {
        onSuccess: () => {
          setAwardList(awardList.map(award =>
            award.id === item.id ? { ...award, name: newAwardName } : award
          ));
          alert('Award renamed successfully!');
        },
        onError: (errors) => {
          alert('Failed to rename award: ' + errors.name);
        }
      });
    }
  };

  const handleDeleteAward = (item) => {
    Inertia.delete(`/cms-awards/${item.id}`, {
      onSuccess: () => {
        setAwardList(awardList.filter(award => award.id !== item.id));
        alert('Award deleted successfully!');
      },
      onError: () => {
        alert('Failed to delete award.');
      }
    });
  };

  const handleDelete = (item) => {
    // Show the confirmation modal before deleting
    setSelectedAward(item);
    setActionType('delete');
    setIsDangerousAction(true); // Dangerous action for deletion
    setShowConfirmModal(true);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <CMSLayout title="Awards">
      <CMSForm fields={awardFields} onSubmit={(formData) => {
        setSelectedAward(formData);
        setActionType('create');
        setIsDangerousAction(false); // Non-dangerous action for creating
        setShowConfirmModal(true);
      }} />
      
      <CMSTable 
        columns={columns} 
        data={currentAwards} 
        actions={actions}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* Confirmation Modal */}
      <ConfirmationModal
        show={showConfirmModal}
        title={actionType === 'create' ? "Confirm Creation" : "Confirm Deletion"}
        message={actionType === 'create' ? "Are you sure you want to create this award?" : "Are you sure you want to delete this award?"}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        isDangerousAction={isDangerousAction}
      />
    </CMSLayout>
  );
};

export default CMSAwards;
