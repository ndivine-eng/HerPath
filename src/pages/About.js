import React from 'react';

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-teal-500 to-blue-800 text-white p-6">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center drop-shadow-lg">
        About Us
      </h1>
      
      <p className="text-lg sm:text-xl max-w-2xl text-center mb-6 p-4 rounded-lg bg-blue-600 bg-opacity-70 shadow-lg">
        HerPath is dedicated to empowering individuals, especially women in rural areas, through personalized guidance and mentorship. Our mission is to support personal and professional growth, helping users unlock their potential and achieve their goals.
      </p>
      
      <div className="bg-blue-800 rounded-lg p-6 shadow-lg mb-6">
        <p className="text-md sm:text-lg text-center mb-2">
          <strong>Mission:</strong> To provide accessible and effective career guidance and mentorship to empower individuals, enabling them to navigate their paths to success.
        </p>
        <p className="text-md sm:text-lg text-center">
          <strong>Vision:</strong> A world where every individual, regardless of their background, has the opportunity to pursue their dreams and contribute meaningfully to their communities.
        </p>
      </div>
      
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Our Functionalities</h2>
      <ul className="list-disc list-inside text-md sm:text-lg mb-6 max-w-2xl text-center">
        <li className="bg-blue-700 p-2 rounded mb-2">🌟 <a href="#mentorship" className="text-yellow-300 hover:underline">Personalized mentorship matching based on user goals and interests.</a></li>
        <li className="bg-blue-700 p-2 rounded mb-2">📚 <a href="#resources" className="text-yellow-300 hover:underline">Access to tailored resources and materials to support learning and development.</a></li>
        <li className="bg-blue-700 p-2 rounded mb-2">🤝 <a href="#forums" className="text-yellow-300 hover:underline">Community forums for peer support and networking opportunities.</a></li>
        <li className="bg-blue-700 p-2 rounded mb-2">🗓️ <a href="#workshops" className="text-yellow-300 hover:underline">Workshops and webinars on relevant topics for skill enhancement.</a></li>
        <li className="bg-blue-700 p-2 rounded mb-2">📈 <a href="#progress" className="text-yellow-300 hover:underline">Progress tracking to celebrate achievements and set future goals.</a></li>
        <li className="bg-blue-700 p-2 rounded mb-2">💬 <a href="#qa" className="text-yellow-300 hover:underline">Anonymous Q&A section for users to ask questions and seek advice.</a></li>
        <li className="bg-blue-700 p-2 rounded mb-2">🎉 <a href="#success" className="text-yellow-300 hover:underline">Success stories showcasing users' journeys and achievements.</a></li>
        <li className="bg-blue-700 p-2 rounded mb-2">🔗 <a href="#jobs" className="text-yellow-300 hover:underline">Job board featuring local opportunities and internships relevant to users' skills.</a></li>
      </ul>
      
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">How It Works</h2>
      <p className="text-md sm:text-lg max-w-xl text-center mb-6 p-4 rounded-lg bg-blue-600 bg-opacity-70 shadow-lg">
        Users can sign up and create a profile to indicate their interests and goals. They will then be matched with mentors who provide personalized guidance. Through our platform, users can access resources, participate in community discussions, and attend workshops tailored to their needs.
      </p>
      
      <p className="text-lg sm:text-xl max-w-2xl text-center mt-4 mb-6 p-4 rounded-lg bg-blue-600 bg-opacity-70 shadow-lg">
        Welcome to HerPath! We wish you great success on your journey toward personal and professional fulfillment. Together, let's create a brighter, more empowered future!
      </p>
      
      {/* Social Media Links */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
        <div className="flex space-x-4 justify-center">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-400">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-400">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-400">Instagram</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-400">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default About;
