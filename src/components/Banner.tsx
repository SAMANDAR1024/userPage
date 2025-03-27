"use client";
import { BannerType } from "@/types";
import { useEffect, useState } from "react";
import BannerStrelka from "../../public/bannerStrelka";
import axios from "axios";
import Image from "next/image";

function Banner() {
  const [banner, setBanner] = useState<BannerType[]>([]);
  const [carusel, setCarusel] = useState(0);

  useEffect(() => {
    axios.get(`https://nt.softly.uz/api/front/banners`).then((res) => {
      setBanner(res.data);
    });
  }, []);

  function next() {
    if (banner.length === 0) return;
    setCarusel((prev) => (prev + 1) % banner.length);
  }

  function prev() {
    if (banner.length === 0) return;
    setCarusel((prev) => (prev - 1 + banner.length) % banner.length);
  }

  return (
    <div className="container mx-auto  flex flex-col items-center w-full">
      <div className="relative w-full  mt-3 h-[500px] overflow-hidden rounded-xl shadow-xl ">
      
        <button
          onClick={prev}
          className="absolute top-1/2 left-4 z-10 p-2 bg-black/40 rounded-full hover:bg-black/60 transition"
        >
          <BannerStrelka className="text-white w-8 h-8" />
        </button>

        {banner.length > 0 && (
          <div
            key={banner[carusel].id}
            className="relative w-full h-full transition-transform duration-700 ease-in-out"
          >
       
            <Image
              src={banner[carusel].imageUrl}
              alt={banner[carusel].title}
              layout="fill"
           
              objectFit="cover"
              className="rounded-xl"
            />

         
            <div className="absolute   inset-0 bg-gradient-to-b from-black/40 to-black/70 rounded-xl flex items-center justify-center p-6">
              <h2 className="text-white  text-4xl font-semibold">
                {banner[carusel].title}
              </h2>
            </div>
          </div>
        )}

        <button
          onClick={next}
          className="absolute top-1/2 right-4 z-10 p-2 bg-black/40 rounded-full hover:bg-black/60 transition"
        >
          <BannerStrelka className="text-white w-8 h-8 rotate-180" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
