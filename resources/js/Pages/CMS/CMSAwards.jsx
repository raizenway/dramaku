import React, { useState } from 'react';
import { usePage, router as Inertia } from '@inertiajs/react';
import CMSForm from "@/Components/CMS/CMSForm";
import Pagination from '@/Components/Home/Pagination';
import ConfirmationModal from "@/Components/ConfirmationModal";
import Dropdown from "@/Components/Dropdown";
import CMSLayout from '@/Components/CMS/CMSLayout';

const CMSAwards = () => {
  const { awards, countries } = usePage().props;
  const [awardList, setAwardList] = useState(awards);
  const [currentPage, setCurrentPage] = useState(1);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [actionType, setActionType] = useState(null);
  const [errors, setErrors] = useState({});

  const itemsPerPage = 10;
  const totalPages = Math.ceil(awardList.length / itemsPerPage);
  const currentAwards = awardList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const formFields = [
    { id: "name", label: "Award Name", type: "text", placeholder: "Award Name" },
    { id: "year", label: "Year", type: "number", placeholder: "Year" },
    { id: "country_id", label: "Country", type: "searchable-select", options: countries.map(country => ({ value: country.id, label: country.name })), placeholder: "Select Country" }
  ];

  const handleConfirm = () => {
    if (actionType === 'create') {
      handleAwardSubmit(selectedAward);
    } else if (actionType === 'delete') {
      handleDeleteAward(selectedAward);
    } else if (actionType === 'edit') {
      handleAwardUpdate(selectedAward);
    }
    setShowConfirmModal(false);
  };

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.name) errors.name = "Award name is required.";
    if (!formData.year) errors.year = "Year is required.";
    else if (formData.year < 1900 || formData.year > new Date().getFullYear())
      errors.year = `Year must be between 1900 and ${new Date().getFullYear()}.`;
    if (!formData.country_id) errors.country_id = "Country selection is required.";
    return errors;
  };

  const handleAwardSubmit = (formData) => {
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    Inertia.post('/cms-awards', formData, {
      onSuccess: ({ props }) => {
        setAwardList([props.awards.find(a => a.name === formData.name), ...awardList]);
        setErrors({});
      },
      onError: (errors) => {
        setErrors(errors);
        alert('Failed to create award: ' + (errors.name || "Unknown error"));
      },
    });
  };

  const handleAwardUpdate = (formData) => {
    if (!formData.id) {
      alert("Error: Award ID not found.");
      return;
    }
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    Inertia.put(`/cms-awards/${formData.id}`, formData, {
      onSuccess: ({ props }) => {
        setAwardList(awardList.map(award => 
          award.id === formData.id ? props.awards.find(a => a.id === formData.id) : award
        ));
        setErrors({});
      },
      onError: (errors) => {
        setErrors(errors);
        alert('Failed to update award: ' + (errors.name || "Unknown error"));
      },
    });
  };

  const handleDeleteAward = (item) => {
    Inertia.delete(`/cms-awards/${item.id}`, {
      onSuccess: () => setAwardList(awardList.filter(award => award.id !== item.id)),
      onError: () => alert('Failed to delete award.'),
    });
  };

  const startEditingRow = (item) => {
    setEditIndex(item.id);
    setSelectedAward({ ...item, country_id: item.country_id });
  };

  const saveEditedRow = () => {
    handleAwardUpdate(selectedAward);
    setEditIndex(null);
    setSelectedAward(null);
  };

  const cancelEditRow = () => {
    setEditIndex(null);
    setSelectedAward(null);
    setErrors({});
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSelectedAward({ ...selectedAward, [id]: value });
      setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
    };

  const handleDropdownChange = (id, value) => {
    setSelectedAward({ ...selectedAward, [id]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
  };
  
  return (
    <CMSLayout title={"Awards"}>
        <CMSForm
          fields={formFields}
          onSubmit={(formData) => {
            setSelectedAward(formData);
            setActionType('create');
            setShowConfirmModal(true);
          }}
          errors={errors}
        />
        <div className="relative overflow-x-auto shadow-md rounded-lg my-10">
          <table className="w-full">
            <thead className="text-white bg-dark-2 text-left">
              <tr>
                <th className="p-4 w-1/12 text-center">No.</th>
                <th className="p-4 w-8/12">Award Name</th>
                <th className="p-4 w-1/12">Year</th>
                <th className="p-4 w-2/12">Country</th>
                <th className="p-4 text-center w-1/12">Actions</th>
              </tr>
            </thead>
            <tbody className="text-base text-body-color dark:text-dark-6">
              {currentAwards.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-4">No data available</td>
                </tr>
              ) : (
                currentAwards.map((award, index) => (
                  <tr key={award.id} className="border-b hover:bg-gray-100">
                    <td className="px-2 py-4 text-center">
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </td>

                    {editIndex === award.id ? (
                      <>
                        <td className="px-2 py-4">
                          <input
                            type="text"
                            id="name"
                            value={selectedAward?.name || ''}
                            onChange={handleChange}
                            className="w-full text-base border border-gray-400 rounded-lg p-2"
                          />
                        </td>
                        <td className="px-2 py-4">
                          <input
                            type="number"
                            id="year"
                            value={selectedAward?.year || ''}
                            onChange={handleChange}
                            className="w-full text-base border border-gray-400 rounded-lg p-2"
                          />
                        </td>
                        <td className="px-2 py-4">
                          <Dropdown
                            id="country_id"
                            options={countries.map((country) => ({ value: country.id, label: country.name }))}
                            value={selectedAward?.country_id || ''}
                            onChange={(e) => handleDropdownChange('country_id', e.target.value)}
                            className="w-full text-base border border-gray-400 rounded-lg p-2"
                            placeholder="Select Country"
                          />
                        </td>
                        <td className="px-2 py-4 text-center">
                          <div className="flex justify-between space-x-2">
                            <button onClick={saveEditedRow} className="text-primary hover:underline px-1">Save</button>
                            <button onClick={cancelEditRow} className="text-gray-600 hover:underline px-1">Cancel</button>
                          </div>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-2 py-4">{award.name}</td>
                        <td className="px-2 py-4">{award.year}</td>
                        <td className="px-2 py-4">{award.country}</td>
                        <td className="px-2 py-4 text-center">
                          <div className="flex justify-between space-x-2">
                            <button onClick={() => startEditingRow(award)} className="text-primary hover:underline px-1">Edit</button>
                            <button onClick={() => { setSelectedAward(award); setActionType('delete'); setShowConfirmModal(true); }} className="text-red-500 hover:underline px-1">Delete</button>
                          </div>
                        </td>
                      </>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />

        <ConfirmationModal
          show={showConfirmModal}
          title={actionType === 'delete' ? "Confirm Deletion" : actionType === 'edit' ? "Confirm Edit" : "Confirm Creation"}
          message={actionType === 'delete' ? "Are you sure you want to delete this award?" : actionType === 'edit' ? "Are you sure you want to edit this award?" : "Are you sure you want to create this award?"}
          onConfirm={handleConfirm}
          onCancel={() => setShowConfirmModal(false)}
          isDangerousAction={actionType === 'delete'}
        />
    </CMSLayout>
  );
};

export default CMSAwards;