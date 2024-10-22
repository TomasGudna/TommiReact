import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-red-600">
        <Navbar></Navbar>
          {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
