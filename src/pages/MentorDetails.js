import React, { useState, useEffect } from 'react';
import { db, storage } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';


function MentorDetails() {
  const { userId } = useParams(); // Get userId from the URL
  const [availability, setAvailability] = useState('');
  const [expertise, setExpertise] = useState('');
  const [bio, setBio] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [profilePhotoPreview, setProfilePhotoPreview] = useState(null);
  const [courses, setCourses] = useState([]);
  const [courseInput, setCourseInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [flashMessage, setFlashMessage] = useState('');
  const [error, setError] = useState(null); // State for error messages
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      console.error('User ID not found in the URL parameters');
      setError('User ID is missing. Please try again.');
    }
  }, [userId]);

  const addCourse = () => {
    if (courseInput.trim() !== '') {
      setCourses((prevCourses) => [...prevCourses, courseInput.trim()]);
      setCourseInput(''); // Clear input
    }
  };

  const removeCourse = (course) => {
    setCourses(courses.filter((item) => item !== course));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const mentorData = {
      availability,
      expertise,
      bio,
      courses,
      profilePhoto: null,
    };

    try {
      if (profilePhoto) {
        const storageRef = ref(storage, `mentors/${userId}/profilePhoto`);
        const uploadTask = uploadBytesResumable(storageRef, profilePhoto);

        uploadTask.on(
          'state_changed',
          null,
          (error) => {
            setError('Error uploading profile photo.');
            console.error(error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            mentorData.profilePhoto = downloadURL;

            await setDoc(doc(db, 'mentors', userId), mentorData);
            setFlashMessage('Profile updated successfully!');
            setTimeout(() => setFlashMessage(''), 3000); // Flash message disappears after 3 seconds
            navigate('/dashboard');
          }
        );
      } else {
        await setDoc(doc(db, 'mentors', userId), mentorData);
        setFlashMessage('Profile updated successfully!');
        setTimeout(() => setFlashMessage(''), 3000); // Flash message disappears after 3 seconds
        navigate('/dashboard');
      }
    } catch (err) {
      setError('An error occurred while saving your profile.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      <div className="flex-grow bg-gradient-to-b from-teal-500 to-blue-800 text-white p-6">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold mb-6 text-center">Complete Your Mentor Profile</h1>
          {userId && <p className="text-lg text-center text-white">User ID: {userId}</p>}
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          {/* Flash Message */}
          {flashMessage && (
            <div className="bg-green-500 text-white p-3 rounded-md text-center mb-4">
              {flashMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-teal-600 font-semibold mb-2" htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="border rounded py-2 px-3 text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                rows="3"
                placeholder="Tell us about yourself"
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
                placeholder="e.g. Weekdays from 9am to 5pm"
                required
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
                placeholder="e.g. Software Engineering, Agriculture"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-teal-600 font-semibold mb-2" htmlFor="course">Courses</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  id="course"
                  value={courseInput}
                  onChange={(e) => setCourseInput(e.target.value)}
                  className="border rounded py-2 px-3 text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                  placeholder="e.g. React Basics"
                />
                <button
                  type="button"
                  onClick={addCourse}
                  className="bg-teal-600 text-white px-4 py-2 rounded-full font-bold hover:bg-teal-500 transition duration-300"
                >
                  Add
                </button>
              </div>
              {courses.length > 0 && (
                <ul className="mt-2 text-black">
                  {courses.map((course, index) => (
                    <li key={index} className="border-b py-1 flex justify-between items-center">
                      {course}
                      <button
                        type="button"
                        onClick={() => removeCourse(course)}
                        className="text-red-500 hover:text-red-700 ml-2"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-teal-600 font-semibold mb-2" htmlFor="profilePhoto">Profile Photo</label>
              <input
                type="file"
                id="profilePhoto"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setProfilePhoto(file);
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => setProfilePhotoPreview(reader.result);
                    reader.readAsDataURL(file);
                  }
                }}
                className="border rounded py-2 px-3 text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                accept="image/*"
              />
              {profilePhotoPreview && (
                <img src={profilePhotoPreview} alt="Profile Preview" className="w-32 h-32 object-cover rounded-full mt-4" />
              )}
            </div>
            <button
              type="submit"
              className={`bg-teal-600 text-white px-4 py-2 rounded-full font-bold hover:bg-teal-500 transition duration-300 w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Details'}
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default MentorDetails;