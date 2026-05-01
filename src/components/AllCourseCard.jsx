import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllCourseCard = ({ course }) => {
  return (
    <div>
      <div className="flex flex-col h-120 w-full max-w-95 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] overflow-hidden font-sans">
        <div className="h-50 w-full overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
            width={600}
            height={300}
          />
        </div>

        <div className="p-7 flex flex-col flex-1">
          <div className="flex flex-row flex-1 gap-5">
            <div
              className={`inline-block self-start  text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-md mb-4 ${course.category === "Development" ? "bg-[#69FF87] text-[#00541E]" : ""} ${course.category === "Marketing" ? "bg-[#FFEDD5] text-[#C2410C]" : ""} ${course.category === "Design" ? "bg-[#E8DEFF] text-[#6B21A8]" : ""} ${course.category === "IT & Software" ? "bg-[#E8DEFF] text-[#6B21A8]" : ""} ${course.category === "Data Science" ? "bg-[#E8DEFF] text-[#6B21A8]" : ""}`}
            >
              {course.category}
            </div>
            <div className="inline-block self-start bg-[#FFF2E5] text-[#C25A24] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-md mb-4">
              {course.level}
            </div>
          </div>

          <h3 className="text-[22px] font-bold text-gray-900 leading-tight mb-3">
            {course.title}
          </h3>

          <p className="text-[15px] text-gray-500 leading-relaxed line-clamp-3">
            {course.description}
          </p>

          <div className="mt-auto pt-6 border-t border-gray-50 flex justify-between items-center">
            <div className="flex items-center gap-3">
              {" "}
              <Image
                src={course.instructor_photo}
                alt={course.instructor}
                className="w-8 h-8 rounded-full object-cover shadow-sm"
                width={32}
                height={32}
              />
              <span className="text-[14px] font-bold text-gray-400 uppercase tracking-tight">
                {course.instructor}
              </span>
            </div>

            <Link href={`/courses/${course.id}`}>
              <button className="text-[#0052D4] font-bold text-[16px] hover:underline transition-all">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourseCard;
