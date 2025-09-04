import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className=" relative top-0 h-[525px] w-full overflow-hidden">
      {/* Background image */}
      <img
        src={assets.hero_bg}
        alt="hero"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-stone-900/70 -z-0"></div>

      {/* Your content goes here */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <p className=" text-orange-600 font-bold uppercase tracking-[7px] text-[15px]">
          Fresh & Organic
        </p>
        <h1 className="text-white lg:text-[40px] text-[28px] font-bold leading-[1.3]">
          Are you starving?
        </h1>
        <div className="flex items-center gap-5 mt-3">
          <button className=" border-0 text-white bg-orange-600 py-3 px-6 text-[18px] rounded-[10px] cursor-pointer hover:bg-orange-700 hover:text-white transition">
            Browse Food
          </button>
          <button className=" border-[2px] border-orange-600 text-white py-2 px-6 text-[18px] rounded-[10px] cursor-pointer hover:bg-orange-600 hover:text-white transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
