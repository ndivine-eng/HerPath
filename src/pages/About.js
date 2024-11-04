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
      
      <div className="bg-blue-700 rounded-lg p-6 shadow-lg mb-6">
        <p className="text-md sm:text-lg text-center mb-2">
          <strong>Mission:</strong> To provide accessible and effective career guidance and mentorship to empower individuals, enabling them to navigate their paths to success.
        </p>
        <p className="text-md sm:text-lg text-center">
          <strong>Vision:</strong> A world where every individual, regardless of their background, has the opportunity to pursue their dreams and contribute meaningfully to their communities.
        </p>
      </div>
      
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Our Functionalities</h2>
      <ul className="list-disc list-inside text-md sm:text-lg mb-6 max-w-2xl text-center">
        <li>🌟 Personalized mentorship matching based on user goals and interests.</li>
        <li>📚 Access to tailored resources and materials to support learning and development.</li>
        <li>🤝 Community forums for peer support and networking opportunities.</li>
        <li>🗓️ Workshops and webinars on relevant topics for skill enhancement.</li>
        <li>📈 Progress tracking to celebrate achievements and set future goals.</li>
        <li>💬 Anonymous Q&A section for users to ask questions and seek advice.</li>
        <li>🎉 Success stories showcasing users' journeys and achievements.</li>
        <li>🔗 Job board featuring local opportunities and internships relevant to users' skills.</li>
      </ul>
      
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">How It Works</h2>
      <p className="text-md sm:text-lg max-w-xl text-center mb-6 p-4 rounded-lg bg-blue-600 bg-opacity-70 shadow-lg">
        Users can sign up and create a profile to indicate their interests and goals. They will then be matched with mentors who provide personalized guidance. Through our platform, users can access resources, participate in community discussions, and attend workshops tailored to their needs.
      </p>
      
      <p className="text-lg sm:text-xl max-w-2xl text-center mt-4 mb-6 p-4 rounded-lg bg-blue-600 bg-opacity-70 shadow-lg">
        Welcome to HerPath! We wish you great success on your journey toward personal and professional fulfillment. Together, let's create a brighter, more empowered future!
      </p>
    </div>
  );
}

export default About;
