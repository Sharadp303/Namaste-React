import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  //Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-around flex-wrap bg-pink-200 shadow-lg sm:bg-gray-100">
      <div className="logo-container">
        <Link to="/">
          <img
            className="w-36 mix-blend-exclusion object-cover"
            src={LOGO_URL}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex">
        <ul className="flex flex-wrap p-4 items-center text-lg font-bold">
          <li className="px-4">Online Status :{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 hover:text-blue-900 hover:border rounded">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-blue-900 hover:border rounded">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 hover:text-blue-900 hover:border rounded">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4 hover:text-blue-900 hover:border rounded">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:text-blue-900 hover:border rounded">
            <Link to="/cart">
              Cart
              <span className="text-xs text-white font-bold bg-emerald-500 rounded-full p-1 relative -top-3 ">
                {cartItems.reduce((quantity,item)=>{
                  return quantity+=item.quantity
                },0)}
              </span>
            </Link>
          </li>
          {loggedInUser ? (
            <button
              className="px-4 py-2 ml-2 border border-solid rounded font-bold border-black hover:bg-slate-50"
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
          ) : (
            <li className="px-4">{loggedInUser}</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
