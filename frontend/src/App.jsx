import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Header from './Components/Header';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element= {<Home/>}/>
    <Route path='/sign-in' element= {<SignIn/>}/>
    <Route path='/sign-up' element= {<SignUp/>}/>
    <Route path='/about' element= {<About/>}/>
    <Route path='/Profile' element= {<Profile/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App