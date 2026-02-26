import React from 'react'

export default function Todo({todo}) {
    if(!todo) return

    console.log(todo);
    
  return (
    <div className='todo'>
        <h3>{todo.title}</h3>
        <h4>description: {todo.description}</h4>
        <h6>created at: {todo.createdAt}</h6>
        <h6>is done ? {JSON.stringify(todo.toggle)}</h6>
        <h3>id: {todo.id}</h3>
    </div>
  )
}
