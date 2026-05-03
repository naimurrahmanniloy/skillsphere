"use client";

import { useState, useEffect } from "react";
import AllCourseCard from "@/components/AllCourseCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("https://skillsphere-nu.vercel.app/data.json");
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.title?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      <section className="w-full bg-[#F8F9FB] py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="flex-1 border-l-[3px] border-[#0052D4] pl-6 md:pl-8">
            <span className="text-[#8E74FF] text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] block mb-4">
              Knowledge Repository
            </span>

            <h1 className="text-[#1A1B22] text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight mb-6">
              Explore All <br />
              <span className="text-[#0052D4] italic">Courses</span>
            </h1>

            <p className="text-[#5B5E6B] text-base md:text-lg max-w-lg leading-relaxed">
              Curated learning paths designed by industry masters. From
              foundational principles to advanced execution.
            </p>
          </div>

          <div className="w-full md:w-95">
            <label className="text-[#5B5E6B] text-[11px] md:text-[12px] font-bold uppercase tracking-wider block mb-3 ml-1">
              Quick Search
            </label>

            <div className="relative group">
              <input
                type="text"
                placeholder="e.g. UX Design Principles"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#EAEAF2] text-[#1A1B22] placeholder:text-[#B0B2BE] text-sm md:text-base py-4 px-6 rounded-xl border-none outline-none focus:ring-2 focus:ring-[#0052D4]/20 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#004282] p-2.5 rounded-lg text-white hover:bg-[#003366] transition-colors">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch w-10/12 mx-auto mt-12">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <AllCourseCard key={course.id} course={course} />
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-[#5B5E6B]">
                No courses found matching {searchQuery}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
