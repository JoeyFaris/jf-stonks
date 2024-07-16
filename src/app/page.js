// Page.js
import React from 'react';
import Header from './components/Header';
import UserPage from './UserPage';

async function fetchUsers() {
  const response = await fetch('https://665621609f970b3b36c4625e.mockapi.io/users');
  const users = await response.json();
  return users;
}

export default async function Page() {
  const users = await fetchUsers();

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-200 dark:from-yellow-900 dark:to-yellow-800">
      <Header />
      <UserPage initialUsers={users} />
    </main>
  );
}
