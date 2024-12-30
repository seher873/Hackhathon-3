import React from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

export default function ProductList() {
  const products = [
    {
      id: 1,
      title: "Accumsan tincidunt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      price: "$26.00",
      oldPrice: "$52.00",
      imgSrc: "/Rectangle 32.png",
      rating: 5,
    },
    {
      id: 2,
      title: "Nunc in",
      description:
        "A luxurious sofa to elevate your living room style and comfort.",
      price: "$99.00",
      oldPrice: "$150.00",
      imgSrc: "/pic2.png",
      rating: 4,
    },
    {
      id: 3,
      title: "Vel sem",
      description: "A decorative vase to bring elegance to your decor.",
      price: "$45.00",
      oldPrice: "$70.00",
      imgSrc: "/pic3.png",
      rating: 5,
    },
    {
      id: 4,
      title: "Porttitor cum",
      description:
        "A comfortable chair with a modern design for your home office.",
      price: "$65.00",
      oldPrice: "$120.00",
      imgSrc: "/pic4.png",
      rating: 4,
    },
    {
      id: 5,
      title: "Nune in",
      description: "Brighten your space with this stylish lamp.",
      price: "$80.00",
      oldPrice: "$120.00",
      imgSrc: "/pic5.png",
      rating: 5,
    },
    {
      id: 6,
      title: "Vitae facilisis",
      description: "Add a touch of art to your walls with this piece.",
      price: "$50.00",
      oldPrice: "$100.00",
      imgSrc: "/pic6.png",
      rating: 3,
    },
  ];

  return (
    <div className="w-full bg-gray-50">
    {/* Header Section */}
    <div className="bg-purple-100 py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <h1 className="text-2xl font-bold text-[#101750] mb-2">Ecommerce Acceories & Fashion item </h1>
        <h1 className="text-4xl font-bold text-[#101750] mb-2"> Shop List</h1>
    </div>



    <div className="p-6 bg-gray-50 ">
      <div className="grid grid-cols-1   gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Product Image */}
            <div className="w-[1141]  h-[252]">
              <Image
                src={product.imgSrc}
                alt={product.title}
                width={150}
                height={150}
                className="rounded-md object-cover w-auto"
              />
            </div>

            {/* Product Details */}
            <div className="w-2/3 pl-4">
              <h2 className="text-lg font-semibold text-gray-700">{product.title}</h2>
              <div className="flex items-center space-x-2 my-2">
                {/* Fixed Colors */}
                <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
                <span className="w-4 h-4 rounded-full bg-red-500"></span>
                <span className="w-4 h-4 rounded-full bg-purple-500"></span>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-lg font-bold text-gray-800">{product.price}</p>
                <p className="text-sm line-through text-gray-500">{product.oldPrice}</p>
              </div>
              <p className="text-sm text-gray-600 mt-2">{product.description}</p>
              <div className="flex items-center mt-2">
                {[...Array(product.rating)].map((_, i) => (
                  <AiFillStar key={i} className="text-yellow-500 text-lg" />
                ))}
              </div>
              {/* Icons */}
              <div className="flex items-center space-x-4 mt-4">
                <AiOutlineHeart className="text-gray-600 text-xl cursor-pointer hover:text-red-500" />
                <BsSearch className="text-gray-600 text-xl cursor-pointer hover:text-blue-500" />
                <AiOutlineShoppingCart className="text-gray-600 text-xl cursor-pointer hover:text-green-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
}
