import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { AiFillCheckCircle } from "react-icons/ai";

const About = () => {
  return (
    <div className="py-20 mt-20">
      <Title
        yes={false}
        title="Learn More About Us"
        text="Lorem ipsum dolor sit amet, consectetur ex ea commodo consequat."
      />
      <div className="w-full md:w-[700px] lg:w-[1200px] mx-auto flex flex-col lg:flex-row items-start justify-center gap-8 px-4 md:px-0 py-10">
        <div className="size-[720px] rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>
        <img
          className="w-[350px] md:w-full lg:w-[500px] rounded-xl h-auto flex-1"
          src={assets.about_img}
          alt="about_img"
        />
        <div className="flex-2">
          <p className="text-xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex flex-col gap-10 mt-6">
            <div className="flex items-center gap-4">
              <AiFillCheckCircle className="text-orange-600 text-2xl" />
              <p className="text-[16px] text-slate-500">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
              </p>
            </div>
            <div className="flex items-center gap-4">
              <AiFillCheckCircle className="text-orange-600 text-2xl" />
              <p className="text-[16px] text-slate-500">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
              </p>
            </div>
            <div className="flex items-center gap-4">
              <AiFillCheckCircle className="text-orange-600 text-2xl" />
              <p className="text-[16px] text-slate-500">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
