import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ item }) => {
  const dispatch=useDispatch()

  const handleAddItem=(item)=>{
    //dispatch an Action
    item['quantity']=1
    dispatch(addItem(item))
  }
  //   console.log(item);
  const { name, description, price, imageId ,
    defaultPrice
    } = item;
  return (
    <div className="flex justify-between items-center p-4 border-b-2 border-gray-400">
      <div className=" p-4 my-2 text-left w-9/12">
        <h2 className="font-semibold">{name}</h2>
        <span>₹ {price?price / 100:defaultPrice/100}</span>
        <p className="text-sm my-3 text-gray-400 tracking-wider font-thin">
          {description}
        </p>
      </div>
      <div className="w-3/12 flex flex-col items-center relative ">
        <div className="absolute -bottom-1">
          <button onClick={()=>handleAddItem(item)} className="px-3 py-2 bg-white shadow-lg text-xs  rounded font-bold hover:bg-gray-900 hover:text-white">
            Add +
          </button>
        </div>
        {
          <img
            className="object-cover p-2 w-28 h-28 rounded-3xl "
            src={CDN_URL + imageId}
            alt="image"
          />
        }
      </div>
    </div>
  );
};

export default ItemList;
