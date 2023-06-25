import React from 'react'
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../Context/ContextProvider';

import "./Productdet.css"

const ProductDetails = () => {
const navigate=useNavigate();
const {id}= useParams();
const {products,setCart,cart}= useContext(MyContext);


const addtoCart=(product)=>
{
   console.log(product)
    setCart([...cart,product]);
   

}





return(
    <div>

{
    products.map((elem)=>{
        
       if(elem.id==id)
       {
        
        return (
            <div className="productdetails">
              <h2>{elem.category.toUpperCase()}</h2>
              <img src={elem.image} width={300} height={300} />
              <br />
              <br/>
              <span>Price: {elem.price} $</span>
              <br />
              <br/>
              <div className="btnDiv">
              <button
                onClick={() => {
                  navigate("/products");
                }}
              >
                Go back to Products
              </button> 
              <button onClick={()=>
                {    
                    addtoCart(elem);
                }}>Add to Cart</button>

              </div>
             

            </div>
          )

       }

    })
}



    </div>
)
  
}

export default ProductDetails