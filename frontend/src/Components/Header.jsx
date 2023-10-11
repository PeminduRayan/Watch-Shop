import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md p-2">
      <div className="px-10 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-sm font-bold sm:text-xl flex flex-wrap space-x-1">
            <span className="text-gray-800  text-xl">Neel</span>
            <span className="text-gray-500 text-xl">Watch</span>
            <span className="text-gray-500  text-xl">Shop</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-2 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search...."
            className=" bg-slate-100 font-mono text-md  focus:outline-none text-md w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600 "/>
        </form>
        <ul className="flex gap-4 font-semibold text-slate-800">
          <Link to='/' ><li className="hidden sm:inline hover:underline">Home</li></Link>
          <Link to='/About'><li className="hidden sm:inline hover:underline">About Us</li></Link>
          <Link to='/sign-in'><li className="hidden sm:inline hover:underline">Sign In</li></Link>
        </ul>
      </div>
    </header>
  );
}
