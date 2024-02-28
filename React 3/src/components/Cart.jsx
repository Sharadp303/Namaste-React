import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import {
  addItem,
  clearCart,
  removeItem,
  selectTotalPrice,
} from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(clearCart());
  };
  const addNewItem = (item) => {
    dispatch(addItem(item));
  };
  const removeCartItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-center my-2 p-4 ">Cart</h1>
      <div className=" w-7/12 bg  mx-auto text-center">
        {cartItems.length === 0 ? (
          <h1 className="font-semibold font-mono">
            Cart is Empty - ADD ITEMS TO CART
          </h1>
        ) : (
          <div className="flex justify-between p-1">
            <button
              className="p1 border border-black mx-5 p-3 rounded-lg  "
              onClick={() => handleCart()}
            >
              Clear Cart
            </button>
            <h1 className=" mx-5  p-3 font-bold">Total : {totalPrice}</h1>
          </div>
        )}
      </div>
      <div className="w-7/12 mx-auto p-1 flex justify-center flex-col items-center">
        <div>
          {cartItems.map((item) => {
            return (
              <div
                data-testid='cartItem'
                key={item.id}
                className="flex justify-between items-center p-4 border-b-2 border-gray-400"
              >
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
                    <button
                      className="w-6  font-extrabold text-sm border border-black"
                      onClick={() => removeCartItem(item)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
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
