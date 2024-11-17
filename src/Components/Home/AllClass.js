'use client';

const AllClass = () => {
  const data = [
    {
      id: 1,
      title: "Yoga Basics",
      enrolled: 5,
      seat: 10,
      duration: 60, // in minutes
      trainerName: "Alice Johnson",
    },
    {
      id: 2,
      title: "HIIT Power Hour",
      enrolled: 8,
      seat: 15,
      duration: 45, // in minutes
      trainerName: "Mark Davis",
    },
    {
      id: 3,
      title: "Strength Training 101",
      enrolled: 12,
      seat: 20,
      duration: 90, // in minutes
      trainerName: "Chris Smith",
    },
    {
      id: 4,
      title: "Pilates Core Blast",
      enrolled: 6,
      seat: 12,
      duration: 50, // in minutes
      trainerName: "Emma Brown",
    },
    {
      id: 5,
      title: "Spin Class Express",
      enrolled: 9,
      seat: 18,
      duration: 30, // in minutes
      trainerName: "Ryan Taylor",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-10 my-10">
      <h1 className="text-2xl font-bold text-center my-10">Our Gym Classes</h1>
      {/* Main grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300 border"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600">
              <span className="font-bold">Trainer:</span> {item.trainerName}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Duration:</span> {item.duration} minutes
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Seats:</span> {item.enrolled}/{item.seat}
            </p>
            <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClass;
