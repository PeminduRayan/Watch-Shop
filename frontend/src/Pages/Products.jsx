import React from "react";

export default function Products() {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="mb-10 md:mb-16">
          <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Selected
          </h2>

          <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div>
            <a
              href="#"
              class="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100"
            >
              <img
                src="https://www.wadesilva.com/eshop/wp-content/uploads/2021/11/Rado-True-R27056162_950.jpg"
                loading="lazy"
                
                class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div class="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
              <div class="flex flex-col">
                <a
                  href="#"
                  class="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg"
                >
                  Rado - Switzerland 
                </a>
                <span class="text-sm text-gray-500 lg:text-base">
                RADO TRUE AUTOMATIC
                </span>
              </div>

              <div class="flex flex-col items-end">
                <span class="font-bold text-gray-600 lg:text-lg">Rs. 617,100</span>

              </div>
            </div>
          </div>

          <div>
            <a
              href="#"
              class="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100"
            >
              <img
                src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                loading="lazy"
                alt="Photo by Nick Karvounis"
                class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div class="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
              <div class="flex flex-col">
                <a
                  href="#"
                  class="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg"
                >
                  Cool Outfit
                </a>
                <span class="text-sm text-gray-500 lg:text-base">
                  by Cool Brand
                </span>
              </div>

              <div class="flex flex-col items-end">
                <span class="font-bold text-gray-600 lg:text-lg">$29.99</span>
              </div>
            </div>
          </div>

          <div>
            <a
              href="#"
              class="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100"
            >
              <img
                src="https://images.unsplash.com/photo-1548286978-f218023f8d18?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                loading="lazy"
                alt="Photo by Austin Wade"
                class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div class="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
              <div class="flex flex-col">
                <a
                  href="#"
                  class="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg"
                >
                  Nice Outfit
                </a>
                <span class="text-sm text-gray-500 lg:text-base">
                  by Nice Brand
                </span>
              </div>

              <div class="flex flex-col items-end">
                <span class="font-bold text-gray-600 lg:text-lg">$35.00</span>
              </div>
            </div>
          </div>

          <div>
            <a
              href="#"
              class="group relative block h-96 overflow-hidden rounded-t-lg bg-gray-100"
            >
              <img
                src="https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                loading="lazy"
                alt="Photo by Vladimir Fedotov"
                class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div class="flex items-start justify-between gap-2 rounded-b-lg bg-gray-100 p-4">
              <div class="flex flex-col">
                <a
                  href="#"
                  class="font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-lg"
                >
                  Lavish Outfit
                </a>
                <span class="text-sm text-gray-500 lg:text-base">
                  by Lavish Brand
                </span>
              </div>

              <div class="flex flex-col items-end">
                <span class="font-bold text-gray-600 lg:text-lg">$49.99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
