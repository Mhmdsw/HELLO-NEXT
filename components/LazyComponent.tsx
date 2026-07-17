// This component will be loaded lazily (only when needed)
export default function LazyComponent() {
  return (
    <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
      <h3 className="text-2xl font-bold text-white">🎉 Lazy Loaded Component!</h3>
      <p className="text-gray-300 mt-2">
        This component was loaded lazily! It only appears when you click the button below.
      </p>
      <p className="text-gray-400 text-sm mt-2">
        ⚡ It was not loaded when the page first loaded - it only loaded when you needed it!
      </p>
      <div className="mt-4 flex gap-2">
        <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">Lazy</span>
        <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs">Loaded</span>
        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs">⚡ Fast</span>
      </div>
    </div>
  );
}