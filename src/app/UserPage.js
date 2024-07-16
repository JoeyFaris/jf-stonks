'use client'; 

import React, { useState } from 'react';
import Image from 'next/image';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import Sidebar from './components/Sidebar';
import ChatBox from './components/ChatBox';

export default function UserPage({ initialUsers }) {
  const [users, setUsers] = useState(initialUsers);
  const [currentUser, setCurrentUser] = useState(null);

  const handleFormSubmit = async (user) => {
    if (user.id) {
      // Update user
      const response = await fetch(`https://665621609f970b3b36c4625e.mockapi.io/users/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      const updatedUser = await response.json();
      setUsers(users.map(u => (u.id === updatedUser.id ? updatedUser : u)));
    } else {
      // Add new user
      const response = await fetch('https://665621609f970b3b36c4625e.mockapi.io/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      const newUser = await response.json();
      setUsers([...users, newUser]);
    }
    setCurrentUser(null);
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
  };

  const handleDelete = async (id) => {
    await fetch(`https://665621609f970b3b36c4625e.mockapi.io/users/${id}`, {
      method: 'DELETE',
    });
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div style={{backgroundColor: '#393a52'}} className="flex flex-col min-h-screen ">
      <div className='flex'>

      <Sidebar users={users} handleDelete={handleDelete} handleEdit={handleEdit} />
      <ChatBox />
      {/* <UserList users={users} handleEdit={handleEdit} handleDelete={handleDelete} /> */}
      </div>
      <footer className="mt-8 text-center">
        <a
          className="flex items-center justify-center gap-2 p-8 text-gray-700 dark:text-gray-300"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
        </a>
      </footer>
    </div>
  );
}
