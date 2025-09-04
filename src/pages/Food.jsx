import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { useParams } from "react-router-dom";
import { food_list } from "../assets/assets";

const Food = () => {
  const [foodItem, setFoodItem] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const item = food_list.find((item) => item._id === id);
    if (item) setFoodItem(item);
  }, [id]);

  console.log(foodItem);

  return (
    <div className="py-20 ">
      <Title title={`${foodItem.name} Details`} />

      <div className="flex flex-col md:flex-row bg-white shadow-lg w-[80%] mx-auto container">
        <img
          className="w-[400px] object-cover"
          src={foodItem.image}
          alt="image"
        />
        <div className="p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium text-slate-800">
              {foodItem.name}
            </h3>
          
          </div>
          <p className="max-w-xs text-sm mt-2 text-slate-500">
            {foodItem.description}
          </p>
          <p className="text-xl font-medium text-slate-800 mt-4">$ {foodItem.price}</p>
         
          <button className="px-12 py-2 bg-orange-600 hover:shadow-lg transition-all text-white mt-6 uppercase">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Food;
