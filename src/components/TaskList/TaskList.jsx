import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10'>
      {data.tasks.map((elem) => {
        if (elem.active) {
          return <AcceptTask key={elem.taskTitle} data={elem} />; // Use a unique identifier as key
        }
        if (elem.newTask) {
          return <NewTask key={elem.taskTitle} data={elem} />; // Use a unique identifier as key
        }
        if (elem.completed) {
          return <CompleteTask key={elem.taskTitle}  data={elem}/>; // Use a unique identifier as key
        }
        if (elem.failed) {
          return <FailedTask key={elem.taskTitle}  data={elem} />; // Use a unique identifier as key
        }
        return null; // Explicitly return null if no conditions are met
      })}
    </div>
  );
}

export default TaskList;
