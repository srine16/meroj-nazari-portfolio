import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import AccessibilityBar from "./components/AccessibilityBar";
import Assistant from "./components/Assistant.jsx";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // ✅ added

// pages
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

export default function App() {
  return (
    <div className="relative flex flex-col min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Header />

      {/* Accessibility tools */}
      <div className="fixed bottom-6 left-6 z-50">
        <AccessibilityBar />
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-x-hidden">
        <ScrollToTop /> {/* ✅ added */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/strengths" element={<Strengths />} />
          <Route path="/known-for" element={<KnownFor />} />
          <Route path="/peak-performance" element={<PeakPerformance />} />
          <Route path="/fix-flex" element={<FixFlex />} />
          <Route path="/thrive" element={<Thrive />} />
          <Route path="/career" element={<Experience />} />
          <Route path="/core-competencies" element={<CoreCompetencies />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </main>

      <Assistant />
      <Footer />
    </div>
  );
}
