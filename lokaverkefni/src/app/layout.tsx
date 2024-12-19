import React from "react";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Lil Bits",
  description: "All you can eat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="bg-[#3E6053] p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="https://ih1.redbubble.net/image.181146356.8650/sticker,375x360.u1.png"
              alt="Lil Bits Logo"
              className="h-32 w-32"
            />
            <h1 className="text-xl font-bold text-[#c7bf2c]">Lil Bits</h1>
          </div>

          <nav>
            <ul className="flex space-x-4 text-[#c7bf2c] font-bold text-xl">
              <li>
                <Link href="/" className=" hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/neworder" className=" hover:underline">
                  New Order
                </Link>
              </li>
              <li>
                <Link href="/drinks" className="hover:underline">
                  Drinks
                </Link>
              </li>
              <li>
                <Link href="/orders" className=" hover:underline">
                  Orders
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow p-8 bg-[#d2d286] text-[#c7bf2c]">
          {children}
        </main>

        <footer className="bg-[#3E6053] p-4 text-center">
          <p className="text-sm text-[#c7bf2c]">&copy; Lil Bit's</p>
        </footer>
      </body>
    </html>
  );
}

//#BA2329
