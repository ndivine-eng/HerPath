import React from 'react';
import { Link } from 'react-router-dom'; // Navigation support
import logoImage from '../Assets/logo.jpeg'; // Replace with your logo path
import ImageComponent from '../components/ImageComponent';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-teal-500 to-blue-800 text-white relative">
      {/* Logo Section */}
      <div className="absolute top-0 right-0 m-4">
        <ImageComponent
          src={logoImage}
          alt="HerPath Logo"
          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </div>

      {/* Welcome Section */}
      <div className="text-center mt-16 sm:mt-24">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Welcome to HerPath
        </h1>
        <p className="text-lg sm:text-xl mb-6 max-w-xl mx-auto">
          Your journey to empowerment and guidance starts here!
        </p>
        <Link to="/register">
          <button className="bg-yellow-500 text-purple-800 px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition duration-300 shadow-lg hover:shadow-2xl">
            Join Now
          </button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-8 w-full max-w-6xl">
        {/* Feature Boxes */}
        <div className="bg-white text-teal-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold mb-2">Career Guidance</h3>
          <p>Explore personalized career paths tailored to your skills and interests.</p>
        </div>
        <div className="bg-white text-teal-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold mb-2">Mentorship</h3>
          <p>Connect with experienced mentors ready to help you succeed.</p>
        </div>
        <div className="bg-white text-teal-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold mb-2">Resources</h3>
          <p>Access a wealth of resources designed to support your learning journey.</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 w-full max-w-6xl">
          {/* Testimonial Cards */}
          <div className="bg-white text-teal-800 p-6 rounded-lg shadow-lg">
            <p className="italic">"HerPath helped me achieve my dreams!"</p>
            <p className="mt-2 font-bold">- Amina</p>
          </div>
          <div className="bg-white text-teal-800 p-6 rounded-lg shadow-lg">
            <p className="italic">"The mentors here are incredibly supportive!"</p>
            <p className="mt-2 font-bold">- John</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
