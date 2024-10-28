import React, { useState } from "react";
import Dropdown from "@/Components/Dropdown";

const ProfilePictureCell = ({ imageUrl, name }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  return (
    <div className="h-28 w-20 overflow-hidden rounded border">
      {isImageLoaded && imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          onLoad={() => setIsImageLoaded(true)}
          onError={() => setIsImageLoaded(false)}
        />
      ) : (
        <div className="h-28 w-20 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
    </div>
  );
};

const CMSTable = ({ columns, data, actions, currentPage, itemsPerPage, countryOptions, onUpdate }) => {
  const [editingRow, setEditingRow] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEditClick = (item) => {
    setEditingRow(item.id);
    setEditData(item);

  };
  const handleInputChange = (e, columnId) => {
    const { value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [columnId]: value,
    }));
  };

  const handleDropdownChange = (id, value) => {
    setEditData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSave = (id) => {
    onUpdate(id, editData);
    setEditingRow(null);
  };

  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg my-10">
      <table className="w-full">
        <thead className="text-white bg-dark-2 text-left">
          <tr>
            <th scope="col" className="p-4 w-4 text-center">No.</th>
            {columns.map((column) => (
              <th key={column.id} scope="col" className={`p-4 ${column.width || "w-auto"}`}>
                {column.title}
              </th>
            ))}
            {actions && <th className="p-4 text-center">Actions</th>}
          </tr>
        </thead>
        <tbody className="text-base text-body-color dark:text-dark-6">
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (actions ? 1 : 0) + 1} className="text-center py-4">
                No data available
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={item.id} className="border-b hover:bg-gray-100">
                <th scope="row" className="px-2 py-4 text-center">
                  {index + 1 + (currentPage - 1) * itemsPerPage}
                </th>
                {columns.map((column) => (
                  <td key={column.id} className="px-2 py-4">
                    {editingRow === item.id ? (
                      column.id === 'country_id' ? (
                        <Dropdown
                          id={column.id}
                          options={countryOptions}
                          value={editData[column.id]}
                          className="w-full text-base text-body-color border border-gray-400 rounded-lg p-2 px-4"
                          onChange={(e) => handleDropdownChange(column.id, e.target.value)}
                          placeholder="Select Country"
                        />
                      ) : (
                        <input
                          type={column.type || "text"}
                          value={editData[column.id] || ""}
                          onChange={(e) => handleInputChange(e, column.id)}
                          className="w-full text-base text-body-color border border-gray-400 rounded-lg p-2"
                        />
                      )
                    ) : (
                      item[column.id] ?? "-"
                    )}
                  </td>
                ))}
                <td className="px-2 py-4 text-center">
                  {editingRow === item.id ? (
                    <button
                      className="text-primary hover:underline px-1"
                      onClick={() => handleSave(item.id)}
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        className="text-primary hover:underline px-1"
                        onClick={() => handleEditClick(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-500 hover:underline px-1"
                        onClick={() => actions.find((action) => action.label === "Delete").onClick(item)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CMSTable;
