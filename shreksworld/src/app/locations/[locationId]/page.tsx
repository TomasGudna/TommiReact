import React from "react";
import { notFound } from "next/navigation";

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

export default function LocationPage({
  params,
}: {
  params: { locationId: string };
}) {
  const location = locationData[params.locationId];

  if (!location) {
    return notFound();
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <img
        src={location.imageUrl}
        alt={location.name}
        className="w-48 h-48 object-cover rounded-full mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{location.name}</h1>
      <p className="text-gray-600 text-center">{location.description}</p>
    </div>
  );
}
