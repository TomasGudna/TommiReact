import React from "react";

export default function JumpingEmojis({ emoji, count }) {
  return (
    <div className="flex justify-center space-x-1">
      {Array.from({ length: count }).map((_, index) => (
        <span key={index} className="text-2xl">
          {emoji}
        </span>
      ))}
    </div>
  );
}
