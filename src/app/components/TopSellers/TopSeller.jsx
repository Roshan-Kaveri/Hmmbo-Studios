import React from "react"
import PluginCarousel from "./PluginCarousel";

const TopSeller = (props) => {
  return (
    <div className="relative mt-80 ">
  {/* Background section */}
   <div className="absolute left-0 top-[-15em]  w-full h-full flex items-center justify-center ">
    <PluginCarousel></PluginCarousel>
  
  </div>      
   <div className="bg-[#1A1919] w-[98.5vw] h-[28rem] "></div>




 
</div>
  )
};

export default TopSeller;
