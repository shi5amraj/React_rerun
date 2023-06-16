import {useEffect} from "react";

import axios from "axios";
import { useState } from "react";
import "./Product.css"


function Cart()
{
    const [data,setData]=useState([]);
  useEffect(()=>
  {
    axios.get("http://localhost:5002/cart").then((res)=>{

    setData(res.data)

    }).catch(()=>
    {

        alert("Can't fetch")
    })

  },[])



    return(

        <div className="prdoduct"> 
     {


data.map((elem)=>{
    return(
      <div className="ProductCard">
      <img src={elem.image} alt=""  width={100} height={100}/>
      <span>{elem.category}</span>
      <span>{elem.description
}</span>
      <span>{elem.price}</span>

      <button >Remove</button>
      </div>

    )


  })
}


        </div>
        
        
       
    

       
       
    )
}

export default Cart