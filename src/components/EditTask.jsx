import './EditTask.css';

export function EditTask({task, setTask, editedTask,setEditedTask, setIsEditing}){
  //function to save the changes
  const onSave=()=>{setTask(prev =>
      prev.map(t =>
        (t.id===task.id) ? { ...t, task_name:editedTask.trim()}:t
      )
    )
    setIsEditing(false);  
  };

  //function to close the editing pop up
  const onClose=()=>{
    setIsEditing(false);
  }
  
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Edit Task</h3>

        <div className="form-group">
          <label>Existing task</label>
          <p className="existing">{task.task_name}</p>
        </div>

        <div className="form-group">
          <label htmlFor="new_task">New Task</label>
          <input
            type="text"
            id="new_task"
            value={editedTask}
            onChange={(e)=>setEditedTask(e.target.value)}
            onKeyDown={(e)=>{
              if(e.key==="Enter" && editedTask!=="") onSave();
              else if(e.key==="Escape") onClose();
              }}
            placeholder="Enter the task"
          />
        </div>

        <div className="modal-actions">
          <button className="btn-save" onClick={onSave}>Save</button>
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );

}