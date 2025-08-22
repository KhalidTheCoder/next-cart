"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiFire } from "react-icons/hi";

export default function ProductHighlights() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Fetch up to 3 products from your API
        const res = await fetch("/api/products?limit=3");
        if (!res.ok) {
          throw new Error("Failed to fetch product highlights");
        }
        const data = await res.json();
        // Take the first 3 products from the fetched data
        const limitedProducts = data.data.slice(0, 3);
        setProducts(limitedProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-6 bg-[#F1EFEC] flex justify-center items-center">
        <p className="text-gray-500 text-lg">Loading highlights...</p>
      </section>
    );
  }

  if (error || products.length === 0) {
    return (
      <section className="py-20 px-6 bg-[#F1EFEC] flex justify-center items-center">
        <p className="text-red-500 text-lg">
          Error loading products or no products found.
        </p>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-[#F1EFEC] relative overflow-hidden">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-[#123458] flex items-center justify-center gap-4">
        <HiFire size={36} className="text-[#D4C9BE]" />
        Product Highlights
        <HiFire size={36} className="text-[#D4C9BE]" />
      </h2>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl bg-[#F1EFEC] mx-auto">
        {products.map((product) => {
          // Display the first sentence of the description
          const shortDescription = product.description.split('.')[0] + '.';
          
          return (
            <Link
              key={product._id}
              href={`/products/${product._id}`}
              className="relative block" // Make the entire card a link
            >
              <div
                className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 h-full"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#123458]">
                  {product.name}
                </h3>
                <p className="text-[#030303]/80 mb-6 leading-relaxed">
                  {shortDescription}
                </p>
                <strong className="text-2xl text-[#123458] font-semibold">
                  ${product.price.toFixed(2)}
                </strong>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}