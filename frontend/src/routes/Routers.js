import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import Home from "../pages/Home"
import Tours from "../pages/Tours"
import TourDetails from "../pages/TourDetails";
import SearchResultList from "../pages/SearchResultList"
import Login from "../pages/Login"
import Register from "../pages/Register"
import About from "../pages/About"
import ThankYou from "../pages/ThankYou"
const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/tours" element={<Tours/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/tours/:id" element={<TourDetails/>}/>
        <Route path="/thank-you" element={<ThankYou/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/tours/search" element={<SearchResultList/>}/>
      
    </Routes>
  )
}

export default Routers
