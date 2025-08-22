"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        setProducts(data.data);
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
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg">Error: {error}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg">
          No products found. Add some from the dashboard.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#123458] mb-10 text-center">
        Our Products
      </h1>
      <div className="grid grid-cols-1 pt-3 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => {
          // Get the first sentence of the description
          const firstSentence = product.description.split(".")[0] + ".";

          return (
            <div
              key={product._id}
              className="bg-[#F1EFEC] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-[#123458] mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-4">{firstSentence}</p>
              <p className="text-xl font-bold text-[#030303] mb-4">
                ${product.price.toFixed(2)}
              </p>
              <Link
                href={`/products/${product._id}`}
                className="inline-block w-full text-center bg-[#D4C9BE] text-[#030303] font-medium py-3 rounded-lg hover:bg-[#123458] hover:text-[#F1EFEC] transition-all duration-300 transform hover:scale-105"
              >
                View Details
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
