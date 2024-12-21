import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Home() {
  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-blue-600 text-white p-16 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to VidXpo</h1>
          <p className="text-xl mb-8">Explore and create amazing video content</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full text-lg">Get Started</button>
        </section>

        {/* Featured Content */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Add card components for each video */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img src="https://via.placeholder.com/300" alt="Featured Video" className="w-full h-48 object-cover rounded-lg mb-4"/>
              <h3 className="text-xl font-semibold">Video Title</h3>
              <p className="text-gray-600">Description of the video...</p>
            </div>
            {/* Repeat for more cards */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;

