import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <form className=" flex flex-col space-y-2 m-3 items-center text-center font-inter justify-center">
        <h1 className="text-3xl font-bold font-inter p-3">Profile</h1>
        <img
          src={currentUser.avatar}
          className="rounded-full border-[2px] object-cover border-gray-700 "
        />

        <input
          type="text"
          id="username"
          className="focus:outline-none  w-[400px] border rounded-lg p-3"
          placeholder="User Name"
        />
        <input
          type="email"
          id="email"
          className="focus:outline-none w-[400px] border rounded-lg p-3"
          placeholder="E-mail"
        />
        <input
          type="password"
          id="password"
          className="focus:outline-none w-[400px] border rounded-lg p-3 "
          placeholder="Password"
        />
        <button className="bg-green-700 p-3 w-[400px] rounded-lg text-white hover:bg-red-800  ">
          Update
        </button>

        <span className="flex flex-row w-[400px]">
          <a className="text-red-900 font-medium  text-sm cursor-pointer hover:font-bold flex  text-start ">
            Delete Account
          </a>
          <a className="text-red-900 font-medium  text-sm cursor-pointer hover:font-bold ml-auto">
            Sign Out?
          </a>
        </span>
      </form>

      <div></div>
    </div>
  );
}
