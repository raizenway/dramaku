import React, { useState } from "react";
import Dropdown from "@/Components/Dropdown";

const CMSForm = ({ fields, onSubmit, initialValues = {}, errors = {} }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field.id] = initialValues[field.id] || "";
      return acc;
    }, {})
  );

  const [localErrors, setLocalErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, type, files } = e.target;
    setFormData({
      ...formData,
      [id]: type === "file" ? files[0] : value,
    });
    setLocalErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
  };

  const handleDropdownChange = (id, value) => {
    setFormData({
      ...formData,
      [id]: value,
    });
    setLocalErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    fields.forEach((field) => {
      if (!formData[field.id]) {
        newErrors[field.id] = `${field.placeholder || "This field"} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setLocalErrors(newErrors);
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg">
      <div className="flex flex-wrap">
        {fields.map((field) => (
          <div key={field.id} className="w-full sm:w-1/2 lg:w-1/4 mx-4 my-2">
            {field.type === "file" ? (
              <div>
                <input
                  type="file"
                  id={field.id}
                  className={`block w-full text-base border rounded-lg cursor-pointer bg-gray-50 ${
                    errors[field.id] || localErrors[field.id] ? "border-red-500" : "border-gray-400"
                  }`}
                  onChange={handleChange}
                />
                {(errors[field.id] || localErrors[field.id]) && (
                  <p className="text-red-500 text-sm mt-1">{errors[field.id] || localErrors[field.id]}</p>
                )}
              </div>
            ) : field.type === "searchable-select" ? (
              <div>
                <Dropdown
                  id={field.id}
                  options={field.options}
                  value={formData[field.id]}
                  className={`w-full text-base text-body-color border rounded-lg p-2 px-4 ${
                    errors[field.id] || localErrors[field.id] ? "border-red-500" : "border-gray-400"
                  }`}
                  onChange={(e) => handleDropdownChange(field.id, e.target.value)}
                  placeholder={field.placeholder}
                />
                {(errors[field.id] || localErrors[field.id]) && (
                  <p className="text-red-500 text-sm mt-1">{errors[field.id] || localErrors[field.id]}</p>
                )}
              </div>
            ) : (
              <div>
                <input
                  type={field.type}
                  id={field.id}
                  placeholder={field.placeholder}
                  className={`w-full text-base text-body-color border rounded-lg p-2 ${
                    errors[field.id] || localErrors[field.id] ? "border-red-500" : "border-gray-400"
                  }`}
                  value={formData[field.id]}
                  onChange={handleChange}
                />
                {(errors[field.id] || localErrors[field.id]) && (
                  <p className="text-red-500 text-sm mt-1">{errors[field.id] || localErrors[field.id]}</p>
                )}
              </div>
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
