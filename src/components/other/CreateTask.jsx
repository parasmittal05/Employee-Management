import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';


const CreateTask = () => {
  const [userData,setUserData] =  useContext(AuthContext)
    const [taskTitle, setTaskTitle] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [assignedTo, setAssignedTo] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const[newTask, setNewTask] = useState({})
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      setNewTask({taskTitle,dueDate,category,description,active:false,newTask:true,failed:false,completed:false})
      const data = userData
      data.forEach(function(elem) {
        if (assignedTo == elem.firstName) {
          elem.tasks.push(newTask)
          elem.taskCount.newTask = elem.taskCount.newTask+1
       
        }
        })
        setUserData(data)
        console.log(data)
       
      setTaskTitle('')
      setCategory('')
      setAssignedTo('')
      setDueDate('')
      setDescription('')
    };
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form onSubmit={(e)=>{
          handleSubmit(e)
        }} className="flex w-full flex-wrap items-start justify-between" >
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mt-0.5"
                type="text"
                placeholder="Make A UI Design"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mt-0.5"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mt-0.5"
                type="text"
                placeholder="Employee Name"
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mt-0.5"
                type="text"
                placeholder="Design, Dev, etc."
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mt-0.5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask