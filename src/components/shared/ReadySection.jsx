const ReadySection = () => {
  return (
    <div>
      <section className="w-full py-16 px-4 bg-[#F8F9FB]">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-[#0061FF] via-[#0052D4] to-[#003C96] px-8 py-16 md:py-24 text-center shadow-xl">
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-400 opacity-20 blur-3xl"></div>

            <div className="relative z-10 flex flex-col items-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Ready to curate your future?
              </h2>

              <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-blue-50 opacity-90 md:text-xl">
                Join a community of 24,000+ professionals pushing the boundaries
                of their respective fields.
              </p>

              <button className="rounded-full bg-white px-8 py-4 text-sm font-bold text-[#0052D4] shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 md:px-10 md:py-5 md:text-base">
                Get Started for Free
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReadySection;
