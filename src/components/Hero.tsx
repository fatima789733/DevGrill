"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HoverButton from "@/components/socials";
import ClipIcons from "@/components/tech"; // adjust path if needed

import {
  ArrowRight,
  Code2,
  Palette,
  Smartphone,
  Globe,
  Database,
  Zap,
} from "lucide-react";

export default function Hero() {
  const techStack = [
    { icon: Code2, name: "React", color: "text-blue-500" },
    { icon: Palette, name: "Design", color: "text-purple-500" },
    { icon: Smartphone, name: "Mobile", color: "text-green-500" },
    { icon: Globe, name: "Web", color: "text-orange-500" },
    { icon: Database, name: "Backend", color: "text-red-500" },
    { icon: Zap, name: "Performance", color: "text-yellow-500" },
  ];

  const words = ["precision", "passion", "mastery"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center px-6 md:px-12 text-center">
      <Navbar />

      <div className="max-w-4xl w-full space-y-8">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-semibold text-gray-800 leading-tight">
          Designing with purpose, building with{" "}
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent transition-all duration-500 ease-in-out">
            {words[currentWordIndex]}
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
          Create stunning websites and applications with modern technologies.
          From concept to deployment, we make your digital vision come to life.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 flex items-center space-x-2">
            <span>Start Your Project</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <HoverButton />
        </div>

        {/* Tech Stack Icons */}
        <ClipIcons />
      </div>
    </div>
  );
}
