import React, { useState } from 'react';

const Dropdown = ({ id, options, value, onChange, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="relative">
      <select
        id={id}
        className="w-full text-base text-body-color border border-gray-400 rounded-lg"
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>{placeholder}</option>
        {filteredOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
