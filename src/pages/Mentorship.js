// src/pages/Mentorship.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Ensure correct path to firebase.js
import { collection, getDocs } from 'firebase/firestore';
import Modal from 'react-modal';

function Mentorship() {
  const [mentors, setMentors] = useState([]);
  const [filteredMentors, setFilteredMentors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Fetch mentors from Firestore on component mount
  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const mentorsCollection = collection(db, 'mentors');
        const mentorSnapshot = await getDocs(mentorsCollection);
        const mentorList = mentorSnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name || 'Unknown Name', // Default value
            expertise: data.expertise || 'No expertise provided', // Default value
            availability: data.availability || 'Unavailable', // Default value
          };
        });
        setMentors(mentorList);
        setFilteredMentors(mentorList); // Initially show all mentors
      } catch (error) {
        console.error('Error fetching mentors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  // Filter mentors based on search query, selected course, and expertise
  useEffect(() => {
    let filtered = mentors.filter((mentor) => {
      const name = mentor.name ? mentor.name.toLowerCase() : '';
      const expertise = mentor.expertise ? mentor.expertise.toLowerCase() : '';
      return (
        (name.includes(searchQuery.toLowerCase()) ||
          expertise.includes(searchQuery.toLowerCase())) &&
        (selectedCourse ? mentor.expertise.toLowerCase().includes(selectedCourse.toLowerCase()) : true)
      );
    });
    setFilteredMentors(filtered);
  }, [searchQuery, mentors, selectedCourse]);

  // Handle course selection change
  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  // Open modal with mentor details
  const openModal = (mentor) => {
    setSelectedMentor(mentor);
    setModalIsOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  if (loading) {
    return <p className="text-center mt-5">Loading mentors...</p>;
  }

  return (
    <div className="min-h-screen p-5 bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-5 text-center">Mentorship</h1>

      {/* Search Bar */}
      <div className="mb-5">
        <input
          type="text"
          className="w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search mentors by name or expertise..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Course Dropdown */}
      <div className="mb-5">
        <select
          className="w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={selectedCourse}
          onChange={handleCourseChange}
        >
          <option value="">Select a course...</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Web Development">Web Development</option>
          <option value="Data Science">Data Science</option>
          {/* Add more courses here */}
        </select>
      </div>

      {/* Mentor Cards */}
      <div className="space-y-4">
        {filteredMentors.map((mentor) => (
          <div key={mentor.id} className="p-4 bg-white rounded shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold">{mentor.name}</h3>
            <p>Expertise: {mentor.expertise}</p>
            <p>
              Availability:{' '}
              <span className={mentor.availability === 'Available' ? 'text-green-500' : 'text-red-500'}>
                {mentor.availability}
              </span>
            </p>
            <div className="mt-2 flex space-x-2">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400"
                onClick={() => openModal(mentor)}
              >
                Connect
              </button>
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-400"
                onClick={() => alert(`Messaging feature coming soon for ${mentor.name}`)}
              >
                Message
              </button>
            </div>
          </div>
        ))}
        {filteredMentors.length === 0 && (
          <p className="text-center text-gray-600">No mentors found matching your search or course.</p>
        )}
      </div>

      {/* Mentor Detail Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Mentor Details"
        className="bg-white p-6 rounded-lg shadow-xl max-w-lg mx-auto"
      >
        <h2 className="text-2xl font-bold">{selectedMentor?.name}</h2>
        <p className="mt-2 text-lg"><strong>Expertise:</strong> {selectedMentor?.expertise}</p>
        <p className="mt-2 text-lg"><strong>Availability:</strong> {selectedMentor?.availability}</p>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400"
            onClick={() => alert(`Connecting with ${selectedMentor?.name}`)}
          >
            Connect
          </button>
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-400"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Mentorship;
