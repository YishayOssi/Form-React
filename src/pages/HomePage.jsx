import React, { useState } from 'react'
import { useContext } from 'react'
import TodoContext from '../context/TodoContext'
import ListTodos from '../comps/ListTodos'

export default function HomePage() {
    const {todos} = useContext(TodoContext)
    const [filteredTodos, setFilteredTodos] = useState(todos);

    const handleChange = (e) => {
        setFilteredTodos(todos.filter((todo)=> todo.title.includes(e.target.value)))
    }
    
  return (
    <div className='home-page'>
        <h1>Home</h1>
        <input type="text" onChange={handleChange} placeholder='Search todos'/>
        <ListTodos todos={filteredTodos}/>
    </div>
  )
}
