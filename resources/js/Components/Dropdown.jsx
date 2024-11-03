import React, { useState } from 'react';

const Dropdown = ({ id, options, value, onChange, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleChange = (e) => {
    onChange(e);
    if (e.target.value === '') {
      setError('This field is required.');
    } else {
      setError('');
    }
  };

  return (
    <div className="relative">
      <select
        id={id}
        className={`w-full text-base text-body-color border rounded-lg ${error ? 'border-red-500' : 'border-gray-400'}`}
        value={value}
        onChange={handleChange}
      >
        <option value="" disabled>{placeholder}</option>
        {filteredOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Dropdown;