import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#F1EFEC] py-20 text-center relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#D4C9BE] rounded-full opacity-40 blur-3xl"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#030303] mb-6 leading-tight">
          Welcome To <span className="text-[#123458]">NextCraft</span>
        </h1>
        <p className="text-lg md:text-xl text-[#030303]/70 mb-8">
          Discover the best products with unbeatable prices and premium quality.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/products"
            className="px-8 py-3 bg-[#123458] text-white text-lg font-medium rounded-lg shadow-lg hover:bg-[#0e2840] transition-transform transform hover:scale-105"
          >
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
}
