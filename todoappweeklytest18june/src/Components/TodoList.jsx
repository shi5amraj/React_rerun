import "../Components/Todo.css"
import { BsFillClipboardXFill,BsFillClipboardCheckFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

import {useTaskContext} from "./ContextProvider";
import { useState } from "react";




function TodoList()
{

    const {tasks,deleteTask,updateTask,setTasks,completeStatus}= useTaskContext();

    const [editVal,setEditVal]= useState("");

   


    const editTask=(id)=>
    {   
        setTasks(
              
            tasks.map((elem)=>elem.id===id?{...elem,editToggle:true}:elem)
        )
        
       


    }

    const completeTsk=(id,status)=>{
          
        completeStatus(id,!status);

    }


    const deletet=(id)=>
    {
      deleteTask(id);
    }
   
    return(

       
        <div className="todoList">
        {
      
        tasks.map((elem)=>
        {
           
            return(
             elem.editToggle ?  <>
              <div className="editdiv">
                <input type="text" placeholder={elem.task}  onChange={(e)=>setEditVal(e.target.value)}/>
                <button onClick={()=>{updateTask(elem.id,editVal)}}> Update</button>
               
              </div>
             
             <div className="todoListItem">
             <div className="paradiv">
              <span>{elem.task}</span>
              </div>
              <div className="icondiv">
             {elem.complete===true?<button onClick={()=>completeTsk(elem.id,elem.complete)} ><BsFillClipboardCheckFill color="rgb(19, 222, 19)" size={18} /></button>: <button onClick={()=>completeTsk(elem.id,elem.complete)}><BsFillClipboardXFill color="red" size={18} /></button>} 
              <button onClick={()=>editTask(elem.id)}><FiEdit color="white" size={18} /></button>
              <button onClick={()=>deletet(elem.id)}><MdDelete color="white" size={18} /></button>
               
              </div>
           </div>
           </>

             
             :
             <div className="todoListItem">
             <div className="paradiv">
                
              <span className={elem.complete===false?'spanClass':''}>{elem.task}</span>
              </div>
              <div className="icondiv">
              {elem.complete===true?<button onClick={()=>completeTsk(elem.id,elem.complete)}><BsFillClipboardCheckFill color="rgb(19, 222, 19)" size={18} /></button>: <button onClick={()=>completeTsk(elem.id,elem.complete)}><BsFillClipboardXFill color="red" size={18} /></button>} 
               <button onClick={()=>editTask(elem.id)}><FiEdit color="white" size={18} /></button>
              <button onClick={()=>deletet(elem.id)}><MdDelete color="white" size={18} /></button>
               
              </div>
           </div>

               
            )
        
      
  
            
        })

   

       
}

      


     </div>
    
       

    )

}

export default TodoList;