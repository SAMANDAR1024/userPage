"use client";
import Card from "@/components/card";
import Loading from "@/components/Loading";
import { Catigories_Product_Id } from "@/types";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function Catigoria_Id() {
  const [catigoriaId, setCatigoriaId] = useState<Catigories_Product_Id | null>(
    null
  );
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://nt.softly.uz/api/front/products?categoryId=${id}&limit=10`)
      .then((res) => {
        console.log(res.data);
        setCatigoriaId(res.data);
      })
      .catch((e) => {   
        console.error("Apidan Xatolik", e);
      });
  }, [id]);

  if (!catigoriaId) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loading />
      </div>
    );
  }

  if (!catigoriaId || !catigoriaId.items || catigoriaId.items.length === 0) {
    return <div className="text-center text-4xl mt-10">Ma’lumot yo‘q</div>;
  }

  return (
    <div className="container mx-auto  px-8 flex flex-wrap gap-12 mt-10 ">
      {catigoriaId.items.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
}

export default Catigoria_Id;
