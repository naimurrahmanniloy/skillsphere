import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="w-full max-w-85 flex flex-col h-full rounded-[1.5rem] bg-white border border-gray-100 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] overflow-hidden font-sans">
      {/* Image Header */}
      <div className="relative h-55 w-full bg-slate-800">
        {/* <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"
          alt="Course graphic"
          className="w-full h-full object-cover opacity-90"
        /> */}
        {/* Category Badge */}
        <div
          className={`absolute top-4 left-4  text-[11px] font-bold px-2.5 py-1 rounded-sm shadow-sm ${course.category === "Development" ? "bg-[#69FF87] text-[#00541E]" : ""} ${course.category === "Marketing" ? "bg-[#FFEDD5] text-[#C2410C]" : ""} ${course.category === "Design" ? "bg-[#E8DEFF] text-[#6B21A8]" : ""} ${course.category === "IT & Software" ? "bg-[#E8DEFF] text-[#6B21A8]" : ""} ${course.category === "Data Science" ? "bg-[#E8DEFF] text-[#6B21A8]" : ""}`}
        >
          {course.category}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5  flex-1 flex flex-col">
        <h2 className="text-[22px] leading-tight text-gray-900 font-medium mb-2 mt-1">
          {course.title}
        </h2>
        <p className="text-[14px] leading-snug text-gray-500 mb-6 pr-4">
          {course.description}
        </p>

        {/* Author and Rating Row */}
        <div className="mt-auto">
          {/* Author and Rating Row */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <span className="text-[14px] font-semibold text-gray-900">
                {course.instructor}
              </span>
            </div>

            <div className="flex items-center gap-1 text-[#004282] font-bold text-[15px]">
              <svg className="w-4 h-4 fill-current mb-0.5" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              4.8
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full bg-[#EAEAF2] hover:bg-[#DFDFE9] text-[#383845] font-semibold text-[15px] py-3 rounded-[0.8rem] transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
