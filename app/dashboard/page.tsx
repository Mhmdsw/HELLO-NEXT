"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState("");

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const username = localStorage.getItem("user");

    if (!isLoggedIn) {
      // Redirect to login if not authenticated
      router.push("/login");
    } else {
      setUser(username || "User");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 flex items-center justify-center px-6 pt-20">
        <div className="max-w-2xl w-full rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-10 shadow-2xl text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium">
              🔒 Protected Page
            </span>
          </div>

          <h1 className="text-5xl font-extrabold text-white">
            Welcome, {user}! 👋
          </h1>

          <p className="mt-4 text-lg text-gray-300 leading-8">
            You have successfully logged in to the dashboard.
            This page is protected and only accessible to authenticated users.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button
              onClick={() => router.push("/")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Go to Home
            </Button>

            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-red-500/50 text-red-400 hover:bg-red-500/20"
            >
              Logout
            </Button>
          </div>

          <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-gray-400 text-sm">
              ✅ Authentication successful! You are logged in as <span className="text-emerald-400 font-semibold">{user}</span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}