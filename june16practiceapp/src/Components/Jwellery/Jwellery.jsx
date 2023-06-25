import React from 'react';
import { useContext } from 'react';
import {Link,} from "react-router-dom";
import {MyContext} from "../Context/ContextProvider"


import "./Jwellery.css"

const Jwellery = () => {
    const {products}=useContext(MyContext)
    return (
      <div>
      <h2 style={{ color: "red" }}>Jwellery Product</h2>
      <div>
        <ul type="none">
          {products.map((data) => {
  
              if(data.category==="jewelery" )
              {
                  return (
                      <Link style={{ color: "blue" }} to={`/productdetails/${data.id}`}>
                        <li style={{ marginTop: "20px" }}>{data.title}</li>
                      </Link>
                    );
                  
              }
  
          
          })}
        </ul>
      </div>
    </div>
    )
}

export default Jwellery