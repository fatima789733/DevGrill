"use client";
import React from "react";
import { useAnimate } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiGit,
  SiGithub,
  SiDocker,
} from "react-icons/si";

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }: { Icon: any; href: string }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const box = e.currentTarget.getBoundingClientRect();
    const distances = [
      { side: "left", value: Math.abs(box.left - e.clientX) },
      { side: "right", value: Math.abs(box.right - e.clientX) },
      { side: "top", value: Math.abs(box.top - e.clientY) },
      { side: "bottom", value: Math.abs(box.bottom - e.clientY) },
    ];
    return distances.sort((a, b) => a.value - b.value)[0]
      .side as keyof typeof ENTRANCE_KEYFRAMES;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const side = getNearestSide(e);
    animate(scope.current, { clipPath: ENTRANCE_KEYFRAMES[side] });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const side = getNearestSide(e);
    animate(scope.current, { clipPath: EXIT_KEYFRAMES[side] });
  };

  return (
    <a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-20 w-full place-content-center sm:h-16 md:h-20"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl" />
      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-neutral-900 text-white"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </a>
  );
};

export default function ClipIcons() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <p className="text-center text-lg font-semibold text-gray-500 mb-4">
        Our Technical Stack
      </p>
      <div className="divide-y divide-neutral-900 border border-neutral-900 rounded-md overflow-hidden">
        <div className="grid grid-cols-4 divide-x divide-neutral-900">
          <LinkBox Icon={SiReact} href="#" />
          <LinkBox Icon={SiNextdotjs} href="#" />
          <LinkBox Icon={SiTailwindcss} href="#" />
          <LinkBox Icon={SiNodedotjs} href="#" />
        </div>
        <div className="grid grid-cols-4 divide-x divide-neutral-900">
          <LinkBox Icon={SiExpress} href="#" />
          <LinkBox Icon={SiTypescript} href="#" />
          <LinkBox Icon={SiMongodb} href="#" />
          <LinkBox Icon={SiPostgresql} href="#" />
        </div>
        <div className="grid grid-cols-4 divide-x divide-neutral-900">
          <LinkBox Icon={SiFigma} href="#" />
          <LinkBox Icon={SiGit} href="#" />
          <LinkBox Icon={SiGithub} href="#" />
          <LinkBox Icon={SiDocker} href="#" />
        </div>
      </div>
    </div>
  );
}
