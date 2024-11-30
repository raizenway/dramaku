import React, { useState } from "react";
import { usePage, router as Inertia } from "@inertiajs/react";
import CMSLayout from "@/Components/CMS/CMSLayout";
import CMSForm from "@/Components/CMS/CMSForm";
import Pagination from "@/Components/Home/Pagination";
import ConfirmationModal from "@/Components/ConfirmationModal";

const CMSPlatforms = () => {
  const { platforms } = usePage().props;
  const [platformList, setPlatformList] = useState(platforms);
  const [currentPage, setCurrentPage] = useState(1);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [actionType, setActionType] = useState(null);
  const [errors, setErrors] = useState({});

  const itemsPerPage = 10;
  const totalPages = Math.ceil(platformList.length / itemsPerPage);
  const currentPlatforms = platformList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const formFields = [{ id: "platform", placeholder: "Platform Name", label: "Platform" }];

  const handleSubmit = (formData) => {
    const existingPlatform = platformList.find(platform => platform.name.toLowerCase() === formData.platform.toLowerCase());

    if (existingPlatform) {
      setErrors({ platform: `Platform "${formData.platform}" already exists.` });
      return;
    }

    Inertia.post("/cms-platforms", formData, {
      onSuccess: ({ props }) => {
        setPlatformList([props.platforms.find(p => p.name === formData.platform), ...platformList]);
        setErrors({});
      },
      onError: (errors) => setErrors(errors),
    });
  };

  const handleRename = (formData) => {
    if (!formData.id) {
      alert("Error: Platform ID not found.");
      return;
    }
    const existingPlatform = platformList.find(platform => platform.name.toLowerCase() === formData.name.toLowerCase());
    if (existingPlatform && existingPlatform.id !== formData.id) {
      alert(`Platform "${formData.name}" already exists.`);
      return;
    }
    Inertia.put(`/cms-platforms/${formData.id}`, formData, {
      onSuccess: ({ props }) => setPlatformList(platformList.map(platform =>
        platform.id === formData.id ? props.platforms.find(p => p.id === formData.id) : platform
      )),
      onError: (errors) => alert("Failed to rename platform: " + errors.platform),
    });
  };

  const handleDelete = (item) => {
    Inertia.delete(`/cms-platforms/${item.id}`, {
      onSuccess: () => setPlatformList(platformList.filter(platform => platform.id !== item.id)),
      onError: () => alert("Failed to delete platform."),
    });
  };

  const startEditingRow = (item) => {
    setEditIndex(item.id);
    setSelectedPlatform({ ...item });
  };

  const saveEditedRow = () => {
    handleRename(selectedPlatform);
    setEditIndex(null);
    setSelectedPlatform(null);
  };

  const cancelEditRow = () => {
    setEditIndex(null);
    setSelectedPlatform(null);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSelectedPlatform({ ...selectedPlatform, [id]: value });
  };

  const handleConfirm = () => {
    if (actionType === "delete") {
      handleDelete(selectedPlatform);
    }
    setShowConfirmModal(false);
  };

  return (
    <CMSLayout title="Platforms">
      <CMSForm
        fields={formFields}
        onSubmit={handleSubmit}
        errors={errors}
      />

      <div className="relative overflow-x-auto shadow-md rounded-lg my-10">
        <table className="w-full">
          <thead className="text-white bg-dark-2 text-left">
            <tr>
              <th className="p-4 w-1/12 text-center">No.</th>
              <th className="p-4 w-9/12">Platform</th>
              <th className="p-4 text-center w-1/12">Actions</th>
            </tr>
          </thead>
          <tbody className="text-base text-body-color dark:text-dark-6">
            {currentPlatforms.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-4">No data available</td>
              </tr>
            ) : (
              currentPlatforms.map((platform, index) => (
                <tr key={platform.id} className="border-b hover:bg-gray-100">
                  <td className="px-2 py-4 text-center">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  {editIndex === platform.id ? (
                    <>
                      <td className="px-2 py-4">
                        <input
                          type="text"
                          id="name"
                          value={selectedPlatform?.name || ""}
                          onChange={handleChange}
                          className="w-full text-base border border-gray-400 rounded-lg p-2"
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
                      <td className="px-2 py-4">{platform.name}</td>
                      <td className="px-2 py-4 text-center">
                        <div className="flex justify-between space-x-2">
                          <button onClick={() => startEditingRow(platform)} className="text-primary hover:underline px-1">Edit</button>
                          <button onClick={() => { setSelectedPlatform(platform); setActionType('delete'); setShowConfirmModal(true); }} className="text-red-500 hover:underline px-1">Delete</button>
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
        title="Confirm Deletion"
        message="Are you sure you want to delete this platform?"
        onConfirm={handleConfirm}
        onCancel={() => setShowConfirmModal(false)}
        isDangerousAction={true}
      />
    </CMSLayout>
  );
};

export default CMSPlatforms;
