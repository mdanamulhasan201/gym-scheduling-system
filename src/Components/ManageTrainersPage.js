"use client"
import{ useState } from 'react';
import { FaEllipsisH } from 'react-icons/fa';

const ManageTrainersPage = () => {
  // Sample data (replace with real data as necessary)
  const trainersData = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890", address: "123 Main St", role: "Trainer", joiningDate: "2023-05-01" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", phone: "098-765-4321", address: "456 Oak St", role: "Assistant", joiningDate: "2022-03-15" },
    { id: 3, name: "Robert Brown", email: "robert.brown@example.com", phone: "111-222-3333", address: "789 Pine St", role: "Trainer", joiningDate: "2021-08-19" },
    { id: 4, name: "Emma Wilson", email: "emma.wilson@example.com", phone: "234-567-8901", address: "135 Elm St", role: "Trainer", joiningDate: "2020-06-22" },
    { id: 5, name: "Chris Johnson", email: "chris.johnson@example.com", phone: "321-654-9870", address: "246 Maple St", role: "Assistant", joiningDate: "2019-10-11" },
    { id: 6, name: "Alice Carter", email: "alice.carter@example.com", phone: "456-789-0123", address: "357 Birch St", role: "Trainer", joiningDate: "2022-11-03" },
    // Add more rows as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [trainersPerPage] = useState(3); // Display 3 trainers per page
  const [showDropdown, setShowDropdown] = useState(null);

  // Calculate the index range for pagination
  const indexOfLastTrainer = currentPage * trainersPerPage;
  const indexOfFirstTrainer = indexOfLastTrainer - trainersPerPage;
  const currentTrainers = trainersData.slice(indexOfFirstTrainer, indexOfLastTrainer);

  // Change page handler
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = (id) => {
    console.log(`Delete trainer with ID: ${id}`);
    // Implement deletion logic here
  };

  const handleUpdate = (id) => {
    console.log(`Update trainer with ID: ${id}`);
    // Implement update logic here
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Manage Trainers</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Joining Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {currentTrainers.map((trainer, index) => (
              <tr key={trainer.id} className="border-b">
                <td className="px-4 py-2 text-center">{index + 1}</td>
                <td className="px-4 py-2">{trainer.name}</td>
                <td className="px-4 py-2">{trainer.email}</td>
                <td className="px-4 py-2">{trainer.phone}</td>
                <td className="px-4 py-2">{trainer.address}</td>
                <td className="px-4 py-2">{trainer.role}</td>
                <td className="px-4 py-2">{trainer.joiningDate}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    className="text-gray-600"
                    onClick={() => setShowDropdown(showDropdown === trainer.id ? null : trainer.id)}
                  >
                    <FaEllipsisH className="text-xl" />
                  </button>
                  {showDropdown === trainer.id && (
                    <div className="absolute bg-white border rounded shadow-lg mt-2 right-4 w-40">
                      <button
                        onClick={() => handleUpdate(trainer.id)}
                        className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(trainer.id)}
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
          disabled={currentPage * trainersPerPage >= trainersData.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ManageTrainersPage;
