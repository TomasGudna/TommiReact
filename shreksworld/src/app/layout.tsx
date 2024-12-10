import React from "react";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Shreks World",
  description: "Its all Ogre now",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="bg-green-600 text-white p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shreks World</h1>

          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/characters">Characters</Link>
              </li>
              <li>
                <Link href="/locations">Locations</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/search">Search</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow p-8 bg-gray-100">{children}</main>

        <footer className="bg-green-600 text-white p-4 text-center">
          <p className="text-sm">What are ye doin in me swamp</p>
        </footer>
      </body>
    </html>
  );
}
