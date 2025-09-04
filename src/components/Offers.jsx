import React from "react";
import Title from "./Title";
import { food_list } from "../assets/assets";
import FoodItem from "./FoodItem";
import { Link } from "react-router-dom";
const Offers = () => {
  const [offers, setOffers] = React.useState(food_list);
  return (
    <div className="py-20">
      <Title
        yes={true}
        title="Special Offers"
        text="Lorem ipsum dolor sit amet, consectetur ex ea commodo consequat."
      />

      <div className="flex items-center gap-7 container w-[80%] mx-auto flex-col lg:flex-row">
        {offers.slice(0, 4).map((offer) => (
          <Offer
            id={offer._id}
            key={offer.id}
            img={offer.image}
            title={offer.name}
            text={offer.description}
            price={offer.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Offers;

const Offer = ({ img, title, text, price, id }) => {
  return (
    <Link to={`/food/${id}`} className="block">
      <div className="flex flex-col bg-white shadow-md w-64">
        <p className=" absolute bg-orange-600 text-white p-2">15% OFF</p>
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
