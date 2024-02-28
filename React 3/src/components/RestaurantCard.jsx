import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resdata }) => {
  // console.log(resdata);
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resdata?.info;

  return (
    <div data-testid="resCard" className="m-4 p-4 w-[260px]  bg-orange-100 rounded-lg hover:bg-orange-300">
      <img
        className="rounded-lg h-48 w-full object-cover "
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="res-image"
      />
      <h3 className="font-bold py-2 text-[16.5px] truncate">{name}</h3>
      <h4 className="text-[14px] mb-6 truncate">{cuisines.join(", ")}</h4>
      <span className="bg-slate-50">{costForTwo}</span>
      <span className="font-semibold ml-28 ">{avgRating}</span>
      <h4 className="text-red-700">{sla.slaString}</h4>
    </div>
  );
};

//Higher order component=>
//input - RestaurantCard ----> enhanced RestaurantCard

export const withPromotedOffer = (RestaurantCard) => {
  return (props) => {
    // console.log(props)
    return (
      <div className="relative">
        <label className="text-white p-1 rounded-lg bg-slate-800  animate-pulse text-sm font-bold absolute left-8 top-[180px]  ">
          {Object.values(props.offer).join(" ")}
        </label>
        <RestaurantCard resdata={props.resdata} />
      </div>
    );
  };
};

export default RestaurantCard;
