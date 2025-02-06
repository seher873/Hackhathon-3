"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import { Product } from "@/types/product";
import { forProducts } from "@/sanity/lib/query";
import { urlFor } from "@/sanity/lib/image";
import { useCart } from "@/context/Context"; 
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

const client = createClient({
  projectId: "9t00cwxf",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart, cart } = useCart(); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data: Product[] = await client.fetch(forProducts);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    const cartItem = {
      ...product,
      quantity: product.quantity ?? 1,
    };
    addToCart(cartItem);

    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="w-full bg-white px-6 py-20">
      <h2 className="text-black text-4xl text-center mb-16 font-bold">
        Featured Products
      </h2>

      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="text-center group flex flex-col">
              <div className="w-full bg-gray-200 flex justify-center items-center relative overflow-hidden h-[400px] group hover:bg-opacity-80 transition-all">
                {product.image ? (
                  <Image
                    src={urlFor(product.image)?.url() || "/fallback-image.jpg"}
                    width={200}
                    height={250}
                    alt={product.name}
                    className="object-cover w-[200px] h-[250px]"
                  />
                ) : (
                  <div className="w-40 h-40 bg-gray-300 flex items-center justify-center">
                    No Image Available
                  </div>
                )}

                <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <AiOutlineHeart className="text-gray-600 bg-white rounded-full p-1 w-8 h-8 hover:text-red-500 cursor-pointer duration-300" />
                  <AiOutlineSearch className="text-gray-600 bg-white rounded-full p-1 w-8 h-8 hover:text-blue-500 cursor-pointer duration-300" />
                  <AiOutlineShoppingCart
                    className="text-gray-600 bg-white rounded-full p-1 w-8 h-8 hover:text-green-500 cursor-pointer duration-300"
                    onClick={() => handleAddToCart(product)}
                  />
                </div>

                <Link href={`/products/${product.slug.current}`}>
                  <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full h-8 bg-green-500 text-white rounded-sm hover:bg-green-600 transition-opacity opacity-0 group-hover:opacity-100 duration-300">
                    View Details
                  </button>
                </Link>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-red-500">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 italic">
                  Type: {product._type}
                </p>
                <div className="flex justify-center items-center gap-2 mt-2">
                  {product.colors &&
                    product.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-8 h-[3px] rounded-md"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Code - {product.code || "N/A"}
                </p>
                <p className="mt-1 text-dark-blue-900">${product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-4">Loading products...</p>
        )}
      </div>

      {/* ✅ Toast Container for showing notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        toastStyle={{ backgroundColor: "black", color: "white" }} 
        role="alert"
        aria-label="Notification container"
      />

      {cart.length > 0 && (
        <span className="absolute top-0 right-0 text-xs bg-pink-500 text-white rounded-full px-1 py-1">
          {cart.reduce((total, item) => total + item.quantity, 0)}
        </span>
      )}
    </div>
  );
};

export default FeaturedProducts;
