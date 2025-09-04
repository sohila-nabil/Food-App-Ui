import React from "react";
import { Link } from "react-router-dom";

const FoodItem = ({ img, title, text, price,id }) => {
  return (
    <Link to={`/food/${id}`} className="block">
      <div className="flex flex-col bg-white shadow-md w-64">
        <img className="w-72 h-48 object-cover" src={img} alt="image" />
        <div className="p-4 text-sm">
          <p className="text-slate-600">$ {price}</p>
          <p className="text-slate-800 text-base font-medium my-1.5">{title}</p>
          <p className="text-slate-500">{text} </p>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <button className=" text-slate-600 py-2 border-[1px] border-orange-600 cursor-pointer">
              Add to cart
            </button>
            <button className="bg-orange-600 text-white py-2 cursor-pointer">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FoodItem;
