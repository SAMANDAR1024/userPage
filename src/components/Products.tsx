"use client";
import { useMyProductStore } from "@/store";
import { LoadingOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react";
import Loading from "./Loading";
import Card from "./card";

function Products() {
  const { productsData, loading, fetchProducts, addToCart } =
    useMyProductStore();

  console.log(productsData);

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center pt-5">
        <Loading />
      </div>
    );
  }
  console.log("Products Data:", productsData);

  if (!productsData || productsData.length === 0) {
    return <p>No products found</p>;
  }

  return (
    <div className="flex flex-wrap justify-between mt-10 ">
      {productsData.map((product) => (
        <Card product={product}  key={product.id}/>
      ))}
    </div>
  );
}

export default Products;
