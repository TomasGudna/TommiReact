/*const locations: Record<string, Location> = {
    swamp: {
      name: "Shrek's Swamp",
      description: "A peaceful, murky place where Shrek lives.",
      imageUrl:
        "https://news.airbnb.com/wp-content/uploads/sites/4/2023/09/01-Shrek-Airbnb-Exterior-Credit-Alix-McIntosh-1.jpg?fit=2500%2C1667",
    },
    duloc: {
      name: "Duloc",
      description: "The land of Lord Farquaad.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqHnAy4ZmUW6KGxRLjVzcpPxagAn0xoabEwA&s",
    },
  };
*/

import Link from "next/link";
import React from "react";

type Location = {
  name: string;
  description: string;
  imageUrl: string;
};

const locationData: Record<string, Location> = {
  swamp: {
    name: "Shrek's Swamp",
    description: "A peaceful, murky place where Shrek lives.",
    imageUrl:
      "https://news.airbnb.com/wp-content/uploads/sites/4/2023/09/01-Shrek-Airbnb-Exterior-Credit-Alix-McIntosh-1.jpg?fit=2500%2C1667",
  },
  duloc: {
    name: "Duloc",
    description: "The land of Lord Farquaad.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqHnAy4ZmUW6KGxRLjVzcpPxagAn0xoabEwA&s",
  },
};

export default function LocationsPage() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen text-black">
      <h1 className="text-3xl font-bold text-center mb-8">Locations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(locationData).map(([id, location]) => (
          <Link key={id} href={`/locations/${id}`} className="group">
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center group-hover:shadow-lg transition-shadow">
              <img
                src={location.imageUrl}
                alt={location.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 group-hover:text-green-600">
                {location.name}
              </h2>
              <p className="text-gray-600 text-center">
                {location.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
