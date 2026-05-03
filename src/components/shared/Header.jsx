import React from "react";
import heroImg from "../../../public/teaching.png";
import Image from "next/image";
import { Button } from "@heroui/react";
import { CirclePlay } from "@gravity-ui/icons";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-[#F9F9FF]">
      <div className="hero min-h-170">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={heroImg}
            alt="Hero"
            className="max-w-full rounded-xl shadow-2xl"
          />

          <div>
            <div className="badge bg-[#E8DEFF] text-[#632CE5] rounded-lg">
              THE DIGITAL CURATOR
            </div>
            <h1 className="text-8xl font-bold height-[1.2em]">
              Upgrade Your{" "}
              <span className="italic text-[#005BC5]">Skills Today🚀</span>
            </h1>
            <p className="py-6 text-[24px] text-gray-600">
              Step into a high-end gallery of knowledge. Learn <br /> from
              industry experts curated for professional excellence.
            </p>
            <div className="flex gap-4">
              <Link href={"/courses"}>
                <Button
                  className="text-lg py-6 px-8 bg-[#005BC5]"
                  variant="primary"
                >
                  Explore Courses
                </Button>
              </Link>
              <Link href={"/courses"}>
                <Button className="text-lg py-6 px-8" variant="outline">
                  <CirclePlay className="h-5 w-5" /> Watch Outlines
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
