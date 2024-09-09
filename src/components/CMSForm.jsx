import React from 'react';

const CMSForm = ({ fields, onSubmit }) => {
  return (
    <form className="mb-10 bg-gray-100 p-4 rounded-lg" onSubmit={onSubmit}>
      <div className="flex flex-wrap items-center">
        {fields.map((field) => (
          <input
            key={field.id}
            id={field.id}
            type={field.type}
            placeholder={field.placeholder}
            className="text-base text-body-color dark:text-dark-6 border border-gray-400 rounded-lg p-2 mx-4 my-2"
          />
        ))}
        <div className="m-4 w-full">
          <button type="submit" className="text-white inline-flex items-center justify-center py-2 text-base font-medium text-center rounded-md bg-primary px-7 hover:bg-blue-dark">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default CMSForm;
