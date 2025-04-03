import React from "react";
import Heroo from "../assets/images/home.jpg"; // Adjust the path as necessary
import { TourPackages } from "../pages/TourPackages";
import { useNavigate } from "react-router-dom";

export function Hero() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center w-full h-full"
        style={{ backgroundImage: `url(${Heroo})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content Section */}
      <div className="relative text-center px-6 sm:px-8 md:px-12">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight">
          <span className="block">Discover the World with</span>
          <span className="block text-[#2a9df4]">Aerofly Travels</span>
        </h1>
        <p className="mt-4 max-w-lg sm:max-w-xl md:max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300">
          Your journey begins here. Book flights, apply for visas, and explore our curated tour packages.
        </p>
        <div className="mt-6">
            <button
            onClick={() => {
                const navigate = useNavigate();
                navigate("/tour-packages");
            }}
            className="inline-block bg-[#2a9df4] text-white px-6 sm:px-8 py-3 rounded-md hover:bg-[#1e87d6] transition-colors text-lg sm:text-xl"
            >
            Book Now
            </button>
        </div>
      </div>
    </div>
  );
}
