"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

const AddTrainerForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log(data);  
      reset();  
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Add Trainer</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter name"
              {...register("name", { required: "Name is required" })}
              className={`mt-2 p-2 w-full border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-md`}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Please enter a valid email",
                },
              })}
              className={`mt-2 p-2 w-full border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md`}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter phone number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Please enter a valid 10-digit phone number",
                },
              })}
              className={`mt-2 p-2 w-full border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-md`}
            />
            {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
          </div>

          {/* Address Field */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              id="address"
              placeholder="Enter address"
              {...register("address", { required: "Address is required" })}
              className={`mt-2 p-2 w-full border ${errors.address ? "border-red-500" : "border-gray-300"} rounded-md`}
            />
            {errors.address && <p className="text-sm text-red-500">{errors.address.message}</p>}
          </div>

          {/* Role Field */}
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
            <select
              id="role"
              {...register("role", { required: "Role is required" })}
              className={`mt-2 p-2 w-full border ${errors.role ? "border-red-500" : "border-gray-300"} rounded-md`}
            >
              <option value="">Select a role</option>
              <option value="yoga_basics_trainer">Yoga Basics Trainer</option>
              <option value="hiit_power_hour">HIIT Power Hour</option>
              <option value="strength_training_101">Strength Training 101</option>
              <option value="pilates_core_blast">Pilates Core Blast</option>
              <option value="spin_class_express">Spin Class Express</option>
            </select>
            {errors.role && <p className="text-sm text-red-500">{errors.role.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTrainerForm;
