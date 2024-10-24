import Image from "next/image";
"use client";
import { useState } from "react";


/*
const Counter = () => {
  const [state, setState] = useState(0)

  return (
    <div>
        <button onClick={() => {
          setState((s) => s + 1);
        }}
          >
            Press
          </button>
          <label> {state}</label>
    </div>
  )
}
*/

/*
return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-green-600">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1 className="text-black text-center">Djöfull er Tómas flottur maður</h1>
      <div className="border p-4 bg-green-800 cursor-pointer">
      <Counter/>
      </div>
      
      
        </main>
    </div>
  );
*/

export default function Home() {
  return (
  <div className="flex clex-col gap-10 items-center justify-center bg-green-600">
    <main className="m-6 p-2">
    <h1 className="text-white">Expense Tracker</h1>
    <div className="">
    <input className="text-black"></input>
    </div>
    <div className="">
    <input className="text-black"></input>
    </div>
    </main>
  </div>
  )
}
