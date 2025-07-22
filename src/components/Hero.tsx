"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import HoverButton from "@/components/socials";

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
  }, [words.length]);
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 md:px-12 text-center">
      <Navbar />

      <div className="max-w-4xl mx-auto mt-20 space-y-8">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-semibold text-gray-800 leading-tight text-center">
          Designing with purpose, building with{" "}
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent transition-all duration-500 ease-in-out">
            {words[currentWordIndex]}
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
        <div className="flex flex-col items-center opacity-80">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
            Technologies We Love
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {techStack.map(({ icon: Icon, name, color }, index) => (
              <div
                key={name}
                className="group flex flex-col items-center space-y-2 hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/30 backdrop-blur-sm p-3 rounded-xl group-hover:bg-white/40 transition-all duration-300 group-hover:shadow-lg">
                  <Icon
                    className={`h-6 w-6 ${color} group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>
                <span className="text-xs font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
