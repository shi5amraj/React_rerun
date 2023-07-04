import React from 'react';

import {Link} from "react-router-dom";

import "./NavBar.css"

const Navbar = () => {
  return (
    <div className='navContainer'>
        <div className='title'>
        <h2>GeeksterMart</h2> 
        </div>
        <div className='itemContainer'>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          {/* <Link to="/contactus">ContactUs</Link> */}
         

        </div>

    </div>
  )
}

export default Navbar