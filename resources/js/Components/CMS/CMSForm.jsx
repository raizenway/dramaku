import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg">
      <div className="flex flex-wrap">
        {fields.map((field) => (
          <div key={field.id} className="mx-4 my-2">
            <label htmlFor={field.id} className="block text-base mb-1">
              {field.label}
            </label>
            {field.type === "file" ? (
              <input
                type="file"
                id={field.id}
                className="block w-full text-base border border-gray-400 rounded-lg cursor-pointer bg-gray-50"
                onChange={handleChange}
              />
            ) : (
              <input
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                className="text-base text-body-color dark:text-dark-6 border border-gray-400 rounded-lg p-2"
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
