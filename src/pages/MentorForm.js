import React from 'react';

function MentorForm() {
  return (
    <>
      {/* Mentor-specific fields */}
      <div className="mb-4">
        <label className="block text-teal-600 font-semibold mb-2">Expertise</label>
        <input
          type="text"
          className="border rounded py-2 px-3 text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
          placeholder="e.g. Software Engineering"
          required
        />
      </div>
    </>
  );
}

export default MentorForm;
