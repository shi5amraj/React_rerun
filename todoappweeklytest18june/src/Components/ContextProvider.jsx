import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { v4 as idGen } from "uuid";



const TaskContext = createContext();





export const useTaskContext = () => useContext(TaskContext);

const ContextProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);

  const  addTask = (ts) => {

        setTasks([
            ...tasks,
            {
                id: idGen(),
                task: ts,
                complete: false,
                editToggle:false
            }
        ]

        )

    }

const completeStatus = (id, status) => {

        setTasks(
            tasks.map((t) =>t.id === id ? { ...t, complete: status } : t

            )

        )
    }

   const  updateTask = (id, data) => {
        setTasks(
            tasks.map((t) =>t.id === id ? { ...t, task: data,editToggle:false} : t

            )
        )
    }

  const  deleteTask = (id) => {


        setTasks(
            tasks.filter((t) => t.id !== id

            )
        )
    }





    return (


        <TaskContext.Provider value={{ tasks,setTasks, addTask,completeStatus,updateTask,deleteTask}} >

            {children}
        </TaskContext.Provider>
    )


}

export default ContextProvider;

