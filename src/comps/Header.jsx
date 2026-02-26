import React from 'react'
import { Link } from 'react-router'

export default function Header() {
  return (
    <div className='header'>
    <img src="./logo.svg" alt="logo" />
    <Link to='/'>Home</Link>
    <Link to='/addTodo'>Add</Link>
    </div>
  )
}
