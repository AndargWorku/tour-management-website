import React from 'react'
import Header from "../header/Header"
import Routers from "../../routes/Routers"
import Footer from "../footer/Footer"
const Layout = () => {
  return (
    <>
    <Header/>
    <div>
        <Routers/>
    </div>
    <Footer/>
      
    </>
  )
}

export default Layout
