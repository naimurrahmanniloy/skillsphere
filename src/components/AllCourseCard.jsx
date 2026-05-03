"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const AllCourseCard = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -10 }}
    >
      <motion.div
        className="flex flex-col h-120 w-full max-w-95 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] overflow-hidden font-sans"
        whileHover={{
          scale: 1.02,
          boxShadow: "0 25px 60px -20px rgba(0,0,0,0.18)",
        }}
        transition={{ duration: 0.35 }}
      >
        <div className="h-50 w-full overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
              width={600}
              height={300}
            />
          </motion.div>
        </div>

        <div className="p-7 flex flex-col flex-1">
          <div className="flex flex-row flex-1 gap-5">
            <div
              className={`inline-block self-start text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-md mb-4 ${
                course.category === "Development"
                  ? "bg-[#69FF87] text-[#00541E]"
                  : ""
              } ${
                course.category === "Marketing"
                  ? "bg-[#FFEDD5] text-[#C2410C]"
                  : ""
              } ${
                course.category === "Design"
                  ? "bg-[#E8DEFF] text-[#6B21A8]"
                  : ""
              } ${
                course.category === "IT & Software"
                  ? "bg-[#E8DEFF] text-[#6B21A8]"
                  : ""
              } ${
                course.category === "Data Science"
                  ? "bg-[#E8DEFF] text-[#6B21A8]"
                  : ""
              }`}
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
              <motion.button
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="text-[#0052D4] font-bold text-[16px] hover:underline transition-all cursor-pointer"
              >
                View Details →
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AllCourseCard;
