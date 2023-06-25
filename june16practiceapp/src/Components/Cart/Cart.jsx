import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../Context/ContextProvider';
import "./Cart.css"

const Cart = () => {

const {cart,setCart}= useContext(MyContext);

const removeFromCart=(id)=>
{

 const filteredCart= cart.filter((elem)=>{
 return elem.id !=id;

})
setCart(filteredCart);


}

  return (
    <div className="cardContainer">
      
     {
        cart.map((elem)=>{
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