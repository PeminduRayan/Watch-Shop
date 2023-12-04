import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="py-3 bg-gray-900 shadow-xl dark:bg-white dark:text-white font-inter justify-center content-center">
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
        
        <ul className="flex gap-8 text-white font-semibold items-center ">
          <Link to="/">
            <li className="hidden sm:inline hover:underline">Home</li>
          </Link>
          <Link to="/About">
            <li className="hidden sm:inline hover:underline">About Us</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              
              <img
                className="rounded-full xs:rounded-xs justify-center h-10 ml-2 w-10  object-cover sm:rounded-full "
                
                src={currentUser.avatar}
                alt="profile"
              />
              
            ) : (
              <li className=" text-slate-700 hover:underline">Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
