"use client";
import Main from "@/components/main";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white text-gray-800 py-4"></header>
      <main className="flex-grow bg-white">
        <Main />
      </main>
      <footer className="bg-white text-gray-800 py-4">
        <Footer />
      </footer>
    </div>
  );
}
