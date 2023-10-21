import React from "react";
import {Button} from '@material-tailwind/react'
function Home() {
  return (
    <><div className="bg-home h-screen md:h-screen bg-cover sm:w-screen">
      <div className="flex flex-col justify-center text-center justify-items-center  p-12">
        <span className="text-6xl font-inter p-24 text-white">
          Welcome to Neel Watch Shop
        </span>
        <div className="space-x-36">
          <a href="/gallery">
            <Button className=" bg-transparent border border-white text-white hover:bg-white hover:text-black relative place-items-center justify-center">
              View Gallery
            </Button>
          </a>
          <a href="/about">
            <Button className=" bg-transparent border border-white text-white hover:bg-white hover:text-black  relative place-items-center justify-center">
              Read More...
            </Button>
          </a>
        </div>
      </div>

    </div><span>Home</span></>
  );
}

export default Home;
