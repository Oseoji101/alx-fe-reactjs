import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'

function App() {

  return (
    <>
      <div>
        <TodoList />
        <AddTodoForm />
      </div>
    </>
  )
}

export default App
