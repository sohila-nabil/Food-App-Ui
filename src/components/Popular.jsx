import React from "react";
import Title from "./Title";
import { food_list } from "../assets/assets";
import FoodItem from "./FoodItem";
import { Link } from "react-router-dom";
const Popular = () => {
  const [offers, setOffers] = React.useState(food_list);
  return (
    <div className="py-20 relative">
      <Title
        yes={true}
        title="Popular Foods"
        text="Lorem ipsum dolor sit amet, consectetur ex ea commodo consequat."
      />
      <Link
        to={"/shop"}
        className=" absolute w-fit top-[12%] lg:top-[32%] right-[18%] md:right-[32%] lg:right-[8%] text-orange-600 border-[1px] border-orange-600 px-2.5 py-1 rounded-[20px] hover:text-white hover:bg-orange-600 transition-all duration-300 cursor-pointer"
      >
        See More
      </Link>
      <div className="flex items-center gap-7  container w-[80%] mx-auto flex-col lg:flex-row">
        {offers.slice(0, 4).map((offer) => (
          <FoodItem
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

export default Popular;
