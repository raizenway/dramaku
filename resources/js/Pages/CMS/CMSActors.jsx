import React, { useState } from 'react';
import { usePage, router as Inertia } from '@inertiajs/react';
import CMSForm from "@/Components/CMS/CMSForm";
import Pagination from '@/Components/Home/Pagination';
import ConfirmationModal from "@/Components/ConfirmationModal";
import Dropdown from "@/Components/Dropdown";
import CMSLayout from '@/Components/CMS/CMSLayout';

const CMSActors = () => {
  const { actors, countries = [] } = usePage().props;
  const [actorList, setActorList] = useState(actors);
  const [currentPage, setCurrentPage] = useState(1);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedActor, setSelectedActor] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [actionType, setActionType] = useState(null);
  const [errors, setErrors] = useState({});

  const itemsPerPage = 5;
  const totalPages = Math.ceil(actorList.length / itemsPerPage);
  const currentActors = actorList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const formFields = [
    { id: "name", label: "Actor Name", type: "text", placeholder: "Actor Name" },
    { id: "country_id", label: "Country", type: "searchable-select", options: countries.map(country => ({ value: country.id, label: country.name })), placeholder: "Select Country" },
    { id: "birth", label: "Birth Date", type: "date", placeholder: "Birth Date" },
    { id: "photo_url", label: "Photo URL", type: "text", placeholder: "Photo URL" },
  ];

  const handleConfirm = () => {
    if (actionType === 'create') {
      handleActorSubmit(selectedActor);
    } else if (actionType === 'delete') {
      handleDeleteActor(selectedActor);
    } else if (actionType === 'edit') {
      handleActorUpdate(selectedActor);
    }
    setShowConfirmModal(false);
  };

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.name) errors.name = "Actor name is required.";
    if (!formData.country_id) errors.country_id = "Country selection is required.";
    if (formData.birth && isNaN(Date.parse(formData.birth))) errors.birth = "Invalid date format.";
    if (formData.photo_url && !/^https?:\/\/.+\..+/.test(formData.photo_url)) errors.photo_url = "Invalid URL format.";
    return errors;
  };

  const handleActorSubmit = (formData) => {
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    Inertia.post('/cms-actors', formData, {
      onSuccess: ({ props }) => {
        setActorList([props.actors.find(a => a.name === formData.name), ...actorList]);
        setErrors({});
      },
      onError: (errors) => {
        setErrors(errors);
        alert('Failed to create actor: ' + (errors.name || "Unknown error"));
      },
    });
  };

  const handleActorUpdate = (formData) => {
    if (!formData.id) {
      alert("Error: Actor ID not found.");
      return;
    }
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    Inertia.put(`/cms-actors/${formData.id}`, formData, {
      onSuccess: ({ props }) => {
        setActorList(actorList.map(actor => 
          actor.id === formData.id ? props.actors.find(a => a.id === formData.id) : actor
        ));
        setErrors({});
      },
      onError: (errors) => {
        setErrors(errors);
        alert('Failed to update actor: ' + (errors.name || "Unknown error"));
      },
    });
  };

  const handleDeleteActor = (item) => {
    Inertia.delete(`/cms-actors/${item.id}`, {
      onSuccess: () => setActorList(actorList.filter(actor => actor.id !== item.id)),
      onError: () => alert('Failed to delete actor.'),
    });
  };

  const startEditingRow = (item) => {
    setEditIndex(item.id);
    setSelectedActor({ ...item, country_id: item.country_id });
  };

  const saveEditedRow = () => {
    handleActorUpdate(selectedActor);
    setEditIndex(null);
    setSelectedActor(null);
  };

  const cancelEditRow = () => {
    setEditIndex(null);
    setSelectedActor(null);
    setErrors({});
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSelectedActor({ ...selectedActor, [id]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
  };

  const handleDropdownChange = (id, value) => {
    setSelectedActor({ ...selectedActor, [id]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
  };
  
  return (
    <CMSLayout title={"Actors"}>
        <CMSForm
          fields={formFields}
          onSubmit={(formData) => {
            setSelectedActor(formData);
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
                <th className="p-4 w-2/12">Photo</th>
                <th className="p-4 w-5/12">Actor Name</th>
                <th className="p-4 w-2/12">Birth Date</th>
                <th className="p-4 w-3/12">Country</th>
                <th className="p-4 text-center w-1/12">Actions</th>
              </tr>
            </thead>
            <tbody className="text-base text-body-color dark:text-dark-6">
              {currentActors.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">No data available</td>
                </tr>
              ) : (
                currentActors.map((actor, index) => (
                  <tr key={actor.id} className="border-b hover:bg-gray-100">
                    <td className="px-2 py-4 text-center">
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </td>

                    {editIndex === actor.id ? (
                      <>
                        <td className="px-2 py-4">
                          <input
                            type="text"
                            id="photo_url"
                            value={selectedActor?.photo_url || ''}
                            onChange={handleChange}
                            className="w-full text-base border border-gray-400 rounded-lg p-2"
                          />
                        </td>
                        <td className="px-2 py-4">
                          <input
                            type="text"
                            id="name"
                            value={selectedActor?.name || ''}
                            onChange={handleChange}
                            className="w-full text-base border border-gray-400 rounded-lg p-2"
                          />
                        </td>
                        <td className="px-2 py-4">
                          <input
                            type="date"
                            id="birth"
                            value={selectedActor?.birth || ''}
                            onChange={handleChange}
                            className="w-full text-base border border-gray-400 rounded-lg p-2"
                          />
                        </td>
                        <td className="px-2 py-4">
                          <Dropdown
                            id="country_id"
                            options={countries.map((country) => ({ value: country.id, label: country.name }))}
                            value={selectedActor?.country_id || ''}
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
                        <td className="px-2 py-4">
                          <img
                            src={actor.photo_url}
                            alt={actor.name}
                            className="w-24 h-32 object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src = "data:image/gif;base64,R0lGODlhAQABAAAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="; }}
                          />
                        </td>
                        <td className="px-2 py-4">{actor.name}</td>
                        <td className="px-2 py-4">{actor.birth}</td>
                        <td className="px-2 py-4">{actor.country}</td>
                        <td className="px-2 py-4 text-center">
                          <div className="flex justify-between space-x-2">
                            <button onClick={() => startEditingRow(actor)} className="text-primary hover:underline px-1">Edit</button>
                            <button onClick={() => { setSelectedActor(actor); setActionType('delete'); setShowConfirmModal(true); }} className="text-red-500 hover:underline px-1">Delete</button>
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
          message={actionType === 'delete' ? "Are you sure you want to delete this actor?" : actionType === 'edit' ? "Are you sure you want to edit this actor?" : "Are you sure you want to create this actor?"}
          onConfirm={handleConfirm}
          onCancel={() => setShowConfirmModal(false)}
          isDangerousAction={actionType === 'delete'}
        />
    </CMSLayout>
  );
};

export default CMSActors;