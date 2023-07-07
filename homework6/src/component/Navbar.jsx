import React from 'react'
import './navbar.css'
import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='main'>
      <div className="first same"><h1 >Kumar Shivam</h1></div>
      <div className="middle same"><ul>
        <li style={{color:"blue"}}>Home</li>
        <li>About</li>
        <li>Contact</li>
        </ul></div>
      <div className=" Last same">
        <FaFacebookF className=' samefont fontfirst'/>
        <FaTwitter className='samefont fontsecond'/>
        <FaInstagram className=' samefont fontthird'/>
      </div>
    </div>
  )
}

export default Navbar