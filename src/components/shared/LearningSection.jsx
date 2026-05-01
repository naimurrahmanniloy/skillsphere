"use client";

import React from "react";
import { Button, Text } from "@gravity-ui/uikit";
import Image from "next/image";

const LearningSection = () => {
  return (
    <section className="bg-[#F8F9FB] w-full min-h-screen py-20 px-4 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h1 className="text-[#1A1B22] text-4xl font-bold block mb-4">
            Master the Craft of Learning
          </h1>
          <p variant="body-2" className="text-[#5B5E6B] text-lg">
            Beyond courses, we provide the cognitive tools for long-term
            knowledge retention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-[#0C479D] rounded-[2rem] p-8 md:p-10 flex flex-col justify-center text-white shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                />
              </svg>
            </div>
            <h2 className="text-white text-3xl font-semibold mb-3">
              Deep Work Cycles
            </h2>
            <p
              variant="body-2"
              className="text-blue-100 max-w-md text-[15px] leading-relaxed"
            >
              Learn the science of 90-minute high-intensity focus blocks to
              master complex topics 3x faster.
            </p>
          </div>

          <div className="md:col-span-1 bg-[#F0E6FF] rounded-[2rem] p-8 md:p-10 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
              <svg
                className="w-7 h-7 text-[#5024A9]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-[#361676] text-[22px] font-semibold mb-3 leading-tight">
              Spaced Repetition
            </h2>
            <p
              variant="body-1"
              className="text-[#5024A9] text-[14px] leading-relaxed"
            >
              Combat the forgetting curve with automated review schedules
              tailored to your progress.
            </p>
          </div>

          <div className="md:col-span-1 bg-[#6EFA8A] rounded-[2rem] p-8 md:p-10 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-6">
              <svg
                className="w-7 h-7 text-[#085C27]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </div>
            <h2 className="text-[#085C27] text-[22px] font-semibold mb-3 leading-tight">
              Visual Synthesis
            </h2>
            <p
              variant="body-1"
              className="text-[#137A39] text-[14px] leading-relaxed"
            >
              Transform linear notes into mental maps to strengthen neural
              connections.
            </p>
          </div>

          <div className="md:col-span-2 bg-[#F1F3F5] rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
            <div className="p-8 md:p-10 flex flex-col justify-center flex-1">
              <h2 className="text-[#1A1B22] text-3xl font-semibold mb-3">
                Peer Insights
              </h2>
              <p
                variant="body-2"
                className="text-[#5B5E6B] mb-8 max-w-sm text-[15px] leading-relaxed"
              >
                Join collaborative study sprints every Tuesday to solve
                challenges with global peers.
              </p>
              <div>
                <Button
                  view="normal"
                  size="l"
                  className="bg-white text-gray-900 border-none shadow-sm rounded-full px-6 hover:bg-gray-50"
                >
                  Join a Squad
                </Button>
              </div>
            </div>

            <div className="w-full md:w-[45%] h-64 md:h-auto relative bg-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Peer study group"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
