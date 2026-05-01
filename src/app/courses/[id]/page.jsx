import CourseCurriculam from "@/components/CourseCurriculam";
import PriceCard from "@/components/PriceCard";
import { ClockFill, Persons, StarFill } from "@gravity-ui/icons";
import { TimeField } from "@heroui/react";
import Image from "next/image";
import React from "react";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`https://skillsphere-nu.vercel.app/data.json/`);
  const allData = await res.json();

  const currentData = allData.find((data) => data.id == id);
  console.log(currentData);

  return (
    <div className="flex flex-col md:flex-row justify-around w-10/12 mx-auto mt-20 pb-20">
      {/* Details Content starts here  */}
      <div>
        {/* badge section  */}
        <div className="flex gap-3">
          <div
            className={`inline-block self-start  text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-md mb-4 ${currentData.category === "Development" ? "bg-[#69FF87] text-[#00541E]" : ""} ${currentData.category === "Marketing" ? "bg-[#FFEDD5] text-[#C2410C]" : ""} ${currentData.category === "Design" ? "bg-[#E8DEFF] text-[#6B21A8]" : ""} ${currentData.category === "IT & Software" ? "bg-[#E8DEFF] text-[#6B21A8]" : ""} ${currentData.category === "Data Science" ? "bg-[#E8DEFF] text-[#6B21A8]" : ""}`}
          >
            {currentData.category}
          </div>
          <div className="inline-block self-start bg-[#FFF2E5] text-[#C25A24] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-md mb-4">
            {currentData.level}
          </div>
        </div>
        {/* title section  */}
        <div>
          <h1 className="text-[40px] font-bold text-[#005BC5]">
            {currentData.title}
          </h1>
          {/* rating section  */}
          <div className="flex gap-5 items-center mt-4">
            <div className="flex gap-3 items-center font-bold">
              <StarFill className="text-[gold]" />
              {currentData.rating}
            </div>
            <div className="flex gap-3 items-center font-bold">
              <Persons />
              <p>{currentData.enrolled_numbers} Students Enrolled</p>
            </div>
            <div className="flex gap-3 items-center font-bold">
              <ClockFill />
              <p>{currentData.duration} total</p>
            </div>
          </div>
          <div className="mt-6">
            <Image
              src={currentData.image}
              alt={currentData.title}
              height={500}
              width={900}
            />
          </div>
          <div className="mt-8">
            <h1 className="text-4xl text-[#005BC5]">The Course Details:</h1>
            <h3 className="text-2xl mt-3">{currentData.description}</h3>
          </div>
          {/* instructor section  */}
          <div className="mt-5">
            <div className=" p-4 md:py-10">
              <div className="bg-[#F3F5F9] rounded-[2rem] p-6 md:p-7 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 shadow-sm">
                <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-[1.5rem] overflow-hidden bg-[#57A6A1] shadow-lg">
                  <Image
                    src={currentData.instructor_photo}
                    alt={currentData.instructor}
                    className="w-full h-full object-cover"
                    width={96}
                    height={96}
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-[#1A1B22] text-xl md:text-2xl font-bold mb-1">
                    {currentData.instructor}
                  </h2>

                  <h3 className="text-[#0052D4] text-[11px] md:text-[13px] font-extrabold uppercase tracking-widest mb-4">
                    {currentData.title}
                  </h3>

                  <p className="text-[#5B5E6B] text-[15px] md:text-[17px] leading-relaxed italic opacity-90 max-w-2xl">
                    &quot;{`${currentData.motivation_word}`}&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Curriculam section  */}
          <div>
            <CourseCurriculam currentData={currentData} />
          </div>
        </div>
      </div>

      {/* Pricing content starts here  */}
      <div>
        <PriceCard currentData={currentData} />
      </div>
    </div>
  );
};

export default CourseDetailsPage;
