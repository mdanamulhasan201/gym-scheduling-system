"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";

const ClassSchedulingPage = () => {
  const route = useRouter();
  const classesData = [
    {
      id: 1,
      className: "Yoga Basics",
      trainerName: "John Doe",
      duration: "2 hours",
      totalSeat: 20,
      totalEnrolled: 15,
      postDate: "2023-11-01",
    },
    {
      id: 2,
      className: "Advanced Pilates",
      trainerName: "Jane Smith",
      duration: "1.5 hours",
      totalSeat: 25,
      totalEnrolled: 20,
      postDate: "2023-11-10",
    },
    {
      id: 3,
      className: "HIIT Training",
      trainerName: "Robert Brown",
      duration: "1 hour",
      totalSeat: 30,
      totalEnrolled: 22,
      postDate: "2023-11-15",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [classesPerPage] = useState(3); 
  const [showDropdown, setShowDropdown] = useState(null);

  // Calculate the index range for pagination
  const indexOfLastClass = currentPage * classesPerPage;
  const indexOfFirstClass = indexOfLastClass - classesPerPage;
  const currentClasses = classesData.slice(indexOfFirstClass, indexOfLastClass);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEdit = (id) => {
    console.log(`Edit class with ID: ${id}`);
    // Implement edit logic
  };

  const handleDelete = (id) => {
    console.log(`Delete class with ID: ${id}`);
    // Implement delete logic
  };

  const handleAssign = (id) => {
    route.push("/admin/add-classes");
    console.log(`Assign class with ID: ${id}`);
    // Implement assign logic
  };

  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Class Scheduling</h2>

      <button
        onClick={handleAssign}
        className="bg-blue-600 px-5 py-2 rounded text-white mb-10"
      >
        Assign Class
      </button>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Class Name</th>
              <th className="px-4 py-2">Trainer Name</th>
              <th className="px-4 py-2">Duration</th>
              <th className="px-4 py-2">Total Seat</th>
              <th className="px-4 py-2">Total Enrolled</th>
              <th className="px-4 py-2">Post Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {currentClasses.map((classItem, index) => (
              <tr key={classItem.id} className="border-b">
                <td className="px-4 py-2 text-center">{index + 1}</td>
                <td className="px-4 py-2">{classItem.className}</td>
                <td className="px-4 py-2">{classItem.trainerName}</td>
                <td className="px-4 py-2">{classItem.duration}</td>
                <td className="px-4 py-2">{classItem.totalSeat}</td>
                <td className="px-4 py-2">{classItem.totalEnrolled}</td>
                <td className="px-4 py-2">{classItem.postDate}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    className="text-gray-600"
                    onClick={() =>
                      setShowDropdown(
                        showDropdown === classItem.id ? null : classItem.id
                      )
                    }
                  >
                    <FaEllipsisH className="text-xl" />
                  </button>
                  {showDropdown === classItem.id && (
                    <div className="absolute bg-white border rounded shadow-lg mt-2 right-4 w-40">
                      <button
                        onClick={() => handleEdit(classItem.id)}
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(classItem.id)}
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-l-md"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2">{currentPage}</span>
        <button
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-r-md"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage * classesPerPage >= classesData.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ClassSchedulingPage;
