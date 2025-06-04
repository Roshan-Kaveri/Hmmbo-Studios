"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import img1 from "../../../../public/img/Plugins.png";
import img2 from "../../../../public/img/Config.png";
import img3 from "../../../../public/img/Build.png";
import img4 from "../../../../public/img/Misc.png";

const Category = () => {
  const items = [
    { name: "Adventure", image: img1 },
    { name: "Survival", image: img2 },
    { name: "Creative", image: img3 },
    { name: "Minigames", image: img4 },
  ];

  return (
    <div className="mt-20 flex flex-col">
      <h3 className="font-poppins text-4xl text-secondary-gradient py-2">
        Browse By Category
      </h3>
      <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-8 justify-start">
        {items.map((item, index) => (
          <Link
            key={index}
            href={`/projects?category=${encodeURIComponent(item.name)}`}
            className="overflow-hidden shadow-md block group transition-transform hover:scale-105"
          >
            <Image
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover group-hover:brightness-75 transition-all duration-300"
            />
           
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
