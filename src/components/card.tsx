import { ProductDataType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({ product }: { product?: ProductDataType }) {
  if (!product) {
    return (
      <div className="text-red-500">Mahsulot ma'lumotlari mavjud emas.</div>
    );
  }

  return (
    // <div key={product.id}>
    //   {" "}
    //   <div className="bg-white shadow-md rounded-lg p-4 max-w-[250px] mb-5">
    //     {product.imageUrl ? (
    //       <Link href={`/product_id/${product.id}`}>
    //         <Image
    //           width={230}
    //           height={250}
    //           src={product.imageUrl}
    //           alt={product.name || "Mahsulot"}
    //           className="mx-auto rounded-lg object-cover"
    //         />
    //       </Link>
    //     ) : (
    //       <div className="bg-gray-200 w-[230px] h-[250px] flex products-center justify-center rounded-lg">
    //         <p className="text-gray-500">Rasm yo‘q</p>
    //       </div>
    //     )}

    //     <div className="mt-4">
    //       <p className="text-gray-700 text-sm">
    //         {product.description || "Tavsif mavjud emas"}
    //       </p>
    //       <div className="flex justify-between items-center mt-3">
    //         <p className="text-lg font-semibold text-gray-900">
    //           {product.price ? `$${product.price}` : "Narx noma’lum"}
    //         </p>
    //         <button className="border-2 border-amber-500 p-1 rounded-md bg-amber-500 hover:text-white transition">
    //           shop
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-white shadow-md rounded-lg p-4 max-w-[250px] mb-5">
      {product.imageUrl ? (
        <Link href={`/product_id/${product.id}`}>
          {" "}
          <Image
            width={230}
            height={250}
            src={product.imageUrl}
            alt={product.name || "Mahsulot"}
            className="mx-auto rounded-lg object-cover"
          />
        </Link>
      ) : (
        <div className="bg-gray-200 w-[230px] h-[250px] flex products-center justify-center rounded-lg">
          <p className="text-gray-500">Rasm yo‘q</p>
        </div>
      )}

      <div className="mt-4">
        <p className="text-gray-700 text-sm">
          {product.description || "Tavsif mavjud emas"}
        </p>
        <div className="flex justify-between products-center mt-3">
          <p className="text-lg font-semibold text-gray-900">
            {product.price ? `$${product.price}` : "Narx noma’lum"}
          </p>
          <button className="border-2 border-amber-500 p-2 rounded-md cursor-pointer bg-amber-500 hover:text-white transition">
            {/* <ShoppingCart01Icon size={20} /> */}shop
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
