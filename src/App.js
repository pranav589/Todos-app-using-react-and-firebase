import React,{useState} from "react";
import "./style.css";

export default function App() {

  const [todos,setTodos]=useState(['tea','coffe'])
  return (
    <div>
      <input/>
      <button>Add todo</button>
    <ul>
      {todos.map(todo=>(
        <li>{todo}</li>
      ))}
    </ul>
    </div>
  );
}