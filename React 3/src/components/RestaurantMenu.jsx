import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo=useRestaurantMenu(resId)
 

  if (resInfo === null) {
    return <Shimmer />;
  }
  // console.log(resInfo?.cards[0]?.card?.card?.info.name);
  const { name, areaName, avgRatingString, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(itemCards);
  return (
    <div>
      <h1>{name}</h1>
      <p>{areaName}</p>
      <span>{cuisines.join(" , ")}</span>
      <span>
        {" *"}
        {avgRatingString}
      </span>
      <h2>Menu</h2>
      <ul>
        {itemCards && Array.isArray(itemCards) && itemCards.map((item) => {
          return (
            <>
              <li key={item.card.info.name}>
                {" "}
                {item.card.info.name} - {" Rs -"}
                {item.card.info.defaultPrice/100}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
