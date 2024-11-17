"use client";
import React from 'react';

const page = () => {
  // Dummy data for classes
  const classes = [
    {
      id: 1,
      className: "Yoga Basics",
      date: "2023-11-01",
      duration: "2 hours",
      trainees: 10,
    },
    {
      id: 2,
      className: "Advanced Pilates",
      date: "2023-11-10",
      duration: "1.5 hours",
      trainees: 5,
    },
    {
      id: 3,
      className: "HIIT Training",
      date: "2023-11-15",
      duration: "1 hour",
      trainees: 7,
    },
  ];

  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-bold text-center mb-6">Class Scheduling</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <div key={classItem.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{classItem.className}</h3>
            <p className="text-gray-600">Date: {classItem.date}</p>
            <p className="text-gray-600">Duration: {classItem.duration}</p>
            <p className="text-gray-600">Trainees: {classItem.trainees}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
