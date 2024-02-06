import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filList, setFilList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  
  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false){
    return (
      <h1>Looks like you are Offline !! Plese check your internet connection</h1>
    )
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              placeholder="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              onClick={() => {
                const filterRest = resList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                // console.log(filterRest);
                setFilList(filterRest);
              }}
            >
              Search
            </button>
          </div>
          <button
            onClick={() => {
              const filterRes = resList.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilList(filterRes);
            }}
          >
            Top rated Restaurants
          </button>
        </div>

        <div className="res-container">
          {filList.map((restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={`restaurants/${restaurant.info.id}`}
              >
                <RestaurantCard resdata={restaurant} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
