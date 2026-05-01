import React from "react";
import Header from "./shared/Header";
import Popular from "./shared/Popular";
import LearningSection from "./shared/LearningSection";
import Mentors from "./shared/Mentors";
import ReadySection from "./shared/ReadySection";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Popular />
      <LearningSection />
      <Mentors />
      <ReadySection />
    </div>
  );
};

export default Homepage;
