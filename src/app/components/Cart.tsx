// pages/cart.tsx
import { useCart } from "@/context/Context";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="w-full bg-white px-6 py-20">
      <h2 className="text-black text-4xl text-center mb-16 font-bold">
        Your Cart
      </h2>

      {cart.length > 0 ? (
        <div className="w-full max-w-screen-xl mx-auto">
          {cart.map((product) => (
            <div
              key={product._id}
              className="flex justify-between items-center mb-6"
            >
              <div className="flex items-center">
                <Image
                  src={urlFor(product.image)?.url() || "/fallback-image.jpg"} 
                  width={200}
                  height={250}
                  alt={product.name}
                  className="object-cover w-[200px] h-[250px]"
                />

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">${product.price}</p>
                </div>
              </div>
              <AiOutlineDelete
                onClick={() => removeFromCart(product)}
                className="text-red-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Your cart is empty</p>
      )}
    </div>
  );
};

export default CartPage;
