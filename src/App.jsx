import React from "react";
import Header from "./components/Header";
import AccessibilityBar from "./components/AccessibilityBar";
import Assistant from "./components/Assistant.jsx";

import Hero from "./pages/Hero";
import Strengths from "./pages/Strengths";
import KnownFor from "./pages/KnownFor";
import PeakPerformance from "./pages/PeakPerformance";
import FixFlex from "./pages/FixFlex";
import Thrive from "./pages/Thrive";
import Experience from "./pages/Experience";
import CoreCompetencies from "./pages/CoreCompetencies";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative flex flex-col min-h-screen bg-black text-white overflow-x-hidden font-sans">
      {/* Header */}
      <Header />

      {/* Accessibility Bar */}
      <div className="fixed bottom-6 left-6 z-50">
        <AccessibilityBar />
      </div>

      {/* Main Content */}
      <main
        className="flex-1 scroll-smooth"
        style={{
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <section id="home">
          <Hero />
        </section>

        <section id="strengths">
          <Strengths />
        </section>

        <section id="knownfor">
          <KnownFor />
        </section>

        <section id="peak-performance">
          <PeakPerformance />
        </section>

        <section id="fixflex">
          <FixFlex />
        </section>

        <section id="why">
          <Thrive />
        </section>

        <section id="career">
          <Experience />
        </section>

        <section id="core-competencies">
          <CoreCompetencies />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <section id="quote">
          <Quote />
        </section>
      </main>

      {/* Floating AI Assistant */}
      <Assistant />

      {/* Footer */}
      <Footer />
    </div>
  );
}
