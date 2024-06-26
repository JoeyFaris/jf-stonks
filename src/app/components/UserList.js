'use client';

import React from 'react';

const UserList = ({ users, handleEdit, handleDelete }) => {
  return (
    <div style={{backgroundColor: '0B0E37'}} className="w-full max-w-lg p-4 bg-white shadow-md">
      {users.map((user) => (
        <div key={user.id} style={{backgroundColor: '0B0E37'}} className="flex justify-between p-2 mb-2 border-b">
          <div className="flex items-center">
            <img src={user.avatar} alt={user.username} className="w-10 h-10 rounded-full mr-4" />
            <div>
              <p className="text-black font-bold">{user.username}</p>
              <p className="text-gray-500">{user.fullName}</p>
              <p className="text-gray-500">Active: {user.active ? 'Yes' : 'No'}</p>
              <p className="text-gray-500 text-sm">Created At: {new Date(user.createdAt).toLocaleString()}</p>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => handleEdit(user)}
              className="mr-2 p-2 bg-yellow-500 text-white rounded-lg"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(user.id)}
              className="p-2 bg-red-500 text-white rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
