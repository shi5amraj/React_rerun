import React from 'react'
import "./Home.css";


import Video from "../../Assets/Videos/pexels-rodnae-productions-7308098 (1080p).mp4"



const Home = () => {
  return (
    <div className="homecontainer">

        <video controls autoPlay muted loop  className='video-player'>
            <source  src={Video}/>
        </video>
         <div className='midDiv'>
            <h1>Welcome To Geekster Mart</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eligendi? Nobis vel eligendi
                 sapiente architecto dignissimos placeat nostrum perferendis. Corrupti excepturi laboriosam 
                 repellendus architecto est obcaecati qui perspiciatis rerum. Optio repellendus, omnis itaque 
                 ipsa ad beatae voluptatibus deleniti repellat eaque corrupti aperiam, sint repudiandae praesentium 
                 expedita, doloremque quasi minima magnam!</p>
            <button>Explore More</button>
         </div>

        </div>
  )
}

export default Home