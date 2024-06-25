'use client';

import React, { useState, useEffect } from 'react';

const UserForm = ({ currentUser, handleFormSubmit }) => {
  const [user, setUser] = useState({ id: '', username: '', avatar: '', fullName: '', active: false });

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setUser((prev) => ({
      ...prev,
      active: e.target.checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(user);
    setUser({ id: '', username: '', avatar: '', fullName: '', active: false });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg p-4 bg-white shadow-md rounded-lg">
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}
        placeholder="Username"
        className="w-full p-2 mb-4 bg-gray-100 text-black rounded-lg"
      />
      <input
        type="text"
        name="fullName"
        value={user.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full p-2 mb-4 bg-gray-100 text-black rounded-lg"
      />
      <input
        type="text"
        name="avatar"
        value={user.avatar}
        onChange={handleChange}
        placeholder="Avatar URL"
        className="w-full p-2 mb-4 bg-gray-100 text-black rounded-lg"
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-lg">
        {user.id ? 'Update User' : 'Add User'}
      </button>
    </form>
  );
};

export default UserForm;
