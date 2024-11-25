import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [courses, setCourses] = useState([
    { title: 'Introduction to Career Planning', description: 'Learn how to navigate your career path with strategic planning.', link: 'https://www.nvcc.edu/dist/files/sites/student-resources/career-services/introduction_to_the_career_planning_process.pdf' },
    { title: 'Basic Financial Literacy', description: 'Understand the basics of managing finances for a secure future.', link: 'https://www.capitalone.com/learn-grow/money-management/financial-literacy/' },
    { title: 'Effective Communication Skills', description: 'Enhance your communication skills for personal and professional growth.', link: 'https://www.instagantt.com/project-management/top-10-skills-for-effective-communication' }
  ]);
  const [newCourse, setNewCourse] = useState({ title: '', description: '', link: '' });
  const [darkMode, setDarkMode] = useState(false);
  const [userName, setUserName] = useState("User");
  const navigate = useNavigate();

  // Load theme preference from localStorage on initial render
  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      setDarkMode(savedMode === 'dark');
    }
  }, []);

  // Save theme preference to localStorage
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleAddCourse = () => {
    if (newCourse.title && newCourse.link) {
      setCourses([...courses, { ...newCourse, description: newCourse.description || 'Newly added course' }]);
      setNewCourse({ title: '', description: '', link: '' });
    }
  };

  const handleNavigateToMentorship = () => {
    navigate('/mentorship');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen p-8 md:p-12 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Dark Mode Toggle */}
      <button onClick={toggleDarkMode} className="absolute top-4 left-4 bg-gray-700 text-white py-2 px-4 rounded-md">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Welcome Section */}
      <h1 className="text-3xl font-bold mb-6 text-center">{`Welcome back, ${userName}!`}</h1>

      {/* Notifications Section */}
      <div className={`p-4 rounded-md mb-6 ${darkMode ? 'bg-yellow-100 text-black' : 'bg-yellow-100 text-gray-900'}`}>
  <h3 className="font-semibold">Upcoming Event</h3>
  <p>Join our webinar on <strong>Career Success Strategies</strong> this Friday at 5 PM.</p>
</div>


      {/* Available Courses Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Available Courses</h2>
        <ul className="space-y-4">
          {courses.map((course, index) => (
            <li key={index} className={`p-4 rounded shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
              <h3 className="text-xl font-bold">{course.title}</h3>
              <p>{course.description}</p>
              <a href={course.link} className="text-blue-500 mt-2 inline-block" target="_blank" rel="noopener noreferrer">Access Course</a>
            </li>
          ))}
        </ul>

        {/* Add New Course Section */}
        <div className="mt-6 flex items-center">
          <input
            type="text"
            placeholder="Course Title"
            className="p-2 border border-gray-300 rounded flex-grow mr-2"
            value={newCourse.title}
            onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Course Link"
            className="p-2 border border-gray-300 rounded flex-grow mr-2"
            value={newCourse.link}
            onChange={(e) => setNewCourse({ ...newCourse, link: e.target.value })}
          />
          <input
            type="text"
            placeholder="Course Description"
            className="p-2 border border-gray-300 rounded flex-grow mr-2"
            value={newCourse.description}
            onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
          />
          <button
            onClick={handleAddCourse}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400"
          >
            Add Course
          </button>
        </div>
      </div>

      {/* Quiz Navigation Button */}
<div className="mb-10">
  <h2 className="text-2xl font-semibold mb-4">Take a Quiz</h2>
  <p className="mb-4">Test your knowledge and track your progress with our interactive quizzes!</p>
  <button
    onClick={() => navigate('/quiz')}
    className="w-full md:w-auto bg-purple-500 text-white py-3 px-6 rounded hover:bg-purple-400 font-semibold mx-auto block md:mx-0"
  >
    Go to Quiz Page
  </button>
</div>


      {/* Mentorship Navigation Button */}
      <div className="mb-10">
        <button
          onClick={handleNavigateToMentorship}
          className="w-full md:w-auto bg-green-500 text-white py-3 px-6 rounded hover:bg-green-400 font-semibold mx-auto block md:mx-0"
        >
          Connect with a Mentor
        </button>
      </div>

      {/* Featured Mentor Section */}
      <div className="bg-blue-100 p-4 rounded-md shadow mb-6">
        <h3 className="font-semibold">Featured Mentor: John Doe</h3>
        <p>Expert in Career Coaching with 10+ years of experience.</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2">Connect</button>
      </div>

      {/* Video Resources Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Essential Video Resources</h2>
        <p className="mb-4">Our handpicked video resources will guide you through key aspects of career development and personal growth.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Each Video Item */}
          <div className="bg-white rounded shadow-md p-4">
            <h3 className="font-bold">Career Path Planning</h3>
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/jVssNpBk37k"
              title="Career Path Planning"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="bg-white rounded shadow-md p-4">
            <h3 className="font-bold">Financial Literacy</h3>
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/q5JWp47z4bY"
              title="Financial Literacy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="bg-white rounded shadow-md p-4">
            <h3 className="font-bold">Communication Skills</h3>
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/7hr60EumwQ4"
              title="Communication Skills"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="bg-white rounded shadow-md p-4">
            <h3 className="font-bold">Mastering the Art of Interview</h3>
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/ppf9j8x0LA8"
              title="Mastering the Art of Interview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
