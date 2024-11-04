import React, { useState } from "react";
import { usePage, router as Inertia } from "@inertiajs/react";
import CMSLayout from "@/Components/CMS/CMSLayout";
import CMSForm from "@/Components/CMS/CMSForm";
import Pagination from "@/Components/Home/Pagination";
import ConfirmationModal from "@/Components/ConfirmationModal";

const CMSCountries = () => {
  const { countries } = usePage().props;
  const [countryList, setCountryList] = useState(countries);
  const [currentPage, setCurrentPage] = useState(1);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [actionType, setActionType] = useState(null);
  const [errors, setErrors] = useState({});

  const itemsPerPage = 10;
  const totalPages = Math.ceil(countryList.length / itemsPerPage);
  const currentCountries = countryList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const formFields = [{ id: "country", placeholder: "Country Name", label: "Country" }];

  const handleSubmit = (formData) => {
    const existingCountry = countryList.find(country => country.name.toLowerCase() === formData.country.toLowerCase());
    
    if (existingCountry) {
      setErrors({ country: `Country "${formData.country}" already exists.` });
      return;
    }

    Inertia.post("/cms-countries", formData, {
      onSuccess: ({ props }) => {
        setCountryList([props.countries.find(c => c.name === formData.country), ...countryList]);
        setErrors({}); 
      },
      onError: (errors) => setErrors(errors),
    });
  };

  const handleRename = (formData) => {
    if (!formData.id) {
      alert("Error: Country ID not found.");
      return;
    }
    const existingCountry = countryList.find(country => country.name.toLowerCase() === formData.name.toLowerCase());
    if (existingCountry && existingCountry.id !== formData.id) {
      alert(`Country "${formData.name}" already exists.`);
      return;
    }
    Inertia.put(`/cms-countries/${formData.id}`, formData, {
      onSuccess: ({ props }) => setCountryList(countryList.map(country =>
        country.id === formData.id ? props.countries.find(c => c.id === formData.id) : country
      )),
      onError: (errors) => alert("Failed to rename country: " + errors.country),
    });
  };

  const handleDelete = (item) => {
    Inertia.delete(`/cms-countries/${item.id}`, {
      onSuccess: () => setCountryList(countryList.filter(country => country.id !== item.id)),
      onError: () => alert("Failed to delete country."),
    });
  };

  const startEditingRow = (item) => {
    setEditIndex(item.id);
    setSelectedCountry({ ...item });
  };

  const saveEditedRow = () => {
    handleRename(selectedCountry);
    setEditIndex(null);
    setSelectedCountry(null);
  };

  const cancelEditRow = () => {
    setEditIndex(null);
    setSelectedCountry(null);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSelectedCountry({ ...selectedCountry, [id]: value });
  };

  const handleConfirm = () => {
    if (actionType === "delete") {
      handleDelete(selectedCountry);
    }
    setShowConfirmModal(false);
  };

  return (
    <CMSLayout title="Countries">
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
              <th className="p-4 w-9/12">Country</th>
              <th className="p-4 text-center w-1/12">Actions</th>
            </tr>
          </thead>
          <tbody className="text-base text-body-color dark:text-dark-6">
            {currentCountries.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-4">No data available</td>
              </tr>
            ) : (
              currentCountries.map((country, index) => (
                <tr key={country.id} className="border-b hover:bg-gray-100">
                  <td className="px-2 py-4 text-center">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  {editIndex === country.id ? (
                    <>
                      <td className="px-2 py-4">
                        <input
                          type="text"
                          id="name"
                          value={selectedCountry?.name || ""}
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
                      <td className="px-2 py-4">{country.name}</td>
                      <td className="px-2 py-4 text-center">
                        <div className="flex justify-between space-x-2">
                          <button onClick={() => startEditingRow(country)} className="text-primary hover:underline px-1">Edit</button>
                          <button onClick={() => { setSelectedCountry(country); setActionType('delete'); setShowConfirmModal(true); }} className="text-red-500 hover:underline px-1">Delete</button>
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
        message="Are you sure you want to delete this country?"
        onConfirm={handleConfirm}
        onCancel={() => setShowConfirmModal(false)}
        isDangerousAction={true}
      />
    </CMSLayout>
  );
};

export default CMSCountries;
