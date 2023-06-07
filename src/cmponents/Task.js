import React from 'react'
import { FcEmptyTrash } from "react-icons/fc";



const Task = ({title,description,deletetask,index}) => {
  return (
    <div className='task'>
      <div>
        <p>Title:{title}</p>
        <span>Description:{description}</span>
      </div>
      <button onClick={()=>deletetask(index)}><FcEmptyTrash/></button>
    </div>
  )
}

export default Task
 