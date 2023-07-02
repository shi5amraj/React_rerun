import React from 'react';

import {Link} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"; 

import "./NavBar.css"

const Navbar = () => {


  const dispatch=useDispatch();

  const toggleData=useSelector((storedData)=>{

    return storedData;
  })


const changeTheme=()=>
{

dispatch(
  {
    type:"toggle",
    payload:!toggleData
  }
);


}

  return (
    <div className='navContainer'>
        <div className='title'>
        <h2>Geekster</h2> 
        </div>
        <div className='itemContainer'>
          <Link to="/">Home</Link>
          <Link to="/service">Services</Link>
          <Link to="/contact">Contact</Link>
          {/* <Link to="/contactus">ContactUs</Link> */}

          <button onClick={changeTheme}>Toggle Theme to {(toggleData==false)?"Light":"Dark"}</button>
         

        </div>

    </div>
  )
}

export default Navbar