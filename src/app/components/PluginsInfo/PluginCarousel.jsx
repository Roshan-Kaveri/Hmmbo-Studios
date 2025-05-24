'use client';

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import PluginCard from "./PluginCard"; // Adjust path if needed
import { Badge } from "lucide-react";

const PluginCarousel = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 10,
    },
  });

  const pluginData = [
    {
      bgImage: "https://via.placeholder.com/256x384?text=Plugin+1",
      title: "Awesome Plugin",
      description: "Helps with managing mobs and more.",
      price: "9.99",
      originalPrice: "14.99",
      badge: "SALE"
    },
    {
      bgImage: "https://via.placeholder.com/256x384?text=Plugin+2",
      title: "Events Pro",
      description: "Easily configure in-game events.",
      price: "12.49",
    },
    {
      bgImage: "https://via.placeholder.com/256x384?text=Plugin+3",
      title: "Mob Master",
      description: "Mob AI tweaking and spawn control.",
      price: "7.99",
      originalPrice: "10.00",
    },
    // Add more if needed
  ];

  return (
    <div className="flex flex-col"> <h3 className="font-poppins text-4xl text-secondary-gradient py-2">Featured</h3> 
    <div className="flex w-[90vw]">   
    <div ref={sliderRef} className="keen-slider">
      {pluginData.map((plugin, index) => (
        <div key={index} className="keen-slider__slide ">
          <PluginCard
            {...plugin}
            onBuy={() => alert(`Buy clicked for ${plugin.title}`)}
          />
        </div>
      ))}
      </div>
    </div>
    </div>
  );
};

export default PluginCarousel;
