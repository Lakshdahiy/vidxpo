import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-3xl font-bold text-blue-600">VidXpo</div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="/" className="text-gray-700">Home</a></li>
          <li><a href="/dashboard" className="text-gray-700">Dashboard</a></li>
          <li><a href="/profile" className="text-gray-700">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
