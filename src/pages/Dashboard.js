import React, { useState } from 'react';

function Dashboard() {
  const [courses, setCourses] = useState([
    { title: 'Introduction to Career Planning', description: 'Learn how to navigate your career path with strategic planning.' },
    { title: 'Basic Financial Literacy', description: 'Understand the basics of managing finances for a secure future.' },
    { title: 'Effective Communication Skills', description: 'Enhance your communication skills for personal and professional growth.' }
  ]);
  const [newCourse, setNewCourse] = useState('');

  const handleAddCourse = () => {
    if (newCourse) {
      setCourses([...courses, { title: newCourse, description: 'Newly added course' }]);
      setNewCourse('');
    }
  };

  return (
    <div className="min-h-screen p-5 bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-5 text-center">Dashboard</h1>

      {/* Available Courses Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Available Courses</h2>
        <ul className="space-y-4">
          {courses.map((course, index) => (
            <li key={index} className="p-4 bg-white rounded shadow-md">
              <h3 className="text-xl font-bold">{course.title}</h3>
              <p>{course.description}</p>
            </li>
          ))}
        </ul>

        {/* Add New Course Section */}
        <div className="mt-6 flex items-center">
          <input
            type="text"
            placeholder="Add a new course"
            className="p-2 border border-gray-300 rounded flex-grow mr-2"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
          />
          <button
            onClick={handleAddCourse}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400"
          >
            Add Course
          </button>
        </div>
      </div>

      {/* Video Resources Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Video Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded shadow-md p-4">
            <h3 className="font-bold">Career Path Planning</h3>
            <video controls className="w-full mt-2 rounded">
              <source src="https://example.com/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="bg-white rounded shadow-md p-4">
            <h3 className="font-bold">Communication Skills</h3>
            <video controls className="w-full mt-2 rounded">
              <source src="https://example.com/video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Add more video sections as needed */}
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded shadow-md">
            <h3 className="font-bold">How do I choose the right career path?</h3>
            <p>Consider your interests, strengths, and seek guidance from mentors or professionals.</p>
          </li>
          <li className="bg-white p-4 rounded shadow-md">
            <h3 className="font-bold">What resources can I use for financial literacy?</h3>
            <p>Our "Basic Financial Literacy" course covers the fundamentals to get you started.</p>
          </li>
          {/* Add more FAQ items as needed */}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
