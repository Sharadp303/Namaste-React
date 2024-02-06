import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resdata }) => {
  // console.log(resdata.info);
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo,sla } =
    resdata?.info;

 
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="res-image"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <span>{avgRating}</span>
      <span>{costForTwo}</span>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
