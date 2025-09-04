import React from "react";

const Inspire = () => {
  return (
    <div className="w-full py-20 md:pl-20  md:mx-auto p-4 flex flex-col md:flex-row items-center justify-between text-left bg-gradient-to-b from-[#E83D04] to-[#A86002]  md:p-10 text-white">
      <div>
        <div>
          <p className="text-slate-200">Trusted by 12k+ Customers</p>
        </div>
        <h1 className="text-3xl md:text-[46px] max-md:mt-3 text-balance md:leading-[60px] max-w-md font-semibold bg-gradient-to-r from-white to-[#CAABFF] text-transparent bg-clip-text">
          Join our newsletter & Stay Updated
        </h1>
      </div>
      <div className="flex items-center gap-2 bg-orange-900 max-md:mt-6 pl-4 h-11 text-sm rounded-full overflow-hidden">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 5.25L9.75675 9.54525C9.52792 9.67816 9.268 9.74817 9.00337 9.74817C8.73875 9.74817 8.47883 9.67816 8.25 9.54525L1.5 5.25"
            stroke="#CAD5E2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 3H3C2.17157 3 1.5 3.67157 1.5 4.5V13.5C1.5 14.3284 2.17157 15 3 15H15C15.8284 15 16.5 14.3284 16.5 13.5V4.5C16.5 3.67157 15.8284 3 15 3Z"
            stroke="#CAD5E2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          type="text"
          placeholder="Enter your email..."
          className="outline-none h-11 bg-transparent"
        />
        <button className="px-6 h-10 mr-1 rounded-full border border-orange-600 bg-white-600">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Inspire;
/*
* Created with https://www.css-gradient.com
* Gradient link: https://www.css-gradient.com/?c1=e83d04&c2=a86002&gt=l&gd=dcr
*/
// background: #E83D04;
// background: linear-gradient(270deg, #E83D04, #A86002);