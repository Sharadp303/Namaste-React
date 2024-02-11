import React, { useContext, useEffect, useState } from "react";
import RestaurantCard ,{withPromotedOffer} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useHomeQuery } from "../utils/apiSlice.js";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filList, setFilList] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  const {loggedInUser,setUserName}=useContext(UserContext)

  const RestaurantCardPromoted=withPromotedOffer(RestaurantCard)

  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // console.log(resList.length);
  if(resList.length === 0){
   return <Shimmer />
}
  
  if (onlineStatus === false) {
    return (
      <h1 className="text-center text-lg p-5 text-red-600">
        Looks like you are Offline !! Plese check your internet connection
      </h1>
    );
  }


  return   (
    <>
      <div className="body">
        <div className="flex items-center">
          <div className="search m-4 p-4 ml-28">
            <input
              className="border border-solid border-black p-1 rounded-sm font-light"
              type="text"
              placeholder="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="py-2 px-4 ml-4 bg-green-300 font-bold rounded hover:bg-slate-800 hover:text-green-400 "
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
          <div className=" m-4 p-4">
            <button
              className="px-4 py-2 bg-slate-800 text-green-400 rounded-lg  hover:bg-slate-800 hover:text-white"
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
          <div>
            <label >UserName</label>
            <input type="text" className="border border-black p-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
          </div>
        </div>

        <div className="flex flex-wrap mx-36">
          {filList.map((restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={`restaurants/${restaurant.info.id}`}
              >
               
                {/* If the restaurant is avglist */
                restaurant.info.
                aggregatedDiscountInfoV3?
                 (<RestaurantCardPromoted resdata={restaurant} offer={restaurant.info.
                  aggregatedDiscountInfoV3}/>) :(<RestaurantCard resdata={restaurant} />)
                }
                
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
