import React from "react";
import Header from "./shared/Header";
import Popular from "./shared/Popular";
import LearningSection from "./shared/LearningSection";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Popular />
      <LearningSection />
    </div>
  );
};

export default Homepage;
