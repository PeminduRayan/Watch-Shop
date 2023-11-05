import React from 'react'

export default function Footer() {
  return (
    
<footer class="bg-gray-900 shadow font-inter dark:bg-white">
    <div class="w-full max-w-screen-xl mx-auto  md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0">
            <img width="32" height="32" className='mr-2' src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/applewatch/watchos-10-series-8-gps-cellular-disconnected-status.png" alt="watches-front-view"/>
                <span class="self-center pt-1 text-2xl font-semibold whitespace-nowrap text-white dark:text-white">Neel Watch Shop</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-d font-medium text-white sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/about" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                
                <li>
                    <a href="/contact" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-white sm:text-center dark:text-gray-400">© 2023 . All Rights Reserved.</span>
    </div>
</footer>


  )
}


