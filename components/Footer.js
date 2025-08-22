export default function Footer() {
  return (
    <footer className="bg-[#F1EFEC] text-[#030303]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center">
        {/* Brand / Logo */}
        <div className="text-2xl md:text-3xl font-extrabold text-[#123458] mb-4">
          NextCraft
        </div>

        {/* Decorative line */}
        <div className="w-24 h-1 bg-[#D4C9BE] rounded-full mb-4"></div>

        {/* Copyright */}
        <div className="text-[#030303]/70 text-sm md:text-base">
          © {new Date().getFullYear()} NextCraft. All rights reserved.
        </div>
      </div>
    </footer>
  );
}