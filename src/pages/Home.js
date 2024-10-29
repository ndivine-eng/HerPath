// src/pages/Home.js

import React from 'react';
import guidanceImage from '../Assets/Guidance.jpeg'; // Path to your image
import ImageComponent from '../components/ImageComponent'; // Adjusted import path

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white relative">
      {/* Logo Section */}
      <div className="absolute top-0 right-0"> {/* Positioned to top-right corner */}
        <ImageComponent 
          src={guidanceImage} 
          alt="HerPath Logo" 
          className="w-24 h-24 rounded-full object-cover border-4 border-white" // Making it round
        />
      </div>

      <div className="text-center p-5 mt-20"> {/* Added margin-top to avoid overlap with the logo */}
        <h1 className="text-5xl font-extrabold mb-4">Welcome to HerPath</h1>
        <p className="text-xl mb-6">Your journey to empowerment and guidance starts here!</p>
        
        <div className="mt-5">
          <h2 className="text-3xl font-semibold">Get Started</h2>
          <p className="text-lg">Explore our resources and connect with mentors.</p>
          <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded-full font-bold hover:bg-blue-200 transition duration-300">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
