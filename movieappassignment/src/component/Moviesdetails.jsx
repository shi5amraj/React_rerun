import React, { useEffect, useState } from 'react'
import "./detail.css";
import { useParams } from 'react-router-dom'
import { BsFillStarFill } from "react-icons/bs";
import axios from 'axios'
const Moviesdetails = () => {
  const [Detail,SetDetails] = useState([])
    const {id}=useParams();
    console.log(id);
    useEffect(()=>{
        details();
    },[])
    console.log(Detail);
const url =`https://api.themoviedb.org/3/movie/${id}?api_key=242efbc4712f4c03c1e8c51afa2afe05`
    const details = async () => {
        try {
          const response = await axios.get(url);
    
          console.log(response.data);
    
       SetDetails(response.data);
        } catch (err) {
          console.log(err.message);
        }
      };
      const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    return (
        <div className='detailsmain'>
            <div className="insidemain">
            <div style={{backgroundImage:`url(${IMGPATH +Detail.poster_path})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:"7px"}} className="imgleft">
                  
            </div>
            <div key={[Detail.id]} className="content">
            <div className="insideContent">
{/* {
  Detail.map((data)=>( */}
        <>
        
          <div style={{display:'flex',justifyContent:'space-around'}} className="first">
          <div style={{display:"flex",justifyContent:'center',flexDirection:'column'}} className="para">
            <h1 style={{fontSize:"30px",textAlign:"justify",color:"white"}}>{[Detail.original_title]}</h1>
            <div className='adult' style={{display:"flex"}}>
            <p>2018</p> &nbsp; | &nbsp;<p>{[Detail.release_date]}</p> &nbsp;|&nbsp;<p>16+</p>
            </div>
            
            </div>
            <BsFillStarFill   style={{color:' rgb(236, 194, 11)',fontSize:"30px",marginTop:"15px",marginLeft:"200px"}}/><p style={{marginTop:"15px",marginRight:"50px",fontSize:"20px",color:"white"}}>{[Detail.vote_average]}</p>
            </div>
            <div className="Title">
              <p  >{[Detail.overview]}</p>
            </div>
             <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",marginTop:"5px"}} className="release">
              <p>Status:&nbsp; &nbsp;&nbsp;<span style={{fontSize:"25px",fontWeight:"600"}}>{[Detail.status]}</span></p>
              <p>Created By:&nbsp; &nbsp;&nbsp;<span style={{fontSize:"25px",fontWeight:"600"}}>{[Detail.tagline]}</span></p>
              <br />
              <p>Title:&nbsp; &nbsp;&nbsp;<span style={{fontSize:"25px",fontWeight:"600"}}>{[Detail.title]}</span></p>
              {/* {console.log(Detail.genres[4].name)} */}
              <br />
              <p >Language:&nbsp; &nbsp;&nbsp;<span style={{fontSize:"25px",fontWeight:"600"}}>{[Detail.original_language]}</span></p>
             </div>
             </>
       
 
    {/* ))
} */}
</div>       
</div>       
            </div>
        </div>
    )
}

export default Moviesdetails