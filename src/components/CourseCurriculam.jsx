import React from "react";

const CourseCurriculam = ({ currentData }) => {
  return (
    <div>
      <section className="w-full bg-[#F8F9FB] py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#1A1B22] text-2xl md:text-3xl font-bold mb-8 ml-2">
            Course Curriculum
          </h2>

          <div className="flex flex-col gap-4">
            {currentData.course_curriculum.map((item, index) => {
              const displayId = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={index}
                  className="group flex items-center justify-between bg-white p-5 md:p-8 rounded-[1.5rem] border border-transparent hover:border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)] transition-all duration-300"
                >
                  <div className="flex items-center gap-5 md:gap-10">
                    {/* Step Number */}
                    <span className="text-3xl md:text-4xl font-bold text-gray-100 group-hover:text-blue-100 transition-colors duration-300">
                      {displayId}
                    </span>

                    <div>
                      <h4 className="text-[#1A1B22] text-lg md:text-xl font-bold mb-1 group-hover:text-[#0052D4] transition-colors">
                        {item}
                      </h4>
                    </div>
                  </div>

                  {/* Lock Icon */}
                  <div className="text-gray-300 group-hover:text-gray-400 transition-colors pr-2">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseCurriculam;
