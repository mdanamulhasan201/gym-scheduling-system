"use client";
import React from "react";
import { useForm } from "react-hook-form";

const AddClassPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const trainers = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Robert Brown" },
  ];


  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Add Class</h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Class Name */}
          <div>
            <label className="block text-gray-700">Class Name</label>
            <input
              type="text"
              {...register("className", { required: "Class Name is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.className && (
              <p className="text-red-500 text-sm">{errors.className.message}</p>
            )}
          </div>

          {/* Trainer Assign Dropdown */}
          <div>
            <label className="block text-gray-700">Trainer Assign</label>
            <select
              {...register("trainerAssign", {
                required: "Trainer is required",
              })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            >
              <option value="">Select Trainer</option>
              {trainers.map((trainer) => (
                <option key={trainer.id} value={trainer.name}>
                  {trainer.name}
                </option>
              ))}
            </select>
            {errors.trainerAssign && (
              <p className="text-red-500 text-sm">
                {errors.trainerAssign.message}
              </p>
            )}
          </div>

          {/* Duration */}
          <div>
            <label className="block text-gray-700">Duration</label>
            <input
              type="text"
              {...register("duration", { required: "Duration is required" })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.duration && (
              <p className="text-red-500 text-sm">{errors.duration.message}</p>
            )}
          </div>

          {/* Total Seat */}
          <div>
            <label className="block text-gray-700">Total Seat</label>
            <input
              type="number"
              {...register("totalSeat", {
                required: "Total Seat is required",
                min: { value: 1, message: "Total Seat must be at least 1" },
              })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.totalSeat && (
              <p className="text-red-500 text-sm">{errors.totalSeat.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add Class
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClassPage;
