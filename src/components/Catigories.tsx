"use client";
import { CatigoriaType } from "@/types";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

function Catigories() {
  const [catigoria, setCatigoria] = useState<CatigoriaType[]>();

  useEffect(() => {
    axios.get("https://nt.softly.uz/api/front/categories").then((res) => {
      console.log(res.data);
      setCatigoria(res.data);
    });
  }, []);
  return (
    <div className="container mx-auto px-1 md:px-6  py-4">
      <div className="flex gap-4 md:gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {catigoria?.map((item) => (
          <Link
            key={item.id}
            href={`/catigoria_id/${item.id}`}
            className=" m-auto rounded-md  transition"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Catigories;
