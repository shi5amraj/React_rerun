
import {useEffect} from "react";

import axios from "axios";
import { useState } from "react";
import "./Product.css"

function Product()
{

    const [data,setData]=useState([]);

  useEffect(()=>{
   axios.get("http://localhost:5002/data").then((resp)=>{

       console.log(resp.data);

       setData(resp.data);

   }).catch(()=>
   {
  alert("coudnt fetch data from server")

   })

  },[])


  const adddata=(id)=>
  {
   data.map((elem)=>
   {
    if(elem.id===id)
    {
     axios.post("http://localhost:5002/cart",elem).then(()=>
     {
        alert("product added successfully")
     }).catch(()=>
     {
        alert("can't add product")
     })
    }

   })



  }


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

      <button onClick={()=>{adddata(elem.id)}}>Add to cart</button>
      </div>

    )


  })
}


        </div>
        
        
       
    

       
       
    )
}

export default Product