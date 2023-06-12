import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import "./Products.css"


function Products()
{   
    const [products,setProducts]=useState([]);
    const [productName,setProductName]=useState("");
    const [productCat,setProductCat]=useState("");
    const [productDesc,setProductDesc]=useState("");
    const [productPrice,setProductPrice]=useState("");


      let sr=1;

    


    useEffect(()=>{

        axios.get("https://fakestoreapi.com/products?limit=10").then((resp)=>{
                console.log(resp.data)
                setProducts(resp.data);


        }).catch(()=>
        {
         alert("s couldn't fetch");

        })

    },[])


    const addProduct=()=>
    {
     let val=
     {
      "title":productName,
      "description":productDesc,
      "category":productCat,
      "price":productPrice

     }
     try
     {
        //setProducts(...products,val)

        console.log(products)
     }
     catch{
        alert("product not added")
     }
    
     

    }

    return(
  <>
  <div className="productform" >
      <input type="text" name="" id="" placeholder="Enter Product Name" onChange={(e)=>{setProductName(e.target.value)}} />
      <input type="text" name="" id="" placeholder="Enter Product Catagory" onChange={(e)=>{setProductCat(e.target.value)} }/>
      <input type="text" name="" id="" placeholder="Enter Product Description" onChange={(e)=>{setProductDesc(e.target.value)}} />
      <input type="text" name="" id="" placeholder="Enter Product Price" onChange={(e)=>{setProductPrice(e.target.value)}}/>
      <button onClick={(addProduct)}>Add Product</button>


  </div>

  <table width="90%" frame="box" rules="all" style={{margin:"20px auto "}}>

    <thead style={{color:"white",backgroundColor:"black"}}>
     <tr>
        <td>Serial No.</td>
        <td>Product Name</td>
        <td>Catagory</td>
        <td>Description </td>
        <td>Price</td>
        
     </tr>

    </thead>

    <tbody>
     {

products.map((elem)=>{
   

  return(
   
    <tr>
        <td>{sr++}</td>
        <td>{elem.title}</td>
        <td>{elem.category}</td>
        <td>{elem.description}</td>
        <td>{elem.price}</td>
    </tr>
    
  )
  

})
     }
  

    </tbody>



  </table>
  </>

    )


}

export default Products;