import React from 'react'
import {useDispatch,useSelector} from "react-redux";
import removeFromCartActionCreator from "../ActionCreators/removeFromCartActionCreator";
import "./Cart.css"

const Cart = () => {
    const cartData=useSelector((storeData)=>{

        return storeData.cart;
     
      });
     
      const dispatch=useDispatch();
     
     const removeFromCart=(id)=>
     {
     
      const filteredCart= cartData.filter((elem)=>{
      return elem.id !=id;
     
     })
     
     dispatch(removeFromCartActionCreator(filteredCart))
     
     
     }

     if (cartData.length === 0) {
      return <div className="cardContainer">

       <div><h1 style={{color:"red"}}>Your Cart is Empty! Please Add Some Product.</h1></div>

      </div>;
    }


     
       return (   

         <div className="cardContainer">
         {
           
           cartData.map((elem)=>{
          return(
   
         <div className="card">
           <h3>{elem.title}</h3>
           <img src={elem.image} alt=""  width={100} height={150}/>
           <span>Price : {elem.price} $</span>
           <button onClick={()=>{
               removeFromCart(elem.id)
           }}>Remove From Cart</button>
   
         </div>
            
          )
   
           })
   
        } 
          
          
         


           
          
     
     
     
         </div>
       )
}

export default Cart