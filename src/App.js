import React,{useState} from "react";
import {Button} from '@material-ui/core'
import "./style.css";

export default function App() {

  const [todos,setTodos]=useState(['tea','coffe'])

  const [input,setInput]=useState('')
  //console.log(input)

  const addTodo=(event)=>{
     //console.log('clicked')
     event.preventDefault()
     setTodos([...todos,input])
     setInput('')
  }
  return (
    <div>
    <form>
      <input value={input} onChange={event=>setInput(event.target.value)}/>
      <Button type='submit' onClick={addTodo}variant="contained" color="primary" disabled={!input}>
       Add todo
      </Button>
      {/*<button type='submit' onClick={addTodo}>Add todo</button>*/}
    </form>
    <ul>
      {todos.map(todo=>(
        <li>{todo}</li>
      ))}
    </ul>
    </div>
  );
}