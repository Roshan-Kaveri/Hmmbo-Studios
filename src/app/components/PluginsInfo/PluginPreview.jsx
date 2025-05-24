"use client";

import React from "react";
import Image from "next/image"; // if you're using Next.js

import leftChar from "../../../../public/img/leftcharacter.png"; // replace with actual path
import rightChar from "../../../../public/img/rightcharacter.png"; // replace with actual path

import { Figtree } from "next/font/google";
import PluginCard from "./PluginCard";
import PluginCarousel from "./PluginCarousel";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["800", "500"], // Choose only the weights you need
  variable: "--font-figtree", // optional if you want to use as a CSS variable
  display: "swap",
});

const PluginPreview = () => {
  return (
    <section className="w-full">
      {/* Title above the flex container */}
      <div className="mb-[-8em] text-center">
        <h2
          className={`${figtree.className} font-bold text-4xl md:text-7xl text-secondary-gradient`}
        >
          Plugins, configs & <br /> much more
        </h2>
      </div>

      {/* Flex container with left image, description, right image */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-28 h-auto md:w-96 mb-[-10px]">
          <Image src={leftChar} alt="Left Character" />
        </div>

        <div className="flex flex-col gap-8 text-center self-center justify-center md:text-left md:flex-1 mt-28">
          <p
            className={`${figtree.className} font-light text-gray-300 text-sm text-center md:text-base scale-125`}
          >
            More customization is key. Build your unique server with the right
            tools. Customize everything from performance to features, so your
            server grows with your needs.
          </p>
          <button className="self-center w-40 py-4 bg-primary">
            {" "}
            Explore Plugins
          </button>
        </div>

        <div className="w-28 h-auto md:w-96">
          <Image src={rightChar} alt="Right Character" />
        </div>
      </div>
     <div className="relative">
  {/* Background section */}
  <div className="bg-[#1A1919] h-[30rem]"></div>

  {/* Carousel overlayed on top */}
  <div className="absolute top-20 left-0 w-full h-full flex items-center justify-center">
    <PluginCarousel />
  </div>
</div>

    </section>
  );
};

export default PluginPreview;
