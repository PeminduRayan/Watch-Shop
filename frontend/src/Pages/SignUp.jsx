import React from "react";
import { Link } from "react-router-dom";


export default function SignUp() {
  return (
    <div className=' max-w-lg items-center mx-auto'>
      <h1 className="text-3xl font-bold text-center my-7 ">Sign Up</h1>
      <form className="flex flex-col m-2 gap-3 ">
        <input
          type="text"
          className="bg-white p-3 rounded-lg focus:outline-none "
          id="username"
          placeholder="Username"
        />
        
        <input
          type="text"
          className="bg-white p-3 rounded-lg focus:outline-none"
          id="email"
          placeholder="E-mail"
        />
      
        <input
          type="password"
          className="bg-white p-3 rounded-lg focus:outline-none"
          id="password"
          placeholder="Password"
        />
        <button className='bg-slate-700 uppercase rounded-lg p-3 text-white font-semibold hover:opacity-90 disabled:opacity-70'>Sign up</button>
      </form>
      <div className='flex flex-row gap-2 mt-5'>
        <p className='pl-3'>Have an account? </p>
        <Link to='/signin' className='hover:underline text-blue-500 cursor-pointer'><span>Sign in</span></Link>
      </div>
    </div>
  );
}
