import React from 'react';

function StudentForm() {
  return (
    <>
      {/* Student-specific fields */}
      <div className="mb-4">
        <label className="block text-teal-600 font-semibold mb-2">Grade Level</label>
        <input
          type="text"
          className="border rounded py-2 px-3 text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
          placeholder="e.g. High School"
          required
        />
      </div>
    </>
  );
}

export default StudentForm;
