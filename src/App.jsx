import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 flex-col">
      <h1>📝 Redux ToDo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
