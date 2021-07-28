import React from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero-section/HeroSection";
import SubHeroSection from "./components/sub-hero-section/SubHeroSection";
import FirstSection from "./components/first-section/FirstSection";
import SecondSection from "./components/second-section/SecondSection";
import ThirdSection from "./components/third-section/ThirdSection";
import FourthSection from "./components/fourth-section/FourthSection";
import FifthSection from "./components/fifth-section/FifthSection";
import GridSection from "./components/grid-section/GridSection";
import SeventhSection from "./components/seventh-section/SeventhSection";
import Footer from "./components/footer/Footer";

function Homepage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SubHeroSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <GridSection />
      <SeventhSection />
      <Footer />
    </div>
  );
}

export default Homepage;
