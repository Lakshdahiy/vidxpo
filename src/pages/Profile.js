import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Profile() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Profile</h2>

       
        <section className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Profile Information</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600">Username</label>
              <input type="text" id="username" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
            <div className="flex justify-between">
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-full">Save Changes</button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
