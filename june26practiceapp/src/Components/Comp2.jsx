import React from 'react'
import { useState } from 'react';
import myreduxStore from "./Store/Store";
import { useDispatch } from 'react-redux';

const Comp2 = () => {

    const [state,setState]=useState("");

    const dispatch= useDispatch();

    const submitTask=()=>
    {

    let myActionObj={
      type:"comp2Data",
      payload:state

    }

    dispatch(myActionObj)

    }

  return (
    <div>
<input type="text" name="" id="" onChange={(event)=>{setState(event.target.value)}} /> &nbsp; &nbsp;
  <button onClick={submitTask}>Add Text</button>
    </div>
  )
}

export default Comp2