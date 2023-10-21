import React from "react";
import { FaSearch,FaStopwatch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className=' p-1 bg-gray-900 shadow dark:bg-white  '>
      <div className="px-10  flex items-center justify-between bg-transparent">
        <Link to="/">
          <span className="text-sm font-semibold sm:text-xl flex flex-wrap text-black space-x-1">
          <img width="28" height="32" className='mr-1' src="https://img.icons8.com/ios-filled/50/FFFFFF/watches-front-view.png" alt="watches-front-view"/>
            <span className="text-white  text-xl">Neel</span>
            <span className="text-white text-xl">Watch</span>
            <span className="text-white  text-xl">Shop</span>
            
          </span> 
        </Link>
        <form className=" p-1 rounded-lg flex items-center">
          <div className="flex flex-row"> 
            <input  
              type="text"
              placeholder="Search...."
              className="bg-gray-700 text-lg text-white focus:outline-none rounded-lg p-2  text-md w-24  sm:w-64"
            />
            
          </div>
        </form>
        <ul className="flex gap-4 text-white font-semibold ">
          <Link to='/' ><li className="hidden sm:inline hover:underline">Home</li></Link>
          <Link to='/About'><li className="hidden sm:inline hover:underline">About Us</li></Link>
          <Link to='/signin'><li className="hidden sm:inline hover:underline">Sign In</li></Link>
        </ul>
      </div>
    </header>
  );
}
