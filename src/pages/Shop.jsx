import React from "react";
import { food_list, menu_list } from "../assets/assets";
import FoodItem from "../components/FoodItem";
import DropMenu from "../components/DropMenu";
const Shop = () => {
  const [list, setList] = React.useState(menu_list);
  const [foods, setFoods] = React.useState([]);
  const [cat, setCat] = React.useState("All");
  console.log(cat);

  React.useEffect(() => {
    if (cat === "All") {
      setFoods(food_list);
    } else {
      setFoods(() => food_list.filter((item) => item.category === cat));
    }
  }, [cat]);

  return (
    <div className=" container mx-auto py-20 w-full">
      <div className="flex flex-col  lg:flex-row lg:items-start items-center gap-11">
        {/*left */}
        {list.length > 0 && (
          <div className="w-48 border-gray-300/30  border hidden lg:block">
            <h1 className="text-2xl font-semibold mb-5  text-center">
              Categories
            </h1>
            <ul className="flex flex-col gap-1">
              {list.map((item, index) => (
                <li
                  onClick={() => setCat(item.menu_name)}
                  key={index}
                  className={`border text-center border-gray-300/30 p-2 cursor-pointer hover:bg-orange-600 hover:text-white transition-all duration-300 ${
                    cat === item.menu_name && "bg-orange-600 text-white"
                  }`}
                >
                  {item.menu_name}
                </li>
              ))}
            </ul>
          </div>
        )}


        <DropMenu cat={cat} setCat={setCat}/>

        {/* right */}

        <div className="flex items-center justify-center flex-wrap flex-1 gap-5">
          {foods.length > 0 &&
            foods.map((food) => (
              <FoodItem
                key={food.id}
                img={food.image}
                title={food.name}
                text={food.description}
                price={food.price}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
