import { useRef,useEffect } from "react";
import "./AddTaskWrapper.css";

export function AddTaskWrapper({newTask,setnewTask,setTask}){
    //using useRef and useEffect for focusing input
    const addRef=useRef(null);

    useEffect(()=>{
        addRef.current.focus();
    },[])

    //function to add task with SUBMIT button
    const AddTaskButton=()=>{
        if (newTask.trim()==="") return;
            setTask(prev=>[...prev, 
            {
                id: Date.now(),
                task_name:newTask.trim(),
                status:"all",
            }  
            ]);
        setnewTask("");
    }
       
    //function to add task with ENTER key
    const AddTask=(event)=>{
        if(event.key==="Enter" && newTask.trim()!==""){
            AddTaskButton();
        }
    }

    return(
        <>
            <div className="add-task-wrapper">
                <input ref={addRef} type="text" placeholder="Enter the task" value={newTask} onChange={(event)=>{
                setnewTask(event.target.value);
                }}
                onKeyDown={AddTask}/>
                <button onClick={AddTaskButton}>Submit</button>
            </div>
        </>
    )
}