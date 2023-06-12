
import "../Components/Todo.css"
import { BsFillClipboardXFill, BsFillClipboardCheckFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";


import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';




function TodoList() {

    const [tasks,setTasks]= useState([]);
    const [update,setUpdate]=useState(true);
    const [data,setData]=useState(""); 
   useEffect(()=>{

     axios.get("http://localhost:5000/results").then((resp)=>{

     
         setTasks(resp.data)

     }).catch(()=>{
        alert("Coudn't get user list")
     })


   },[update])


  

   const addTask=(data)=>
   {

     let val={
       
     "task":data,
     "complete": false
     }

     axios.post("http://localhost:5000/results",val).then(()=>{
       alert("task added successfully");
       setUpdate(!update);
       
     }).catch(()=>{
       alert("task could not add");
     })

     document.getElementById("inp").value="";


   }

   const  addtodo=()=>
   {
     if(data==="")
     {
      alert("please Enter some text to add in todo")
      return;
     }
     addTask(data);
     

       
   }

   const handleKeypress = (e) => {

     if (e.keyCode === 13) {
       if(data==="")
       {
        alert("please Enter some text to add in todo")
        return;
       }
       
       addTask(data) ;
     }
   };

    

    const completeTask=(id)=>
    {
        let val;

     const updatedData=tasks.map((elem)=>{
     
     if(elem.id===id)
     {
        val={...elem,complete:!elem.complete}
        return ;
        
     }

    

     })
           console.log(val)
        axios.put(`http://localhost:5000/results/${id}`,val).then(()=>{
        
        setUpdate(!update);

        }).catch((error)=>{
        console.log("Task update failed:", error);
             
        alert("task update fail") 
        })

    }

    const deleteTask=(id)=>
    {
      
      axios.delete(`http://localhost:5000/results/${id}`).then(()=>{

      alert("task deleted successfully");
      setUpdate(!update)

      }).catch(()=>{

      alert("Coudn't delete")
      })


    }


    return (       //This return function is must because in react js every component must return some value UI otherwise definition of component is incomplete
        <>
    <div className="todo" style={{textAlign:"center"}} >
    <input type="text" name="" id="inp" onKeyUp={(e)=>handleKeypress(e)}  onChange={(e)=>{ setData(e.target.value)}} />
    <button onClick={addtodo}   type="submit" >Add Task</button>


   </div>
        
        
        
        <div className="todoList">
            {

                tasks.map((elem, i) => {
                    
                    return (                //This return function is only beacuse when we use map in js it must return something so that it can store it to its return type as we know that map and filter having return type  array.
                       

                 
                    
                       <div className="todoListItem" key={i}>
                      <div className="paradiv">
                          <span className={elem.complete === true ? 'spanClass' : ''}>{elem.task}</span>
                      </div>
                      <div className="icondiv">
                          {elem.complete === true ? <button onClick={()=>{completeTask(elem.id)}} title="update"><BsFillClipboardCheckFill color="rgb(19, 222, 19)" size={18} /></button> : <button onClick={()=>{completeTask(elem.id)}} ><BsFillClipboardXFill color="red" size={18} /></button>}
                          <button onClick={()=>{deleteTask(elem.id)}} title="delete" ><MdDelete color="white" size={18} /></button>

                      </div>
                  </div>
                     

                
                       


                    )



                })

            }

        </div>

        </>




    )




}
export default TodoList;













