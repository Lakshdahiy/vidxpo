import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Dashboard() {
  return (
    <div>
      <Header />
      <main className="min-h-screen p-6">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
        {/* stats section */}
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <div className='bg-white p-6 shadow-lg rounded-lg '>
                <h3 className='text-xl font-semibold text-gray-700'>Total Videos</h3>
                <p className='text-3xl font-bold'>20</p>
            </div>
            <div className='bg-white p-6 shadow-lg rounded-lg'>
                <h3 className='text-xl font-semibold text-gray-700'>Views</h3>
                <p className='text-3xl font-bold'>1500</p>        
            </div>
            <div className='bg-white p-6 shadow-lg rounded-lg'>
                    <h3 className='text-xl font-semibold text-gray-700'>Subscriber</h3>
                    <p className='text-3xl font-bold'>100</p>
                </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;
