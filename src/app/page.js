import React from 'react';
import UserPage from './UserPage';

// Server-side function to fetch data
async function fetchUsers() {
  const response = await fetch('https://665621609f970b3b36c4625e.mockapi.io/users');
  const users = await response.json();
  return users;
}

export default async function Page() {
  const users = await fetchUsers();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <UserPage initialUsers={users} />
    </main>
  );
}
