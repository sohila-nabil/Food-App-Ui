import React from 'react'

const Title = ({title,text,yes}) => {
  return (
    <div className=" mb-20 text-center">
      <h3 className=" text-[40px] font-bold leading-[2.25rem] pb-[15px] after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:mx-auto after:w-[50px] after:h-[2px] after:bg-orange-600 relative inline-block">
        {yes && <span className=" text-orange-600 ">Our</span>} {title}
      </h3>
      <p className="text-gray-500 w-[350px] text-[15px] mt-2.5 mx-auto leading-[1.8]">
        {text}
      </p>
    </div>
  );
}

export default Title
