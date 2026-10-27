import React from 'react'
import { useRef } from 'react'
import useTaskStore from '../store/task.store'

function AddTask() {
    const text=useRef("")
    const AddTask=useTaskStore(state=>state.addTask)
    const HandleSubmit=(e)=>{
      e.preventDefault()
      AddTask(text.current.value)
    }
  return (
    <form onSubmit={HandleSubmit}>
        <input  ref={text} />
        <br/>
        <button type='submit'>Save</button>
    </form>
  )
}

export default AddTask