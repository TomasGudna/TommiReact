import Image from "next/image"

export default function Home() {
  return (
    <div className="bg-green-200 min-h-screen flex flex-col items-center justify-start p-10">
      

    
      <div>
      <Image 
      className="w-48 h-48 rounded-full hover:scale-110"
      src="/shrek.jpg" 
      width={1200} 
      height={1200} 
      alt=""
       />
       </div>
      <div>
        <h1 className="text-green-700 text-4xl font-bold pt-5">Welcome to Shrek's Swamp!</h1>
      </div>
    
      
      <div className="p-5"></div>
      <input className="rounded-sm pt-5"></input>
      <div className="p-5"></div>
      <button className="bg-green-700 p-3 rounded">
        <text>Click me for a Shrek Quote!</text>
      </button>
      <div className="p-5"></div>
      <input className="rounded-sm pt-5" placeholder="Donkey?"></input>
  </div>
);
}