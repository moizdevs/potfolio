import React from "react";
import Link from "next/link";

const notfound = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white font-sans overflow-hidden">
      {/* Background GIF */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
        }}
      ></div>

      {/* Overlay Gradient for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-[8rem] font-extrabold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-4">
          Oops! Page not found
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you’re looking for might have been removed or is temporarily
          unavailable.
        </p>
        <Link
          href="/"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-green-600 transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>

      {/* Floating Glow Effect */}
      <div className="absolute bottom-10 w-[200px] h-[200px] bg-green-500/30 blur-[100px] rounded-full animate-pulse"></div>
    </div>
    </>
  );
};

export default notfound;
