"use client";

import Image from "next/image";

const Mentors = () => {
  const mentors = [
    {
      id: 1,
      name: "Sarah Drasner",
      role: "Head of Design Ops",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
      tags: [
        { label: "DESIGN", bg: "bg-[#F0E6FF]", text: "text-[#5024A9]" },
        { label: "STRATEGY", bg: "bg-[#6EFA8A]", text: "text-[#085C27]" },
      ],
    },
    {
      id: 2,
      name: "David Heinemeier",
      role: "Principal Engineer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      tags: [
        { label: "BACKEND", bg: "bg-[#6EFA8A]", text: "text-[#085C27]" },
        { label: "RUBY", bg: "bg-[#E3F2FD]", text: "text-[#0C479D]" },
      ],
    },
    {
      id: 3,
      name: "Amelie Chen",
      role: "Visual Brand Lead",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
      tags: [
        { label: "MOTION", bg: "bg-[#F0E6FF]", text: "text-[#5024A9]" },
        { label: "BRANDING", bg: "bg-[#FFF2E5]", text: "text-[#C25A24]" },
      ],
    },
    {
      id: 4,
      name: "Dr. Robert C. Martin",
      role: "Systems Architect",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
      tags: [
        { label: "CLEAN CODE", bg: "bg-[#6EFA8A]", text: "text-[#085C27]" },
        { label: "AGILE", bg: "bg-[#E3F2FD]", text: "text-[#0C479D]" },
      ],
    },
  ];
  return (
    <div>
      <section className="bg-[#F8F9FB] w-full py-10 px-4 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-[#1A1B22] text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Curated Mentors
            </h2>
            <p className="text-[#5B5E6B] text-lg md:text-xl">
              World-class specialists sharing their life work.
            </p>
          </div>

          {/* Mentors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {mentors.map((mentor) => (
              <div
                key={mentor.id}
                className="flex flex-col items-center text-center"
              >
                {/* Profile Image Container */}
                <div className="relative mb-6">
                  <div className="w-44 h-44 rounded-full overflow-hidden   bg-white">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                      width={176}
                      height={176}
                    />
                  </div>
                </div>

                {/* Mentor Name */}
                <h3 className="text-[#1A1B22] text-[22px] font-bold mb-1">
                  {mentor.name}
                </h3>

                {/* Mentor Role */}
                <p className="text-[#0C479D] font-semibold mb-5 text-[15px]">
                  {mentor.role}
                </p>

                {/* Skill Tags */}
                <div className="flex items-center gap-2">
                  {mentor.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest rounded-sm ${tag.bg} ${tag.text}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mentors;
