'use client';

import React, { useState, useEffect } from 'react';

const UserFilters = ({ filters, onFilterChange }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(localFilters);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg p-4 bg-white shadow-md rounded-lg mb-4">
      <input
        type="text"
        name="username"
        value={localFilters.username || ''}
        onChange={handleChange}
        placeholder="Search by username"
        className="w-full p-2 mb-4 bg-gray-100 rounded-lg"
      />
      <input
        type="text"
        name="email"
        value={localFilters.email || ''}
        onChange={handleChange}
        placeholder="Search by email"
        className="w-full p-2 mb-4 bg-gray-100 rounded-lg"
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-lg">
        Apply Filters
      </button>
    </form>
  );
};

export default UserFilters;
