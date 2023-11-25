import React from "react";
import { useRef } from "react";
import { Button } from "@material-tailwind/react";

function Home() {
  
  const ref = useRef(null);

  const handleScroll =() => {
   ref.current.scrollIntoView ({
    behavior: 'smooth',
   });

  }
  return (
    <>
      <div className="bg-[url('https://thesource.com/wp-content/uploads/2019/01/monsieur-de-chanel-edition-noire-watch-2.jpg')] font-inter h-screen md:h-screen bg-cover sm:w-screen">
        <div className="flex flex-col justify-center  text-center justify-items-center p-12 ">
          <span className="text-7xl font-inter p-24 text-white">
            Welcome to Neel Watch Shop
          </span>
          <div className="space-x-96">
            <a href="/gallery">
              <Button className=" bg-transparent font-inter2 border border-white text-white hover:bg-white hover:text-black relative place-items-center justify-center">
                View Gallery
              </Button>
            </a>
            <a >
              <Button
             onClick={handleScroll}
              className=" bg-transparent border border-white text-white hover:bg-white hover:text-black  relative place-items-center justify-center">
                Read More...
              </Button>
            </a>
          </div>
        </div>
      </div>
      

      
      <div class="bg-gray-200 font-inter pb-6 sm:pb-8 lg:pb-12">
 

  <section ref={ref} class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="mb-8 flex flex-wrap justify-between md:mb-16">
      <div class="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
        <h1 class="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">Find your<br />Watches here</h1>

        <p class="max-w-md leading-relaxed text-gray-700 animate-pulse xl:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares characteristics of real text.</p>
      </div>

      <div class="mb-12 flex w-full md:mb-16 lg:w-2/3">
        <div class="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
          <img src="https://images.unsplash.com/photo-1579481366545-dc09fe648ee1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHdhdGNofGVufDB8fDB8fHww" loading="lazy"  class="h-full w-full object-cover object-center" />
        </div>

        <div class="overflow-hidden rounded-lg mt-2 bg-gray-100 shadow-lg">
          <img src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D" loading="lazy" class="h-full w-full object-cover object-center" />
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center justify-between gap-8 md:flex-row">
      <div class="flex h-12 w-64 divide-x font-inter overflow-hidden rounded-lg bg-gray-900  font-bold">
        <a href="/mens" class="flex w-1/3 items-center justify-center  text-white transition duration-100 hover:bg-gray-100 active:bg-gray-900">Men</a>
        <a href="/womens" class="flex w-1/3 items-center justify-center text-white transition duration-100 hover:bg-gray-100 active:bg-gray-200">Women</a>
        <a href="/kids" class="flex w-1/3 items-center justify-center text-white transition duration-100 hover:bg-gray-100 active:bg-gray-200">Kids</a>
      </div>


      
     
    </div>
  </section>
</div>
    </>
  );
}

export default Home;
