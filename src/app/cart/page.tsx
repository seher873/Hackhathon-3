"use client"
import { useCart } from "@/context/Context";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineDelete } from "react-icons/ai";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const getSubtotal = (price: number, quantity: number) => {
    return price * quantity;
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + getSubtotal(item.price, item.quantity), 0);
  };

  return (
    <div className="w-full bg-white px-6 py-20">
      <h2 className="text-black text-4xl text-center mb-16 font-bold">Your Cart</h2>

      {cart.length > 0 ? (
        <div className="w-full max-w-screen-xl mx-auto">
          {cart.map((product) => (
            <div key={product._id} className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <Image
                  src={urlFor(product.image)?.url() || "/fallback-image.jpg"}
                  width={200}
                  height={250}
                  alt={product.name}
                  className="object-cover w-[200px] h-[250px]"
                />

                <div>
                  <h3 className="font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-600">${product.price}</p>

                  <div className="flex items-center gap-4 mt-2">
                    <button
                      onClick={() => updateQuantity(product._id, product.quantity - 1)}
                      className="px-4 py-1 bg-gray-300 rounded-md"
                    >
                      -
                    </button>
                    <span className="text-lg">{product.quantity}</span>
                    <button
                      onClick={() => updateQuantity(product._id, product.quantity + 1)}
                      className="px-4 py-1 bg-gray-300 rounded-md"
                    >
                      +
                    </button>
                  </div>

                  <p className="mt-2 text-sm text-gray-600">Subtotal: ${getSubtotal(product.price, product.quantity).toFixed(2)}</p>
                </div>
              </div>

              <AiOutlineDelete
                onClick={() => removeFromCart(product)}
                className="text-red-500 cursor-pointer"
              />
            </div>
          ))}

          <div className="mt-8 text-right">
            <h3 className="text-xl font-semibold">Total: ${getCartTotal().toFixed(2)}</h3>
            <Link href="/checkout"><button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              Proceed to Checkout
            </button></Link>
          </div>
        </div>
      ) : (
        <p className="text-center">Your cart is empty</p>
      )}
    </div>
  );
};

export default CartPage;
