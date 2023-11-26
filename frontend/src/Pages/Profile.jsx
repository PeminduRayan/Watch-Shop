import React from 'react'
import { useSelector } from 'react-redux'


export default function Profile() {
  const {currentUser} = useSelector(state => state.user);
  return (
    <><div className='text-4xl font-bold  items-center text-center  mt-5 '>Profile</div>
   <div className='grid grid-row-3 rounded-lg space-y-2 p-3 items-center text-center '>
    <img className='  items-center text-center rounded-lg p-3 circle border-gray-400  flex justify-center ' src={currentUser.avatar}/>
    <span>{currentUser.username}</span>
    <span>{currentUser.email}</span>
    <button className='w-64 bg-red-600 rounded-lg text-white font-bold hover:bg-blue-gray-700 p-3'>Update </button>
   </div>
    
    </>
  )
  }
