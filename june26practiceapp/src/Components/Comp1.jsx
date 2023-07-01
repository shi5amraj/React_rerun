import React from 'react'
import { useState } from 'react';
import myreduxStore from "./Store/Store"

const Comp1 = () => {

   const [state,setState]= useState("");

   const submitTask=()=>{
   
    let myaction={

        type:"comp1Data",
        payload:state
    }
   myreduxStore.dispatch(myaction);

   }


  return (
    <div>
        
  <input type="text" name="" id="" onChange={(event)=>{setState(event.target.value)}} /> &nbsp; &nbsp;
  <button onClick={submitTask} >Add Text</button>

    </div>
  )
}

export default Comp1