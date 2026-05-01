import { ArrowRight } from "@gravity-ui/icons";
import CourseCard from "../CourseCard";
import Link from "next/link";

const Popular = async () => {
  const res = await fetch("https://skillsphere-nu.vercel.app/data.json");
  const data = await res.json();
  console.log(data);

  return (
    <div className=" bg-[#F2F3FC] pt-32 min-h-200">
      <div className="max-w-7xl mx-auto  ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-4xl">Popular Knowledge Paths</h1>
            <p className="text-[#424753] mt-2">
              The most sought-after expertise this season.
            </p>
          </div>
          <div>
            <Link href={`/courses`}>
              <button className="flex items-center gap-1 md:mt-4 cursor-pointer text-[#005BC5]">
                View All <ArrowRight />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ">
          {data.slice(0, 3).map((course) => {
            return <CourseCard key={course.id} course={course} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Popular;
