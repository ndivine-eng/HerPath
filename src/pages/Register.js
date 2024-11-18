import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'; // For navigation
import { db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [role, setRole] = useState('student'); // State to track role selection (student or mentor)
  const [availability, setAvailability] = useState(''); // Availability field
  const [expertise, setExpertise] = useState(''); // Expertise field
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // For navigation after registration

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userData = {
        email: user.email,
        name: name,
        bio: bio,
        profilePhoto: profilePhoto ? await uploadProfilePhoto(profilePhoto) : null,
        role: role, // Save the role (student or mentor)
        availability: availability, // Save the availability for mentors
        expertise: expertise, // Save the expertise for mentors
      };

      // Save user data to Firestore
      await setDoc(doc(db, 'users', user.uid), userData);

      alert('Registration successful!');

      // Navigate based on the role
      if (role === 'student') {
        navigate('/login'); // Navigate to login page after student registration
      } else {
        navigate('/mentor-details'); // Navigate to MentorDetails page after mentor registration
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle profile photo upload (if needed)
  const uploadProfilePhoto = async (file) => {
    return 'url_of_uploaded_photo'; // Placeholder return for now
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-teal-500 to-blue-800 text-white p-6">
      <h1 className="text-4xl font-extrabold mb-6">Register</h1>
      
      {/* Buttons to switch between student and mentor registration */}
      <div className="mb-6">
        <button
          onClick={() => setRole('mentor')}
          className={`mr-4 py-2 px-6 rounded-lg ${role === 'mentor' ? 'bg-teal-600' : 'bg-teal-400'}`}
        >
          Register as Mentor
        </button>
        <button
          onClick={() => setRole('student')}
          className={`py-2 px-6 rounded-lg ${role === 'student' ? 'bg-teal-600' : 'bg-teal-400'}`}
        >
          Register as Student
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <div className="mb-4">
          <label className="block text-teal-600 font-semibold mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded py-2 px-3 text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>

        {role === 'mentor' && (
          <>
            <div className="mb-4">
              <label className="block text-teal-600 font-semibold mb-2" htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="border rounded py-2 px-3 text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                rows="3"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-teal-600 font-semibold mb-2" htmlFor="availability">Availability</label>
              <input
                type="text"
                id="availability"
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                className="border rounded py-2 px-3 text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
                placeholder="e.g. Weekdays from 9am to 5pm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-teal-600 font-semibold mb-2" htmlFor="expertise">Expertise</label>
              <input
                type="text"
                id="expertise"
                value={expertise}
                onChange={(e) => setExpertise(e.target.value)}
                className="border rounded py-2 px-3 text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
                placeholder="e.g. Software Engineering, Agriculture"
              />
            </div>

            <div className="mb-4">
              <label className="block text-teal-600 font-semibold mb-2" htmlFor="profilePhoto">Profile Photo</label>
              <input
                type="file"
                id="profilePhoto"
                onChange={(e) => setProfilePhoto(e.target.files[0])}
                className="border rounded py-2 px-3 text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                accept="image/*"
              />
            </div>
          </>
        )}

        <div className="mb-4">
          <label className="block text-teal-600 font-semibold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded py-2 px-3 text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-teal-600 font-semibold mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded py-2 px-3 text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>

        <button
          type="submit"
          className={`bg-teal-600 text-white px-4 py-2 rounded-full font-bold hover:bg-teal-500 transition duration-300 w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>

        <div className="mt-4 text-center">
          <p className="text-teal-600">
            Already have an account?{' '}
            <button 
              onClick={() => navigate('/login')} 
              className="text-yellow-500 hover:underline"
            >
              Sign In
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
