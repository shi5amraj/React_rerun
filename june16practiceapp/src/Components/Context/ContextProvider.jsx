import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';


 export const MyContext=createContext();
 

 const ContextProvider = ({children}) => {

    const [products,setProducts]=useState([]);

    const[cart,setCart]=useState([]);
  return (
    <MyContext.Provider value={{products,setProducts,cart,setCart}}>
     {children}
    </MyContext.Provider>
  );
}
export default ContextProvider;
