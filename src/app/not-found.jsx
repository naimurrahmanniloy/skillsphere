import React from "react";
import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full text-center relative">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
          <h1 className="text-[#0052D4] opacity-[0.03] text-[200px] md:text-[400px] font-black tracking-tighter">
            404
          </h1>
        </div>

        <div className="relative z-10">
          {/* Tagline */}
          <span className="text-[#8E74FF] text-[10px] md:text-[12px] font-bold uppercase tracking-[0.3em] block mb-6">
            Error: Course Coordinates Lost
          </span>

          {/* Heading */}
          <h2 className="text-[#1A1B22] text-5xl md:text-7xl font-bold leading-tight mb-8">
            This Page is <br />
            <span className="text-[#0052D4] italic">Off-Script</span>
          </h2>

          {/* Description */}
          <p className="text-[#5B5E6B] text-base md:text-lg max-w-md mx-auto mb-12 leading-relaxed">
            The knowledge you re seeking hasnt been curated yet, or the URL has
            taken an unexpected detour.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto bg-[#1A1B22] text-white px-8 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#000] transition-all active:scale-95"
            >
              <Home size={18} />
              Return Home
            </Link>

            <Link
              href="/courses"
              className="w-full sm:w-auto bg-white text-[#1A1B22] border border-[#EAEAF2] px-8 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#F3F5FF] hover:border-[#0052D4]/20 transition-all active:scale-95 shadow-sm"
            >
              <Search size={18} />
              Browse Knowledge Repository
            </Link>
          </div>

          {/* Footer Hint */}
          <button
            // onClick={() => window.history.back()}
            className="mt-12 text-[#8E919E] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 mx-auto hover:text-[#0052D4] transition-colors group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
