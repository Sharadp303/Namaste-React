import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const { title, itemCards } = data;
  //   console.log(itemCards);
  const handleClick = () => {
    ///Lifting the state up
    setShowIndex();
  };

  return (
    <div>
      <div
        className="bg-emerald-50 w-7/12 p-4 mx-auto my-1 shadow-lg flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {title}- ({itemCards.length})
        </span>
        <span>⬇</span>
      </div>
      <div className=" w-7/12 mx-auto p-1 ">
        {showItems &&
          itemCards.map((item) => {
            return (
              <ItemList key={item?.card?.info?.id} item={item?.card?.info} />
            );
          })}
      </div>
    </div>
  );
};

export default RestaurantCategory;
