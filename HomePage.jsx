import React from "react";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-white text-black overflow-hidden">
      {/* Login Button */}
      <div className="absolute top-4 right-6 z-10">
        <button className="border border-black px-4 py-2 rounded">Login</button>
      </div>

      {/* Scrolling Faces */}
      <div className="absolute inset-0 opacity-20 overflow-hidden z-0">
        <div className="whitespace-nowrap animate-scroll flex items-center h-full">
          {[...Array(20)].map((_, i) => (
            <img
              key={i}
              src={\`https://source.unsplash.com/100x100/?face,person&sig=\${i}\`}
              alt="face"
              className="w-32 h-32 object-cover rounded-full mx-4"
            />
          ))}
        </div>
      </div>

      {/* Central Prompt */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-3xl md:text-5xl font-semibold mb-6">What’s your name?</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter your name"
            className="border px-4 py-2 rounded w-64"
          />
          <button className="bg-black text-white px-4 py-2 rounded">Go</button>
        </div>
      </div>

      {/* Scroll Animation */}
      <style>
        {`
          .animate-scroll {
            animation: scrollFaces 60s linear infinite;
          }
          @keyframes scrollFaces {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
}