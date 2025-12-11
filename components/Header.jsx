// /components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
  <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">

    {/* Bigger Logo */}
    <div className="flex items-center">
      <Image
        src="/logo.png"
        alt="ShopTheTop247 Logo"
        width={60}
        height={60}
        className="mr-3"
      />
      <span className="text-xl font-semibold tracking-tight">
        ShopTheTop247
      </span>
    </div>

    {/* Smaller Search Bar */}
    <div className="hidden md:flex">
      <input
        type="text"
        placeholder="Search…"
        className="w-48 md:w-64 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
    </div>

  </div>
</header>

  );
}
