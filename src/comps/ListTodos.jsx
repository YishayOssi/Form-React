import React from 'react'
import Todo from './Todo'

export default function ListTodos({todos}) {
  if(!todos || !Array.isArray(todos) || todos.length === 0){
    return <>not items</>
  }
    
  return (
    <div className='list-todos'>
      {todos.map(todo=>(
         <Todo key={todo.id} todo={todo}/>                     
      )).reverse()}
    </div>
  )
}
