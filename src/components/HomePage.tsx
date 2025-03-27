import { Button } from "antd";
import Link from "next/link";
import React from "react";
import Catigories from "./Catigories";

function HomePage() {
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-12">
    <nav className="flex py-4 sm:py-5 justify-between items-center">
      {/* Logo */}
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
        <Link href="/">Logo</Link>
      </p>
  
      {/* Savatcha tugmasi */}
      <div className="flex gap-2 items-center">
        <Button type="primary" className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base">
          Savatcha
        </Button>
      </div>
    </nav>
  
    {/* Kategoriyalar bo‘limi */}
    <Catigories />
  </div>
  
  );
}

export default HomePage;
