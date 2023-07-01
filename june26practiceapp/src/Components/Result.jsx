import React from 'react'
import { useSelector } from 'react-redux'

const Result = () => {

    const data=useSelector((storeData)=>{

     return storeData;
    })

  return (
    <div>
  <h1>Result Component</h1>

  <p> Component 1 data: {data.comp1}</p>
  <p> Component 2 data: {data.comp2}</p>

    </div>
  )
}

export default Result