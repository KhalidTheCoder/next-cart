import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { Providers } from "./providers";


export const metadata = {
  title: "NextCraft",
  description: "Landing page demo with Next.js 15 + Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Providers> {/* Wrap children with your Providers component */}
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}