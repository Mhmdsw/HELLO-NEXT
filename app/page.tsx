import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 flex items-center justify-center px-6 pt-20">
        <div className="max-w-2xl w-full rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-10 shadow-2xl text-center">

          <span className="inline-block px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium">
            Next.js + Tailwind CSS
          </span>

          <h1 className="mt-6 text-6xl font-extrabold text-white">
            Hello World 👋
          </h1>

          <p className="mt-4 text-lg text-gray-300 leading-8">
            Welcome to my first professional Next.js application.
            This page is built with modern UI design using Tailwind CSS.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold shadow-lg shadow-indigo-500/30">
              Get Started
            </button>

            <a href="/about">
              <button className="px-6 py-3 rounded-xl border border-gray-500 text-gray-200 hover:bg-white/10 transition">
                Learn More
              </button>
            </a>
          </div>

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
              <h3 className="text-3xl font-bold text-white">🚀</h3>
              <p className="mt-2 text-gray-400 text-sm">Ready</p>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}