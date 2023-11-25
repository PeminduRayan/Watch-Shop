import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import Mens from './Pages/Categories/Mens';
import Kids from './Pages/Categories/Kids';
import Womens from './Pages/Categories/Womens';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element= {<Home/>}/>
    <Route path='/signin' element= {<SignIn/>}/>
    <Route path='/signup' element= {<SignUp/>}/>
    <Route path='/about' element= {<About/>}/>
    <Route path='/profile' element= {<Profile/>}/>
    <Route path='/gallery' element= {<Gallery/>}/>
    <Route path='/contact' element= {<Contact/>}/>
    <Route path='/Products' element= {<Products/>}/>
    <Route path='/mens' element= {<Mens/>}/>
    <Route path='/kids' element= {<Kids/>}/>
    <Route path='/womens' element= {<Womens/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App