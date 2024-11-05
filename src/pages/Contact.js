import React, { useState } from 'react';
import { db } from '../firebase'; // Ensure you have your Firestore instance set up
import { collection, addDoc } from 'firebase/firestore';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate the inputs
    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      // Save message to Firestore with additional fields
      await addDoc(collection(db, 'messages'), {
        name,
        email,
        message,
        timestamp: new Date(),
        status: 'received', // Initial status when the message is sent
        reply: '', // Placeholder for a reply, can be updated later
      });

      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');
      setSuccess('Your message has been sent successfully!');
    } catch (err) {
      console.error("Error adding message: ", err);
      setError('There was an error sending your message. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-teal-500 to-blue-800 text-white p-6">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg sm:text-xl text-center max-w-xl mb-4">
        For inquiries, please reach out to us at 
        <a href="mailto:contactherpath@gmail.com" className="underline text-yellow-300 hover:text-yellow-400"> Contact@herpath.com  </a>.
      </p>
      <p className="text-md sm:text-lg text-center max-w-xl mb-8">
        You can also find us on our social media channels found in our about page, or fill out the form below to send us a message directly.
      </p>
      {/* Contact Form */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Your Name" 
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea 
            placeholder="Your Message" 
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800" 
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="bg-green-600 text-white py-2 rounded-full font-bold hover:bg-green-500 transition duration-300">
            Send Message
          </button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
