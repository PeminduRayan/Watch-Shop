import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";


export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData, //to keep the previous data in place
      [e.target.id]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // To not refresh the page when we submitting
    try {
      setLoading(true);
      //From here we use fetch method to send data to the api/server
      const res = await fetch('/api/auth/signin',
      {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(formData),
      });
   
      const data = await res.json();
      if(data.success == false){ //methana success eka gatte api wla index.js wla tiyena error enawda nedd kiyana eka matha
       setErrors(data.errors);
       setLoading(false);
       console.log(data);
      return;  
      
    } 
    setLoading(false);
    setErrors(null);
    navigate('/');
  }
    catch (error) {
      setLoading(false);
      setErrors(error.message);
    }
    };
  
   //console.log(formData);

  return (
    <><div className=" max-w-lg items-center mx-auto h-96">
      <h1 className="text-3xl font-bold text-center my-7 ">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col m-2 gap-3 ">
        <input
          type="text"
          className="bg-gray-700 text-white p-3 rounded-lg focus:outline-none"
          id="email"
          placeholder="E-mail"
          onChange={handleChange} />
        <input
          type="password"
          className="bg-gray-700 text-white p-3 rounded-lg focus:outline-none"
          id="password"
          placeholder="Password"
          onChange={handleChange} />
        <button disabled={loading} className="bg-black uppercase rounded-lg p-3 text-white font-semibold hover:opacity-90 disabled:opacity-70">
          {loading ? 'Loading...' : 'Sign in'}
        </button>
      </form>
      <div className="flex flex-row gap-2 mt-5">
        <p className="pl-3">Don't Have an account? </p>
        <Link
          to="/signup"
          className="hover:underline text-blue-500 cursor-pointer"
        >
          <span>Sign up</span>
        </Link>
      </div>
      {errors && <p className ="text-red-500 mt-5">{errors}</p>}
    </div></>
  );
}
