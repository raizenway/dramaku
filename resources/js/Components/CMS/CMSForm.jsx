import React, { useState } from "react";
import Dropdown from "@/Components/Dropdown";

const CMSForm = ({ fields, onSubmit, initialValues = {} }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field.id] = initialValues[field.id] || "";
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    const { id, value, type, files } = e.target;
    setFormData({
      ...formData,
      [id]: type === "file" ? files[0] : value,
    });
  };

  const handleDropdownChange = (id, value) => {
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg">
      <div className="flex flex-wrap">
        {fields.map((field) => (
          <div key={field.id} className="w-full sm:w-1/2 lg:w-1/4 mx-4 my-2">
            {field.type === "file" ? (  
              <input
                type="file"
                id={field.id}
                className="block w-full text-base border border-gray-400 rounded-lg cursor-pointer bg-gray-50"
                onChange={handleChange}
              />
            ) : field.type === "searchable-select" ? (
              <Dropdown
                id={field.id}
                options={field.options}
                value={formData[field.id]}
                className="w-full text-base text-body-color border border-gray-400 rounded-lg p-2 px-4"
                onChange={(e) => handleDropdownChange(field.id, e.target.value)}
                placeholder={field.placeholder}
              />
            ) : (
              <input
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                className="w-full text-base text-body-color border border-gray-400 rounded-lg p-2"
                value={formData[field.id]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}

        <div className="m-4 w-full">
          <button
            type="submit"
            className="text-white inline-flex items-center justify-center py-2 text-base font-medium text-center rounded-md bg-primary px-7 hover:bg-blue-dark"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default CMSForm;
