import React from "react";
import heroImg from "../../../public/teaching.png";
import Image from "next/image";
import { Button } from "@heroui/react";
import { CirclePlay } from "@gravity-ui/icons";

const Header = () => {
  return (
    <div className="bg-[#F9F9FF]">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={heroImg}
            alt="Hero"
            className="max-w-full rounded-xl shadow-2xl"
          />

          <div>
            <h1 className="text-8xl font-bold height-[1.2em]">
              Upgrade Your{" "}
              <span className="italic text-[#005BC5]">Skills Today 🚀</span>
            </h1>
            <p className="py-6 text-[20px] text-gray-600">
              Step into a high-end gallery of knowledge. Learn <br /> from
              industry experts curated for professional excellence.
            </p>
            <div className="flex gap-4">
              <Button
                className="text-lg py-6 px-8 bg-[#005BC5]"
                variant="primary"
              >
                Explore Courses
              </Button>
              <Button className="text-lg py-6 px-8" variant="outline">
                <CirclePlay className="h-5 w-5" /> Watch Outlines
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
