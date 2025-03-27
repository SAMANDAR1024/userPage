"use client";
import Loading from "@/components/Loading";
import Products from "@/components/Products";
import { ProductId } from "@/types";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Product_id() {
  const [productId, setProductId] = useState<ProductId>();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    axios.get(`https://nt.softly.uz/api/front/products/${id}`).then((res) => {
      console.log(res.data);
      setProductId(res.data);
    });
  }, [id]);

  if (!productId) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loading />
      </div>
    );
  }
  return (
<div className="container mx-auto px-4 sm:px-8 md:px-14 py-6">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
    <div className="w-full md:w-auto flex justify-center">
      <Image
        width={300}
        height={300}
        src={productId.imageUrl}
        alt={productId.name}
        className="w-full max-w-[300px] rounded-lg shadow-lg"
      />
    </div>
    <div className="text-center md:text-left">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">{productId.name}</h1>
      <p className="text-gray-600 text-lg sm:text-2xl mt-2">{productId.description}</p>
      <p className="text-2xl font-semibold text-blue-600 mt-4">${productId.price}</p>
      <p className="flex justify-center md:justify-start items-center gap-2 text-lg mt-2">
        <span className="font-medium">Stock:</span>
        <span className="text-red-500">{productId.stock}</span>
      </p>
    </div>
  </div>

  <div className="mt-10">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-left">
      O'xshash Mahsulotlar
    </h1>
    <Products />
  </div>
</div>

  
  );
}

export default Product_id;
