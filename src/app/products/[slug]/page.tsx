import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/product";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current== $slug][0]{
      _id,
      name,
      _type,
      image,
      price,
      colors,
      discountPercentage,
      isFeaturedProduct,
      category,
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);



 

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex flex-row gap-4">
          {product?.image ? (
            <Image
              src={urlFor(product.image)?.url() || ""}
              alt={product.name || "Product"}
              width={500}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          ) : (
            <div className="w-20 h-20 bg-gray-300 flex items-center justify-center rounded-lg">
              No Image Available
            </div>
          )}

          <div className="grid grid-cols-3 gap-4">
            {product?.image && (
              <>
                <Image
                  src={urlFor(product.image)?.url() || ""}
                  alt={product.name}
                  width={50}
                  height={50}
                  className="w-full h-auto rounded-lg"
                />
                <Image
                  src={urlFor(product.image)?.url() || ""}
                  alt="Thumbnail 2"
                  width={50}
                  height={50}
                  className="w-full h-auto rounded-lg"
                />
                <Image
                  src={urlFor(product.image)?.url() || ""}
                  alt="Thumbnail 3"
                  width={50}
                  height={50}
                  className="w-full h-auto rounded-lg"
                />
              </>
            )}
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-gray-800">
            {product?.name}
          </h2>
          <p className="text-xl text-red-500 mt-3">
            {product?.discountPercentage && (
              <>
                {product.discountPercentage}% Off{" "}
                <span className="text-gray-400 line-through">
                  ${product?.price}
                </span>
              </>
            )}
          </p>
          <p className="text-gray-600 mt-4">
            {product?.isFeaturedProduct ? "Featured Product" : ""}
          </p>

          <div className="flex gap-4 mt-6">
            <Link href="/cart">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Add to Cart
              </button>
            </Link>
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Buy Now
            </button>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            <p>
              <span className="font-semibold">Category:</span> {product?.category}
            </p>
            <p>
              <span className="font-semibold">Colors:</span> {product?.colors?.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
