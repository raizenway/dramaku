import React, { useState } from 'react';
import { usePage, router as Inertia } from '@inertiajs/react';
import ConfirmationModal from "@/Components/ConfirmationModal";
import Pagination from "@/Components/Home/Pagination";
import Navbar from '@/Components/Navbar';
import CMSNav from '@/Components/CMS/CMSNav';
import Footer from '@/Components/Footer';

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
    { id: "name", label: "Award Name", type: "text", placeholder: "Award Name" },
    { id: "year", label: "Year", type: "number", placeholder: "Year" },
    {
      id: "country_id",
      label: "Country",
      type: "select", 
      options: countryOptions,
      placeholder: "Select Country"
    }
  ];

  const [editingRow, setEditingRow] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null);
  const [actionType, setActionType] = useState(null);
  const [isDangerousAction, setIsDangerousAction] = useState(false);

  const handleConfirm = () => {
    if (actionType === 'create') {
      handleAwardSubmit(selectedAward);
    } else if (actionType === 'delete') {
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
  const handleEdit = (item) => setEditingRow(item.id);
  
  const handleSaveEdit = (id, updatedData) => {
    Inertia.put(`/cms-awards/${id}`, updatedData, {
      onSuccess: () => {
        setAwardList(awardList.map(award => (award.id === id ? { ...award, ...updatedData } : award)));
        setEditingRow(null);
        alert('Award updated successfully!');
      },
      onError: (errors) => {
        alert('Failed to update award: ' + errors.name);
      }
    });
  }

  const handleDelete = (item) => {
    setSelectedAward(item);
    setActionType('delete');
    setShowConfirmModal(true);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="flex justify-center mt-20">
        <CMSNav />
        <div className="flex-1 flex-wrap p-10 w-1">
          <div className="mb-4">
            <h2 className="text-4xl font-semibold text-dark dark:text-white">Awards</h2>
            <span className="inline-block h-[2px] w-20 bg-primary" />
          </div>
          <form onSubmit={(e) => {
            e.preventDefault();
            setActionType('create');
            setShowConfirmModal(true);
          }} className="bg-gray-100 p-4 rounded-lg mb-8">
            <div className="flex flex-wrap">
              {awardFields.map(field => (
                <div key={field.id} className="w-full sm:w-1/2 lg:w-1/4 px-4 my-2">
                  {field.type === "select" ? (
                    <select className="w-full border border-gray-400 rounded-lg p-2">
                      <option value="">{field.placeholder}</option>
                      {field.options.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      placeholder={field.placeholder}
                      className="w-full border border-gray-400 rounded-lg p-2"
                    />
                  )}
                </div>
              ))}
              <div className="m-4 w-full">
                <button type="submit" className="py-2 px-4 rounded-md bg-primary text-white">Submit</button>
              </div>
            </div>
          </form>

          {/* Table */}
          <div className="relative overflow-x-auto shadow-md rounded-lg my-10">
            <table className="w-full">
              <thead className="bg-dark-2 text-white text-left">
                <tr>
                  <th className="p-4">No.</th>
                  {awardFields.map(field => (
                    <th key={field.id} className="p-4">{field.label}</th>
                  ))}
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentAwards.map((item, index) => (
                  <tr key={item.id} className="border-b">
                    <td className="px-4 py-2 text-center">{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                    {awardFields.map(field => (
                      <td key={field.id} className="px-4 py-2">
                        {editingRow === item.id ? (
                          field.type === "select" ? (
                            <select
                              className="w-full border border-gray-400 rounded-lg p-2"
                              defaultValue={item[field.id]}
                              onChange={(e) => handleSaveEdit(item.id, { [field.id]: e.target.value })}
                            >
                              <option value="">{field.placeholder}</option>
                              {field.options.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                              ))}
                            </select>
                          ) : (
                            <input
                              type={field.type}
                              className="w-full border border-gray-400 rounded-lg p-2"
                              defaultValue={item[field.id]}
                              onBlur={(e) => handleSaveEdit(item.id, { [field.id]: e.target.value })}
                            />
                          )
                        ) : (
                          item[field.id]
                        )}
                      </td>
                    ))}
                    <td className="px-4 py-2 text-center">
                      {editingRow === item.id ? (
                        <button onClick={() => setEditingRow(null)} className="text-blue-500">Cancel</button>
                      ) : (
                        <button onClick={() => handleEdit(item)} className="text-primary">Edit</button>
                      )}
                      <button onClick={() => handleDelete(item)} className="text-red-500 ml-2">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
          <ConfirmationModal
            show={showConfirmModal}
            title={actionType === 'create' ? "Confirm Creation" : "Confirm Deletion"}
            message={actionType === 'create' ? "Are you sure you want to create this award?" : "Are you sure you want to delete this award?"}
            onConfirm={handleConfirm}
            onCancel={() => setShowConfirmModal(false)}
          />
        </div>
      </div>
        <CMSNav />
        <div className="flex-1 flex-wrap p-10 w-1">
          <div className="mb-4">
            <h2 className="text-4xl font-semibold text-dark dark:text-white">Awards</h2>
            <span className="inline-block h-[2px] w-20 bg-primary" />
          </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        setActionType('create');
        setShowConfirmModal(true);
      }} className="bg-gray-100 p-4 rounded-lg mb-8">
        <div className="flex flex-wrap">
          {awardFields.map(field => (
            <div key={field.id} className="w-full sm:w-1/2 lg:w-1/4 px-4 my-2">
              {field.type === "select" ? (
                <select className="w-full border border-gray-400 rounded-lg p-2">
                  <option value="">{field.placeholder}</option>
                  {field.options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  placeholder={field.placeholder}
                  className="w-full border border-gray-400 rounded-lg p-2"
                />
              )}
            </div>
          ))}
          <div className="m-4 w-full">
            <button type="submit" className="py-2 px-4 rounded-md bg-primary text-white">Submit</button>
          </div>
        </div>
      </form>

      {/* Table */}
      <div className="relative overflow-x-auto shadow-md rounded-lg my-10">
        <table className="w-full">
          <thead className="bg-dark-2 text-white text-left">
            <tr>
              <th className="p-4">No.</th>
              {awardFields.map(field => (
                <th key={field.id} className="p-4">{field.label}</th>
              ))}
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentAwards.map((item, index) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2 text-center">{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                {awardFields.map(field => (
                  <td key={field.id} className="px-4 py-2">
                    {editingRow === item.id ? (
                      field.type === "select" ? (
                        <select
                          className="w-full border border-gray-400 rounded-lg p-2"
                          defaultValue={item[field.id]}
                          onChange={(e) => handleSaveEdit(item.id, { [field.id]: e.target.value })}
                        >
                          <option value="">{field.placeholder}</option>
                          {field.options.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          className="w-full border border-gray-400 rounded-lg p-2"
                          defaultValue={item[field.id]}
                          onBlur={(e) => handleSaveEdit(item.id, { [field.id]: e.target.value })}
                        />
                      )
                    ) : (
                      item[field.id]
                    )}
                  </td>
                ))}
                <td className="px-4 py-2 text-center">
                  {editingRow === item.id ? (
                    <button onClick={() => setEditingRow(null)} className="text-blue-500">Cancel</button>
                  ) : (
                    <button onClick={() => handleEdit(item)} className="text-primary">Edit</button>
                  )}
                  <button onClick={() => handleDelete(item)} className="text-red-500 ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

       <ConfirmationModal
        show={showConfirmModal}
        title={actionType === 'create' ? "Confirm Creation" : "Confirm Deletion"}
        message={actionType === 'create' ? "Are you sure you want to create this award?" : "Are you sure you want to delete this award?"}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        isDangerousAction={isDangerousAction}
      />
    </div>
    <Footer />
    </React.Fragment>
  );
};

export default CMSAwards;
