import { Button } from "antd";
import Link from "next/link";
import React from "react";
import Catigories from "./Catigories";

function HomePage() {
  return (
    <div className="container mx-auto px-12">
      <nav className="flex  py-5 text-white  justify-between  items-center">
        <p className="text-4xl">
          <Link href={"/"}>Logo</Link>
        </p>
        <div className="flex gap-2 items-center">
          <Button type="primary">Savatcha</Button>
        </div>
      
      </nav>

      <Catigories />
    </div>
  );
}

export default HomePage;
