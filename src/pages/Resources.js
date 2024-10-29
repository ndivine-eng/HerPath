// src/pages/Resources.js

import React from 'react';

function Resources() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white">
      <h1 className="text-5xl font-extrabold mb-4">Resources</h1>
      <p className="text-xl mb-6">
        Explore our extensive library of resources designed to help you on your journey:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Mentorship Programs</li>
        <li>Workshops and Webinars</li>
        <li>Networking Opportunities</li>
        <li>Online Courses</li>
      </ul>
      <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded-full font-bold hover:bg-blue-200 transition duration-300">
        View All Resources
      </button>
    </div>
  );
}

export default Resources;
