import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { addItem, clearCart } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch(clearCart);

  const handleCart = () => {
    dispatch(clearCart());
  };
  const addNewItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-center m-2 p-4 ">Cart</h1>
      <div className=" w-7/12 mx-auto p-1 flex justify-center flex-col items-center">
        <div>
          {cartItems.length === 0 ? (
            <h1 className="font-semibold font-mono">
              {" "}
              Cart is Empty - ADD ITEMS TO CART
            </h1>
          ) : (
            <button
              className="p1 border border-black p-2 rounded-lg  "
              onClick={() => handleCart()}
            >
              Clear Cart
            </button>
          )}
        </div>
        <div>
          {cartItems.map((item) => {
            return (
              <div className="flex justify-between items-center p-4 border-b-2 border-gray-400">
                <div className=" p-4 my-2 text-left w-9/12">
                  <h2 className="font-semibold">{item.name}</h2>
                  <span>
                    ₹ {item.price ? item.price / 100 : item.defaultPrice / 100}
                  </span>
                  <p className="text-sm my-3 text-gray-400 tracking-wider font-thin">
                    {item.description}
                  </p>
                </div>
                <div className="">
                  {
                    <img
                      className="object-cover p-2 w-28 h-28 rounded-3xl "
                      src={CDN_URL + item.imageId}
                      alt="image"
                    />
                  }
                  <div className="flex justify-around items-center">
                    <button className="w-6  font-extrabold text-sm border border-black">
                      -
                    </button>
                    <span>
                      {cartItems.filter((ele) => ele === item).length}
                    </span>
                    <button
                      className="w-6 font-extrabold text-sm border border-black "
                      onClick={() => addNewItem(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
