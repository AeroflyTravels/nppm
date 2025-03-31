import React from "react";
import { Calendar, Users, MapPin, Star } from "lucide-react";
import tour from "../assets/images/tour.jpg";

// Import images dynamically (consider placing them in a separate file)
import thailand from "../assets/img/thailand.jpg";
import malaysia from "../assets/img/malaysia.jpg";
import singapore from "../assets/img/singapore.jpg";
import baku from "../assets/img/baku.jpg";
import mexico from "../assets/img/mexico.jpg";
import bali from "../assets/img/bali.jpg";
import vietnam from "../assets/img/vietnam.jpg";
import vegas from "../assets/img/lasvegas.jpg";
import canton from "../assets/img/canton.jpg";
import srinagar from "../assets/img/srinagr.jpg";
import jyoti from "../assets/img/12.jpg";
import jim from "../assets/img/jim.jpg";
import srilanka from "../assets/img/srilanka.jpg";
import dubai from "../assets/img/dubai.jpg";
import char from "../assets/img/char.jpg";
import maharaja from "../assets/img/maharaja.jpg";
import andaman from "../assets/img/andaman.jpg";
import taj from "../assets/img/taj.jpg";
import leh from "../assets/img/leh.jpg";
import south from "../assets/img/south.jpg";
import sakuraJapan from "../assets/img/sakura.jpg";
import privateIsland from "../assets/img/bora.jpg";
import northernLights from "../assets/img/iceland.jpg";
import santorini from "../assets/img/santorini.jpg";
import royal from "../assets/img/rajsthan.jpg";

export function TourPackages() {
  const categories = [
    "All",
    "Adventure",
    "Luxury",
    "Budget",
    "Honeymoon",
    "Religious",
    "Event",
  ];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const packages = [
    {
      id: 1,
      title: "European Adventure",
      image:
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2020&q=80",
      duration: "10 Days",
      people: "2-4",
      destination: "Paris, Rome, Barcelona",
      price: 2499,
      rating: 4.8,
      category: "Adventure",
    },
    { id: 2, title: "Maldives Paradise", image: tour, duration: "7 Days", people: "2", destination: "Maldives", price: 3299, rating: 4.9, category: "Luxury" },
    { id: 3, title: "Thailand Explorer", image: thailand, duration: "8 Days", people: "1-3", destination: "Bangkok, Phuket", price: 1499, rating: 4.7, category: "Budget" },
    { id: 4, title: "Baku, Azerbaijan", image: baku, duration: "8 Days", people: "1-3", destination: "Baku", price: 1499, rating: 4.7, category: "Budget" },
    { id: 5, title: "Mexico", image: mexico, duration: "8 Days", people: "1-3", destination: "Mexico City", price: 1799, rating: 4.7, category: "Luxury" },
    { id: 6, title: "Bali", image: bali, duration: "8 Days", people: "1-3", destination: "Bali", price: 1599, rating: 4.7, category: "Honeymoon" },
    { id: 7, title: "Las Vegas", image: vegas, duration: "8 Days", people: "1-3", destination: "Las Vegas", price: 1999, rating: 4.7, category: "Luxury" },
    { id: 8, title: "Vietnam", image: vietnam, duration: "8 Days", people: "1-3", destination: "Hanoi, Ho Chi Minh City", price: 1299, rating: 4.7, category: "Budget" },
    { id: 9, title: "Sri Lanka", image: srilanka, duration: "8 Days", people: "1-3", destination: "Colombo, Kandy", price: 1399, rating: 4.7, category: "Budget" },
  ];

  return (
    <div className="relative w-full min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${tour})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative min-h-[600px] w-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Tour Packages</h1>
            <p className="text-xl text-white">
              Discover our handpicked holiday packages
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? "bg-[#2a9df4] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages
              .filter(
                (pkg) =>
                  selectedCategory === "All" || pkg.category === selectedCategory
              )
              .map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 relative">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{pkg.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{pkg.duration}</span>
                      <Users className="h-4 w-4 ml-4 mr-2" />
                      <span className="text-sm">{pkg.people} People</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{pkg.destination}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-[#2a9df4]">
                        ${pkg.price}
                      </span>
                      <button className="bg-[#2a9df4] text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
