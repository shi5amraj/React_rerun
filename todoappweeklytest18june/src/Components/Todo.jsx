import { useState } from "react";
import "../Components/Todo.css"
import {useTaskContext} from "./ContextProvider"


function Todo()
{
    const [data,setData]= useState("");

    const {addTask} =useTaskContext();
  
     

    const addtodo=()=>
    {   if(data==="")
    { 
        alert("Kindly enter Some Task to Add")
        return;
    }
        addTask(data) ;
        setData("");

    }

    const handleKeypress = e => {
       
      if (e.keyCode === 13) {
        
        addTask(data) ;
      }
    };

    return(
        
        <div className="todo" style={{textAlign:"center"}} >
         <input type="text" name="" id="" value={data} onChange={(e)=>{ setData(e.target.value)}} />
         <button onClick={addtodo}  onKeyDown={handleKeypress} type="submit" >Add Task</button>
        </div>

    )
}
export default Todo;