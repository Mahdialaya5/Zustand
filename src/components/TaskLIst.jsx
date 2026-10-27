import React from 'react'
import Task from './Task'
import useTaskStore from "../store/task.store"

function TaskLIst() {
  const Tasks=useTaskStore(state=>state.Tasks)
  return (
    <div>
      <h1>Tasks :</h1>
      { Tasks.map(el=> <Task  key={el.id} T={el.text}/>) }
   
    </div>
  )
}

export default TaskLIst