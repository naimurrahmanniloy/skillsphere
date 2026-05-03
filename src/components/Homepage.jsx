import React from "react";
import Header from "./shared/Header";
import Popular from "./shared/Popular";
import LearningSection from "./shared/LearningSection";
import Mentors from "./shared/Mentors";
import ReadySection from "./shared/ReadySection";
import TechSection from "./TechSection";
import FadeUp from "./Fadeup";

const Homepage = () => {
  return (
    <div>
      <Header />
      <FadeUp delay={0.2}>
        <Popular />
      </FadeUp>
      <TechSection />

      <LearningSection />

      <FadeUp delay={0.2}>
        <Mentors />
      </FadeUp>
      <ReadySection />
    </div>
  );
};

export default Homepage;
