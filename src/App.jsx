import {useState,useEffect} from 'react';
import { AllTasks } from './components/AllTasks';
import { ActiveTasks } from './components/ActiveTasks';
import { CompletedTasks } from './components/CompletedTasks';
import { AddTaskWrapper } from './components/AddTaskWrapper';
import './App.css';

function App() {
  const [newTask,setnewTask]=useState(""); //hook to store the new task temporarily
  const [searchQuery,setSearchQuery]=useState(""); //hook to search todo tasks

  const [task,setTask]=useState(()=>{ //hook to store the new task along with localStorage
      try {
        const storedMessages = localStorage.getItem('allTasks');
        return storedMessages ? JSON.parse(storedMessages) : [];
      } catch (error) {
        console.error('Invalid JSON in localStorage:', error);
        return [];
      }    
    }
  );

  //search task function
  const searchedTasks = task.filter(t =>
    t.task_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //delete task function
  const deleteTask = (taskToDelete) => {
    setTask(prev =>prev.filter(t => t.id !== taskToDelete.id));
  };

  //to store tasks in localStorage
  useEffect(()=>{
    localStorage.setItem('allTasks',JSON.stringify(task));
  },[task]);

  return (
    <>
      {/* component for input */}
      <AddTaskWrapper newTask={newTask} setnewTask={setnewTask} setTask={setTask}/>

      {/* div block for searching */}
      <div className="search-wrapper">
        <input type="text" placeholder="Search todo" value={searchQuery} onChange={(event)=>{setSearchQuery(event.target.value)}} className="search-input"/>
      </div>

      {/* div block for storing tasks and classification */}
      <div className="totalTasks">
        <AllTasks tasks={searchedTasks} setTask={setTask} deleteTask={deleteTask}/>
        <ActiveTasks setTask={setTask} tasks={searchedTasks} deleteTask={deleteTask}/>
        <CompletedTasks setTask={setTask} tasks={searchedTasks} deleteTask={deleteTask}/>
      </div>

      {/* div for showing the total number of tasks completed */}
    </>
  )
}

export default App