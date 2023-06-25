import React from 'react'
import { useContext } from 'react';
import { MyContext } from '../Context/ContextProvider';
import { Link } from 'react-router-dom';


const WomensClothing = () => {
    const {products}=useContext(MyContext)
    return (
      <div>
      <h2 style={{ color: "red" }}>Women's Clothing</h2>
      <div>
        <ul type="none">
          {products.map((data) => {
  
              if(data.category==="women's clothing" )
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

export default WomensClothing