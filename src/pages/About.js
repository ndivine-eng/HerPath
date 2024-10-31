import React from 'react';

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-teal-500 to-blue-800 text-white p-6">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Us</h1>
      <p className="text-lg sm:text-xl max-w-2xl text-center mb-4">
        HerPath is dedicated to empowering individuals, especially women in rural areas, through personalized guidance and mentorship. We aim to support personal and professional growth, helping users unlock their potential and achieve their goals.
      </p>
      <p className="text-md sm:text-lg max-w-xl text-center mt-2">
        Our platform connects users with mentors, provides tailored resources, and fosters a supportive community. Join us in creating a brighter, more empowered future!
      </p>
    </div>
  );
}

export default About;
