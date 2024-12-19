"use client";

import React, { useState } from "react";
import { EmblaCarousel } from "./carousel";

export default function Home() {
  return (
    <div className="p-8 min-h-screen flex flex-col items-center text-black">
      <h1 className="text-3xl font-bold mb-4">Hello</h1>
      <EmblaCarousel></EmblaCarousel>
    </div>
  );
}
