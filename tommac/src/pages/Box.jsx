import React from "react";


export default function ProfileSection() {
  return (
    <section className="bg-green-300 p-8 rounded-lg shadow-md flex flex-col items-center mb-8">
      {}
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold text-green-800 flex items-center justify-center">
          🎉 ÁSGEIR SEÐLABANKASTJÓRI 🎉
        </h1>
        <h2 className="text-2xl text-red-600 mt-2">
          CELEBRATES LOWER INTEREST RATES!
        </h2>
      </div>

      {}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjn477ubt6l1Ot_6fN7OrgbWaoeZy1pWoGVA&s"
        alt="Ásgeir Seðlabankastjóri"
        className="w-48 h-48 rounded-full border-4 border-yellow-500 object-cover"
      />
    </section>
  );
}
