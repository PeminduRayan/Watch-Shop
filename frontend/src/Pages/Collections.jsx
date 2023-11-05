import React from "react";

export default function Collections() {
  return (
    <div class="bg-gray-200 py-6 sm:py-8 lg:py-12 font-inter  items-center justify-center">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8 ">
        <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
          Collections
        </h2>

        <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-2 ">
          <div>
            <a
              href="/Products"
              class="group relative flex h-96 items-end overflow-hidden justify-center rounded-lg bg-gray-100 p-4 shadow-lg"
            >
              <img
                src="https://media.istockphoto.com/id/464973517/photo/time-to-go.jpg?s=612x612&w=0&k=20&c=-1nPCtj56XDekIvqi2U5FodI7KToA75RBpuoc-Ethcc="
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div class="relative flex w-full flex-col rounded-lg bg-gray-200 p-4 text-center">
                <span class="text-lg font-bold text-black lg:text-xl">Men</span>
              </div>
            </a>
          </div>

          <div>
            <a
              href="#"
              class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-cyan-500 p-4 shadow-lg"
            >
              <img
                src="https://media.istockphoto.com/id/972187570/photo/close-up-young-fashion-blogger-wearing-a-floral-jacker-and-a-white-and-golden-analog-wrist.jpg?s=612x612&w=0&k=20&c=HJrSLZQ5yL7hFWNU00ZkfwDzUBi3eipm05S4UtletTA="
                loading="lazy"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div class="relative flex w-full flex-col rounded-lg bg-gray-200 p-4 text-center">
            
                <span class="text-lg font-bold text-black lg:text-xl">
                  Women
                </span>
              </div>
            </a>
          </div>

         

          
        </div>
      </div>
    </div>
  );
}
