import React from 'react'
import { useSelector } from 'react-redux'


export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
    <div className='items-center border-black-[10px]  m-auto text-center  w-fit justify-center flex flex-col'>
    <div className='text-4xl font-bold   items-center text-center  mt-5 '>Profile</div>
   <div className='flex flex-col rounded-lg space-y-2 py-3 gap-4 items-center text-center '>
    <img className=' flex rounded-full  items-center text-center  p-3 circle border-gray-400 justify-center ' src={currentUser.avatar}/>
    <span>{currentUser.username}</span>
    <span>{currentUser.email}</span>
    

    <button className='w-64 bg-red-600 rounded-lg text-white font-bold hover:bg-blue-gray-700 p-3'>Update </button>
   </div>
   </div>
    </>
  )
  }
