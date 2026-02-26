import React, { useContext, useState } from 'react'
import TodoContext from '../context/TodoContext'
import { useNavigate } from 'react-router'

export default function AddTodo() {
  const navigate = useNavigate();
  const {todos ,setTodos} = useContext(TodoContext)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

const handleAddTodo = () => {
   const newTodo = {id: (todos.length + 1), title, description, createdAt: new Date().toISOString(), toggle: false}
   setTodos([...todos, newTodo])
   navigate("/");
}

  return (
    <div className='addTodo'>
      <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
      <input type="text" onChange={(e) => setDescription(e.target.value)} placeholder='Description' />
      <button onClick={handleAddTodo}>Send</button>
    </div>
  )
}
