"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
export default function LoginPage() {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl: "/products" });
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="p-10 bg-[#F1EFEC] rounded-2xl shadow-xl max-w-sm w-full text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#123458]">
          NextCraft
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Sign in to view our exclusive products.
        </p>
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-[#D4C9BE] rounded-xl shadow-md text-lg font-medium text-[#030303] bg-white hover:bg-[#D4C9BE] transition-all duration-300 transform hover:scale-105"
        >
          <FcGoogle size={24} />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
