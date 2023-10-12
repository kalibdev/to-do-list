import React, { useRef, useState } from 'react'
import "./App.css"

export default function App() {
  const [todo,settodo]=useState([])
  const contact=useRef()
  const upadte =()=>{
    const text =contact.current.value
    settodo([...todo,text])
    contact.current.value=""
  }
 
  return (
    <div className='App'>
   <h1> my to do list</h1>
   <div className='all'>
   <ul>
{todo.map((item)=>{return <li>{item}</li>})}
   </ul>
   <input placeholder='add' ref={contact}></input>
   <button onClick={upadte}>Add</button>
   </div>
    </div>
  )
}

