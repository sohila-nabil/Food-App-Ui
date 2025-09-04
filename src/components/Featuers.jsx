import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa";

const Featuers = () => {
  return (
    <div className=" bg-stone-200/80 py-20">
      <div className="w-[80%] m-auto flex items-baseline flex-wrap  lg:items-center md:flex-row flex-col justify-between gap-1.5 ">
        <Featuer
          icon={<TbTruckDelivery  className="text-orange-600 block border-2 leading-[60px] text-center p-2.5 text-[24px] border-dotted border-orange-600 w-[65px] h-[65px] rounded-[999px]" />}
          title={"Free Shipping"}
          text={"When order over $75"}
        />
        <Featuer
          icon={<RiRefund2Fill  className="text-orange-600 block border-2 leading-[60px] text-center p-2.5 text-[24px] border-dotted border-orange-600 w-[65px] h-[65px] rounded-[999px]" />}
          title={"Refund"}
          text={"Get refund within 3 days!"}
        />
        <Featuer
          icon={<FaPhoneVolume  className="text-orange-600 block border-2 leading-[60px] text-center p-2.5 text-[24px] border-dotted border-orange-600 w-[65px] h-[65px] rounded-[999px]" />}
          title={"24/7 Support"}
          text={"Get support all day"}
        />
      </div>
    </div>
  );
};

export default Featuers;

const Featuer = ({ icon, title, text }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="">{icon}</div>
      <div>
        <h3 className=" mb-1 text-[18px] leading-[22px] font-bold">{title}</h3>
        <p className="mb-0 opacity-[0.75] font-normal leading-[1.8] tracking-[0.1px]">
          {text}
        </p>
      </div>
    </div>
  );
};
