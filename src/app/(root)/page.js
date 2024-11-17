import Image from "next/image";
import gym from "../../../public/image/gym.svg";
import AllClass from "@/Components/Home/AllClass";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-center  bg-gray-100">
        {/* Banner Container */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl px-4 sm:px-6 md:px-8 gap-20">
          {/* Left Side: SVG Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
            {/* Use Next.js Image component */}
            <Image
              src={gym}
              alt="Gym"
              className="w-full h-auto object-contain"
              width={600}
              height={400}
              priority
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Transform Your Body Today
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              Join the best gym in town and start your fitness journey. Achieve
              your goals with professional trainers and a variety of equipment.
            </p>
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <AllClass />
    </>
  );
};

export default page;
