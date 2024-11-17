"use client";
import React from 'react';

const page = () => {
  // Dummy data for enrolled classes
  const enrolledClasses = [
    {
      id: 1,
      title: "Yoga Basics",
      trainer: "John Doe",
      duration: "2 hours",
    },
    {
      id: 2,
      title: "Advanced Pilates",
      trainer: "Jane Smith",
      duration: "1.5 hours",
    },
    {
      id: 3,
      title: "HIIT Training",
      trainer: "Robert Brown",
      duration: "1 hour",
    },
  ];

  // Handle the start class action
  const handleStartClass = (classId) => {
    console.log(`Start class with ID: ${classId}`);
    // Add your logic for starting the class here
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Enrolled Classes</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledClasses.map((classItem) => (
          <div key={classItem.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{classItem.title}</h3>
            <p className="text-gray-600">Trainer: {classItem.trainer}</p>
            <p className="text-gray-600">Duration: {classItem.duration}</p>
            <button
              onClick={() => handleStartClass(classItem.id)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Start Class
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
