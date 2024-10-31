import React from 'react';
import guidanceImage from '../Assets/Guidance.jpeg';
import ImageComponent from '../components/ImageComponent';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-teal-500 to-blue-800 text-white relative">
      {/* Logo Section */}
      <div className="absolute top-0 right-0 m-4"> {/* Margin to keep logo from edge */}
        <ImageComponent 
          src={guidanceImage} 
          alt="HerPath Logo" 
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg" // Added shadow
        />
      </div>

      <div className="text-center p-5 mt-20 sm:mt-24 lg:mt-32"> {/* Responsive top margin */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Welcome to HerPath</h1>
        <p className="text-lg sm:text-xl mb-6 max-w-lg mx-auto">
          Your journey to empowerment and guidance starts here!
        </p>
        
        <div className="mt-5">
          <h2 className="text-2xl sm:text-3xl font-semibold">Get Started</h2>
          <p className="text-md sm:text-lg mb-4">Explore our resources and connect with mentors.</p>
          <button className="mt-4 bg-yellow-500 text-purple-700 px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition duration-300">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
