import { useState } from 'react'
import Todo from './components/Todo'
import './App.css'
import AddTodo from './components/AddTodo'


function App() {  
  return (
    <>
      <h1>Learn about redux toolkit</h1>
     <AddTodo/>
      <Todo/>
    </>
  )
}

export default App