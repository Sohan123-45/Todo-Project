import { useState } from 'react';
import { EditTask } from './EditTask';
import { backTask } from '../btn-functions/backTask';
import { frontTask } from '../btn-functions/frontTask';
import './ActiveTasks.css';

export function ActiveTasks({setTask,tasks,deleteTask}){
  const activeTasks=tasks.filter(t=>t.status=="active")
  const [isEditing,setIsEditing]=useState(false);
  const [editedTask,setEditedTask]=useState("");
  const [selectedTask,setSelectedTask] = useState(null);
  return(
    <>
      <div className="active">
        {activeTasks.map((task)=>{
            return(
              <div key={task.id}>

                {/* edit btn */}
                <button className="btn-edit" onClick={()=>{
                    setSelectedTask(task);
                    setEditedTask("");
                    setIsEditing(true);
                    }}><img src="edit.png" alt="Edit" className="edit"/></button>

                {/* delete btn */}
                <button className="btn-delete" onClick={()=>{deleteTask(task)}}><img src='delete.png' className='delete'/></button>
  
                {/* task name */}
                <span>{task.task_name}</span>
  
                {/* back btn */}
                <button className="btn-back" onClick={()=>backTask(task,setTask)}><img src='arrow-left.png' className='arrow-left'/></button>

                {/* front btn */}
                <button className="btn-front" onClick={()=>frontTask(task,setTask)}><img src='arrow-right.png' className='arrow-right'/>  </button>
              </div>
            )
        })}
      </div>

      {/* Edit component */}
      {
        isEditing && selectedTask && (
          <EditTask
            task={selectedTask}
            setTask={setTask}
            editedTask={editedTask}
            setEditedTask={setEditedTask}
            setIsEditing={setIsEditing}
          />
        )
      }
    </>
  )
}