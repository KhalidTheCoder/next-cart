import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import AddProductForm from "@/components/AddProductForm";

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-screen bg-gray-100">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#123458] mb-10 text-center">
        Add a New Product
      </h1>
      <AddProductForm />
    </div>
  );
}
