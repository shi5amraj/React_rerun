import React from 'react'
import { useEffect } from 'react';

import axios from "axios";

import {useDispatch,useSelector} from "react-redux";


import "./Products.css"
import productActionCreator from '../ActionCreators/productActionCreator';
import cartActionCreator from '../ActionCreators/cartActionCreator';

import {Link, useNavigate} from "react-router-dom";

const Products = () => {

    const dispatch= useDispatch();
    const navigate= useNavigate();

    const myProductData= useSelector((storeData)=>{

       return storeData.products;

    })

      

  useEffect(()=>{

    if(!myProductData.length>0)
    {
      
        axios.get("https://fakestoreapi.com/products").then((resp)=>{

            dispatch(productActionCreator(resp.data));
       
           }).catch(()=>{
       
         alert("Couldn't fetch Product Data");
       
           })
       

    } 
  },[]);

  const addToCart=(product)=>
  {

    try{
      dispatch(cartActionCreator(product));
      alert("Product added to Cart")

    }
    catch {

    alert("Couldn't Add Produt to cart")
    }
  }





    return (
        <div className='productcomp'>
            <h1>Buy Your Favourite Products</h1>
            <div className='cardContainer'>


        {
        myProductData.map((elem)=>{

           

          return(
            <div className='cardDiv'>
                    <div className='leftDiv'>
                        <img src={elem.image} alt="Product Image" />
                    </div>
                    <div className='line'></div>
                    <div className='rightDiv'>
                       <span className='catagory'>{elem.category.toUpperCase()}</span>
                        <span className='title'>{elem.title}</span>
                        <div>
                        <span className='price'>Price : {elem.price} $</span>
                        {/* <p className='ratingPara' > Rating:  {elem.rating.rate} <span className='gold-stars'> &#9733;</span> ({ elem.rating.count } People Rated)</p> */}
                        <p className='ratingPara' > Rating:  {(elem.rating.rate<2) ?  <span className='red-stars'>{elem.rating.rate}  &#9733;</span> : (elem.rating.rate>2 && elem.rating.rate<3.5 ) ?<span className='gold-stars'>{elem.rating.rate} &#9733;</span> : <span className='green-stars'> {elem.rating.rate} &#9733;</span> } ({ elem.rating.count } People Rated)</p>
                        </div>
                        
                        <div className='btnDiv'>
                            {/* <Link to={`/productdetails/${elem.id}`}><button className='btn'>View Details</button></Link> */}
                            <button onClick={()=>{navigate(`/productdetails/${elem.id}`)}} className='btn'>View Details</button>
                            <button onClick={()=>{addToCart(elem)}}>Add To Cart</button>
                        </div>

                    </div>

                </div>




          )




        })



        }



            </div>











        </div>
    )
}

export default Products