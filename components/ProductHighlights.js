export default function ProductHighlights() {
  const products = [
    {
      id: 1,
      name: "Smart Wireless Headphones",
      desc: "Experience crystal-clear sound, active noise cancellation, and up to 20 hours battery life.",
      price: "$120",
    },
    {
      id: 2,
      name: "Eco-Friendly Water Bottle",
      desc: "Durable stainless steel bottle, BPA-free, keeps beverages cold for 24 hours.",
      price: "$35",
    },
    {
      id: 3,
      name: "Luxury Leather Backpack",
      desc: "Handcrafted leather backpack with multiple compartments, perfect for work or travel.",
      price: "$150",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#F1EFEC] relative overflow-hidden">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-[#123458]">
        Product Highlights
      </h2>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#123458]">
              {product.name}
            </h3>
            <p className="text-[#030303]/80 mb-6 leading-relaxed">
              {product.desc}
            </p>
            <strong className="text-2xl text-[#123458] font-semibold">
              {product.price}
            </strong>
          </div>
        ))}
      </div>
    </section>
  );
}
