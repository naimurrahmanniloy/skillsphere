import Image from "next/image";

const TechSection = () => {
  return (
    <section className="w-full min-h-screen bg-[#F3F5FF] flex items-center justify-center p-6 md:p-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="relative w-full lg:w-1/2">
          <h2 className="absolute -top-10 -left-6 md:-top-30 md:-left-20 text-[120px] md:text-[180px] font-black text-white leading-none select-none z-0">
            NEW
          </h2>

          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
              alt="AI in Architecture"
              className="w-full h-full object-cover"
              width={680}
              height={680}
            />
          </div>

          <div className="absolute -bottom-8 -right-4 md:-right-8 z-20 bg-[#6333FF] text-white rounded-full w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center text-center p-4 shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-300 cursor-default">
            <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest mb-1">
              Trending Now
            </span>
            <span className="text-sm md:text-lg font-bold leading-tight">
              AI in
              <br />
              Architecture
            </span>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <h1 className="text-[#1A1B22] text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              The Next Frontier <br className="hidden md:block" /> of Digital
              Design
            </h1>
            <p className="text-[#5B5E6B] text-base md:text-lg max-w-lg leading-relaxed">
              Our trending courses are vetted by industry leaders to ensure you
              re learning the tools that will define the next decade of
              professional work.
            </p>
          </div>

          <div className="space-y-4">
            <div className="group bg-white rounded-2xl p-5 md:p-6 flex items-center gap-5 shadow-sm border border-transparent hover:border-[#6333FF]/20 hover:shadow-md transition-all cursor-pointer">
              <div className="bg-[#F3F5FF] text-[#0052D4] font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                01
              </div>
              <div className="flex-1">
                <h4 className="text-[#1A1B22] font-bold text-sm md:text-base">
                  Web3 for Creative Directors
                </h4>
                <p className="text-[#8E919E] text-xs mt-1">
                  32 hours of curated content • High Demand
                </p>
              </div>
              <div className="text-[#B0B2BE] group-hover:text-[#6333FF] transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-5 md:p-6 flex items-center gap-5 shadow-sm border border-transparent hover:border-[#6333FF]/20 hover:shadow-md transition-all cursor-pointer">
              <div className="bg-[#F3F5FF] text-[#0052D4] font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                02
              </div>
              <div className="flex-1">
                <h4 className="text-[#1A1B22] font-bold text-sm md:text-base">
                  Sustainable Systems Engineering
                </h4>
                <p className="text-[#8E919E] text-xs mt-1">
                  New Module Added • 12 Experts
                </p>
              </div>
              <div className="text-[#B0B2BE] group-hover:text-[#6333FF] transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
