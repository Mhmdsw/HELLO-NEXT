"use client";

import { useState, lazy, Suspense } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Lazy load the component - it will only load when needed!
const LazyComponent = lazy(() => import("@/components/LazyComponent"));

// Loading skeleton/fallback
const LoadingSkeleton = () => (
  <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-gray-500/20 to-gray-600/20 border border-gray-500/30 animate-pulse">
    <div className="h-8 w-48 bg-gray-400/20 rounded mb-3"></div>
    <div className="h-4 w-64 bg-gray-400/20 rounded mb-2"></div>
    <div className="h-4 w-56 bg-gray-400/20 rounded"></div>
  </div>
);

export default function Home() {
  const [showLazy, setShowLazy] = useState(false);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 flex items-center justify-center px-6 pt-20">
        <div className="max-w-2xl w-full rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-10 shadow-2xl text-center">

          <span className="inline-block px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium">
            Next.js + Tailwind CSS + shadcn UI + Lazy Loading
          </span>

          <h1 className="mt-6 text-6xl font-extrabold text-white">
            Hello World 👋
          </h1>

          <p className="mt-4 text-lg text-gray-300 leading-8">
            Welcome to my first professional Next.js application.
            This page uses <span className="text-indigo-400 font-semibold">Lazy Loading</span> for better performance
            and <span className="text-purple-400 font-semibold">shadcn UI</span> for beautiful components!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* shadcn UI Button with glow animation */}
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg shadow-indigo-500/30 px-8 py-6 text-lg pulse-glow">
              Get Started
            </Button>

            <Link href="/about">
            <Button variant="outline" className="border-gray-500 text-gray-200 hover:bg-white/10 px-8 py-6 text-lg">
             Learn More
              </Button>
            </Link>
            {/* Login Button */}
            <Link href="/login">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-6 text-lg">
                🔐 Login
              </Button>
            </Link>

            {/* Dashboard Button */}
            <Link href="/dashboard">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-6 text-lg">
                Dashboard
              </Button>
            </Link>

            {/* Button to load lazy component */}
            <Button 
              onClick={() => setShowLazy(!showLazy)}
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-6 text-lg"
            >
              {showLazy ? "Hide Lazy Component" : "Load Lazy Component 🚀"}
            </Button>
          </div>

          {/* Lazy loaded component with Suspense */}
          {showLazy && (
            <Suspense fallback={<LoadingSkeleton />}>
              <LazyComponent />
            </Suspense>
          )}

          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-white/5 p-4">
              <h3 className="text-3xl font-bold text-white">⚡</h3>
              <p className="mt-2 text-gray-400 text-sm">Fast</p>
            </div>

            <div className="rounded-xl bg-white/5 p-4">
              <h3 className="text-3xl font-bold text-white">🎨</h3>
              <p className="mt-2 text-gray-400 text-sm">Modern UI</p>
            </div>

            <div className="rounded-xl bg-white/5 p-4">
              <h3 className="text-3xl font-bold text-white">📦</h3>
              <p className="mt-2 text-gray-400 text-sm">Lazy Loaded</p>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}