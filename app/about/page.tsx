import Header from "@/components/Header";

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 flex items-center justify-center px-6 pt-20">
        <div className="max-w-2xl w-full rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-10 shadow-2xl text-center">
          
          <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium">
            About Page
          </span>

          <h1 className="mt-6 text-5xl font-extrabold text-white">
            About This App 📖
          </h1>

          <p className="mt-4 text-lg text-gray-300 leading-8">
            This is an additional page created for the Next.js practical test.
            I am using a reusable <code className="bg-white/10 px-2 py-1 rounded text-indigo-300">Header</code> component
            that appears on both the Home and About pages.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a href="/">
              <button className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 transition text-white font-semibold shadow-lg shadow-emerald-500/30">
                ← Back to Home
              </button>
            </a>
          </div>

        </div>
      </main>
    </>
  );
}