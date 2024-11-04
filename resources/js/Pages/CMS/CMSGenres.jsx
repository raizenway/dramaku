import React, { useState } from "react";
import { usePage, router as Inertia } from "@inertiajs/react";
import CMSLayout from "@/Components/CMS/CMSLayout";
import CMSForm from "@/Components/CMS/CMSForm";
import Pagination from "@/Components/Home/Pagination";
import ConfirmationModal from "@/Components/ConfirmationModal";

const CMSGenres = () => {
  const { genres } = usePage().props;
  const [genreList, setGenreList] = useState(genres);
  const [currentPage, setCurrentPage] = useState(1);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [actionType, setActionType] = useState(null);
  const [errors, setErrors] = useState({});

  const itemsPerPage = 10;
  const totalPages = Math.ceil(genreList.length / itemsPerPage);
  const currentGenres = genreList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const formFields = [{ id: "genre", placeholder: "Genre Name", label: "Genre" }];

  const handleSubmit = (formData) => {
    const existingGenre = genreList.find(genre => genre.name.toLowerCase() === formData.genre.toLowerCase());
    
    if (existingGenre) {
      setErrors({ genre: `Genre "${formData.genre}" already exists.` });
      return;
    }

    Inertia.post("/cms-genres", formData, {
      onSuccess: ({ props }) => {
        setGenreList([props.genres.find(g => g.name === formData.genre), ...genreList]);
        setErrors({}); 
      },
      onError: (errors) => setErrors(errors),
    });
  };

  const handleRename = (formData) => {
    if (!formData.id) {
      alert("Error: Genre ID not found.");
      return;
    }
    const existingGenre = genreList.find(genre => genre.name.toLowerCase() === formData.name.toLowerCase());
    if (existingGenre && existingGenre.id !== formData.id) {
      alert(`Genre "${formData.name}" already exists.`);
      return;
    }
    Inertia.put(`/cms-genres/${formData.id}`, formData, {
      onSuccess: ({ props }) => setGenreList(genreList.map(genre =>
        genre.id === formData.id ? props.genres.find(g => g.id === formData.id) : genre
      )),
      onError: (errors) => alert("Failed to rename genre: " + errors.genre),
    });
  };

  const handleDelete = (item) => {
    Inertia.delete(`/cms-genres/${item.id}`, {
      onSuccess: () => setGenreList(genreList.filter(genre => genre.id !== item.id)),
      onError: () => alert("Failed to delete genre."),
    });
  };

  const startEditingRow = (item) => {
    setEditIndex(item.id);
    setSelectedGenre({ ...item });
  };

  const saveEditedRow = () => {
    handleRename(selectedGenre);
    setEditIndex(null);
    setSelectedGenre(null);
  };

  const cancelEditRow = () => {
    setEditIndex(null);
    setSelectedGenre(null);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSelectedGenre({ ...selectedGenre, [id]: value });
  };

  const handleConfirm = () => {
    if (actionType === "delete") {
      handleDelete(selectedGenre);
    }
    setShowConfirmModal(false);
  };

  return (
    <CMSLayout title="Genres">
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
              <th className="p-4 w-9/12">Genre</th>
              <th className="p-4 text-center w-1/12">Actions</th>
            </tr>
          </thead>
          <tbody className="text-base text-body-color dark:text-dark-6">
            {currentGenres.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-4">No data available</td>
              </tr>
            ) : (
              currentGenres.map((genre, index) => (
                <tr key={genre.id} className="border-b hover:bg-gray-100">
                  <td className="px-2 py-4 text-center">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  {editIndex === genre.id ? (
                    <>
                      <td className="px-2 py-4">
                        <input
                          type="text"
                          id="name"
                          value={selectedGenre?.name || ""}
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
                      <td className="px-2 py-4">{genre.name}</td>
                      <td className="px-2 py-4 text-center">
                        <div className="flex justify-between space-x-2">
                          <button onClick={() => startEditingRow(genre)} className="text-primary hover:underline px-1">Edit</button>
                          <button onClick={() => { setSelectedGenre(genre); setActionType('delete'); setShowConfirmModal(true); }} className="text-red-500 hover:underline px-1">Delete</button>
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
        message="Are you sure you want to delete this genre?"
        onConfirm={handleConfirm}
        onCancel={() => setShowConfirmModal(false)}
        isDangerousAction={true}
      />
    </CMSLayout>
  );
};

export default CMSGenres;
