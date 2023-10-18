import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='bg-gray-200 shadow-xl p-3'>
      <div className="px-10  flex items-center justify-between">
        <Link to="/">
          <h1 className="text-sm font-bold sm:text-xl flex flex-wrap text-black space-x-1">
            <span className="text-zinc-950 uppercase text-xl">Neel</span>
            <span className="text-gray-700  text-xl">Watch</span>
            <span className="text-gray-800  text-xl">Shop</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-1 rounded-lg flex items-center">
          <div className="flex flex-row"> 
            <input  
              type="text"
              placeholder="Search...."
              className=" bg-slate-100 text-lg focus:outline-none rounded-lg p-2  text-md w-24  sm:w-64"
            />
            <FaSearch className=" absolute text-slate-600 flex ml-60 my-3"/>
          </div>
        </form>
        <ul className="flex gap-4 font-semibold text-slate-800">
          <Link to='/' ><li className="hidden sm:inline hover:underline">Home</li></Link>
          <Link to='/About'><li className="hidden sm:inline hover:underline">About Us</li></Link>
          <Link to='/signin'><li className="hidden sm:inline hover:underline">Sign In</li></Link>
        </ul>
      </div>
    </header>
  );
}
