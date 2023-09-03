import './globals.css'
import AppNavBar from "@/app/component/AppNavBar";
import Footer from "@/app/component/Footer";
import NewsLetter from "@/app/component/NewsLetter";
import React from "react";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 pt-12 container px-4 mx-auto">
      {children}
      <NewsLetter/>
      <Footer/>
      </body>
    </html>
  )
}
