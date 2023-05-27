//import { useState } from 'react'
import React from 'react';
import "./assets/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from './components/todo/TodoList'


function App() {
  //const [count, setCount] = useState(0)

  return (  
      <div className="app">
        <TodoList />
      </div>
  )
}

export default App
