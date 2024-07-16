// Sidebar.js
'use client'

import React, { useState } from 'react';

const Sidebar = ({ users, handleDelete, handleEdit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ backgroundColor: '#20223d' }} className={`h-full text-white transition-transform ${isOpen ? 'w-64' : 'w-16'}`}>
      <div className="flex-grow">
        <div className="flex justify-between items-center p-2">
          {isOpen ? (
            <>
              <div className="font-bold">Channels</div>
              <button 
                onClick={toggleSidebar} 
                className="text-white text-2xl hover:bg-gray-700 pl-2 pr-2 rounded"
                title="Close"
              >
                &times;
              </button>
            </>
          ) : (
            <button 
              onClick={toggleSidebar} 
              className="text-white text-2xl hover:bg-gray-700 ml-3 rounded" 
              title="Open"
            >
              &#9776;
            </button>
          )}
        </div>
        <hr className="border-gray-600" />
        <div className="p-4">
          <ul>
          {users.map(user => (
            <li key={user.id} className="mb-4 flex items-center">
                <img src={user.avatar} alt={user.fullName} className="w-8 h-8 rounded-full mr-2" />
                {isOpen && (
                <div>
                    <div className="font-bold">{user.fullName}</div>
                    <div className="text-sm text-gray-400">{user.username}</div>
                </div>
                )}
                <div
                className={`ml-auto w-3 h-3 rounded-full ${user.active ? 'bg-green-500' : 'bg-red-500'}`}
                style={{
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                    background: `${user.active ? 'linear-gradient(45deg, #00FF00, #008000)' : 'linear-gradient(45deg, #FF0000, #800000)'}`,
                }}
                ></div>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
