"use client";

import React, { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center text-black">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>

      <div className="mb-4 text-2xl font-semibold">Counter: {count}</div>

      <button
        onClick={increment}
        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
      >
        Increment
      </button>
    </div>
  );
}
