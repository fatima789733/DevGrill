"use client";
import Link from "next/link";
import Image from "next/image";
import DownloadButton from "@/components/Button";

export default function Navbar() {
  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="backdrop-blur-md bg-white/20 border border-gray-300/30 rounded-full shadow-lg ">
        <div className="flex items-center justify-between w-full min-w-[700px]">
          {/* Logo and Text - Left Side */}
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-white/30 rounded-lg backdrop-blur-sm">
              <Image
                src="/logo.png"
                alt="logo"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <span className="text-lg font-semibold text-gray-800">
              DevGrill
            </span>
          </div>

          {/* Navigation Items - Center */}
          <div className="flex items-center space-x-8">
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-200 hover:scale-105 transform"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-200 hover:scale-105 transform"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-200 hover:scale-105 transform"
            >
              Contact
            </Link>
          </div>

          {/* Button - Right Side */}
          <div className="flex items-end justify-end ">
            <DownloadButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
