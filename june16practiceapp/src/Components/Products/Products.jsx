import React from 'react';
import "./Products.css";
import {Link,Outlet} from "react-router-dom";
import { useEffect } from 'react';
import axios from "axios";
import { useContext } from 'react';
import {MyContext} from "../Context/ContextProvider";

const Products = () => {

     const {setProducts}=useContext(MyContext);
     

   useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
    setProducts(res.data)
   
       

    }).catch(()=>{
        alert("Couldn't get products")
    })


   },[])

  return (
    <div className='productsContainer'>

<div className="productCategories">
        <Link to="electronic">Electronic</Link>
        <Link to="jewelery">Jewelery</Link>
        <Link to="mensclothing">Men'sClothing</Link>
        <Link to="womensclothing">Women'sClothing</Link>
      </div>
      <div className="categoryComponent">
        <Outlet />
      </div>
    </div>
  )
}

export default Products


      