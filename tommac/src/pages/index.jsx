import React from "react";
import JumpingEmojis from "./Jumping";
import ButtonsSection from "./Buttons";
import ProfileSection from "./Box";

export default function Home() {
  return (
    <div className="bg-green-600 min-h-screen flex flex-col items-center justify-around p-4">
    {}
    <ProfileSection />

    {}
    <JumpingEmojis emoji="🎉" count={20} />

    {}
    <ButtonsSection />

    {}
    <JumpingEmojis emoji="🎉" count={20} />
  </div>
);
}
