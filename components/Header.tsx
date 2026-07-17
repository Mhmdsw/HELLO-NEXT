import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black/40 backdrop-blur-md text-white fixed top-0 left-0 right-0 z-50 border-b border-white/10">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
        My App
      </h1>
      <div className="space-x-6">
        <Link href="/" className="hover:text-indigo-300 transition duration-200 font-medium">
          Home
        </Link>
        <Link href="/about" className="hover:text-indigo-300 transition duration-200 font-medium">
          About
        </Link>
      </div>
    </nav>
  );
}