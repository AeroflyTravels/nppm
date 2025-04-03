import React from 'react';
import { Globe, FileCheck, Clock, DollarSign } from 'lucide-react';
import visa from "../assets/images/visa.jpg";

export function VisaServices() {
  const countries = [
    { name: 'United States', flag: '🇺🇸' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'Schengen', flag: '🇪🇺' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Dubai', flag: '🇦🇪' },
    { name: 'India', flag: '🇮🇳' },
  ];

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div className="relative h-80 sm:h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${visa})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">Visa Services</h1>
            <p className="text-sm sm:text-xl text-white">Fast, reliable visa processing for major destinations</p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Globe, title: "Global Coverage", text: "Visa services for over 100 countries" },
            { icon: FileCheck, title: "Expert Guidance", text: "Complete documentation support" },
            { icon: Clock, title: "Fast Processing", text: "Quick turnaround time" },
            { icon: DollarSign, title: "Competitive Rates", text: "Best prices guaranteed" },
          ].map(({ icon: Icon, title, text }, index) => (
            <div key={index} className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md">
              <Icon className="h-10 w-10 text-blue-600 mx-auto mb-2" />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="py-12 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Popular Destinations</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {countries.map(({ name, flag }) => (
              <div key={name} className="text-center p-4 bg-white rounded-lg shadow-md hover:ring-1 hover:ring-blue-400">
                <span className="text-3xl block mb-2">{flag}</span>
                <h3 className="font-semibold text-sm sm:text-base">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Visa Application Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {["Submit Documents", "Processing", "Receive Visa"].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-blue-600">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}