"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      if (!id) return;

      try {
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await res.json();
        setProduct(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg">Loading product details...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-center p-4">
        <p className="text-red-500 text-lg mb-4">Error: Product not found.</p>
        <Link
          href="/products"
          className="inline-block px-6 py-3 bg-[#D4C9BE] text-[#030303] font-medium rounded-lg hover:bg-[#123458] hover:text-[#F1EFEC] transition-all duration-300 transform hover:scale-105"
        >
          Go back to products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto p-10 rounded-3xl shadow-lg bg-[#F1EFEC] text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#123458] mb-4">
          {product.name}
        </h1>
        <p className="text-3xl font-bold text-[#030303] mb-6">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mb-8 max-w-2xl mx-auto">
          {product.description}
        </p>
        <Link
          href="/products"
          className="inline-block px-8 py-4 bg-[#D4C9BE] text-[#030303] font-bold rounded-lg shadow-md hover:bg-[#123458] hover:text-[#F1EFEC] transition-all duration-300 transform hover:scale-105"
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
}
