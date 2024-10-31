import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-teal-500 to-blue-800 text-white p-6">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg sm:text-xl text-center max-w-xl mb-4">
        For inquiries, please reach out to us at 
        <a href="mailto:contact@herpath.com" className="underline text-yellow-300 hover:text-yellow-400"> contact@herpath.com</a>.
      </p>
      <p className="text-md sm:text-lg text-center max-w-xl mb-8">
        You can also find us on our social media channels, or fill out the form below to send us a message directly.
      </p>
      {/* Placeholder for Contact Form */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <form className="flex flex-col space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800" // Dark text color
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800" // Dark text color
          />
          <textarea 
            placeholder="Your Message" 
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800" // Dark text color
            rows="4"
          />
          <button type="submit" className="bg-green-600 text-white py-2 rounded-full font-bold hover:bg-green-500 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
