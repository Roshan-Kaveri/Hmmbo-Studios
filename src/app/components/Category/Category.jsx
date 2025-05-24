import React from "react";
import img1 from "../../../../public/img/Plugins.png";
import img2 from "../../../../public/img/Config.png";
import img3 from "../../../../public/img/Build.png";
import img4 from "../../../../public/img/Misc.png";
import Image from "next/image";

const Category = () => {
  const items = [
    { name: "Adventure", image: img1 },
    { name: "Survival", image: img2 },
    { name: "Creative", image: img3 },
    { name: "Minigames", image: img4 },
  ];

  return (
        <div className="mt-60 flex flex-col"> <h3 className="font-poppins text-4xl text-secondary-gradient py-2">Browse By Category</h3> 
    <div className=" relative grid grid-cols-2 sm:grid-cols-4 gap-8 justify-start">
      {items.map((item, index) => (
        <div key={index} className="overflow-hidden shadow-md">
          <Image
            src={item.image}
            alt={item.name}
            className="w-full h-64 object-cover"
          />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Category;
