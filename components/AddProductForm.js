"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function AddProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Convert the price to a number before sending the request
    const productData = {
      ...formData,
      price: parseFloat(formData.price),
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Product added:", data);
        toast.success("Product added successfully!");
        setFormData({ name: "", description: "", price: "" });
        router.push("/products");
      } else {
        const errorData = await res.json();
        console.error("Failed to add product:", errorData);
        toast.error("Failed to add product. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#F1EFEC] p-8 rounded-lg shadow-md w-full max-w-lg"
    >
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block text-[#123458] font-bold mb-2 text-lg"
        >
          Product Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-[#D4C9BE] rounded-lg bg-white text-[#030303] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#123458] transition-colors duration-200"
          placeholder="Enter product name"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="description"
          className="block text-[#123458] font-bold mb-2 text-lg"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows="4"
          className="w-full px-4 py-3 border border-[#D4C9BE] rounded-lg bg-white text-[#030303] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#123458] transition-colors duration-200"
          placeholder="Enter a detailed description"
        ></textarea>
      </div>

      <div className="mb-8">
        <label
          htmlFor="price"
          className="block text-[#123458] font-bold mb-2 text-lg"
        >
          Price
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-bold">$</span>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            step="0.01"
            className="w-full pl-8 pr-4 py-3 border border-[#D4C9BE] rounded-lg bg-white text-[#030303] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#123458] transition-colors duration-200"
            placeholder="0.00"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#123458] text-[#F1EFEC] font-bold text-lg py-3 rounded-lg shadow-lg hover:bg-[#D4C9BE] hover:text-[#030303] transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
      >
        {loading ? "Adding..." : "Add Product"}
      </button>
    </form>
  );
}