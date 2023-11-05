import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {

  const currentUser = useSelector((state) => {  user : state.user})

  return (
    <header className=" p-1 bg-gray-900 shadow dark:bg-white font-inter">
      <div className="px-10 flex items-center justify-between ">
        <Link to="/">
          <span className="text-sm font-semibold sm:text-sm flex flex-wrap text-black space-x-1">
            <img
              width="28"
              height="28"
              className=""
              src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/applewatch/watchos-10-series-8-gps-cellular-disconnected-status.png"
              alt="watches-front-view"
            />
            <span className="text-white text-xl">Neel</span>
            <span className="text-white text-xl">Watch</span>
            <span className="text-white  text-xl">Shop</span>
          </span>
        </Link>
        <form className=" p-1 font-inter rounded-lg flex items-center">
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Search...."
              className="bg-gray-700 text-lg text-white focus:outline-none rounded-lg p-2  text-md w-24  sm:w-64"
            />
          </div>
        </form>
        <ul className="flex gap-4 text-white font-semibold ">
          <Link to="/">
            <li className="hidden sm:inline hover:underline">Home</li>
          </Link>
          <Link to="/About">
            <li className="hidden sm:inline hover:underline">About Us</li>
          </Link>
         
          <Link to='/signin'>
            {currentUser ? 
            (
           <span>{currentUser.avatar}</span>
            ) 
            : 
            ( 
            <li className="text-white hover:underline">Sign In</li>
            )}
          
          </Link>
        
        </ul>
      </div>
    </header>
  );
}
