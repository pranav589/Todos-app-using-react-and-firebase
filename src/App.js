import React,{useState} from "react";
import {Button,FormControl,Input,InputLabel} from '@material-ui/core'
import "./style.css";
import Todo from './Todo'

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
    <FormControl>
      <InputLabel>Write a todo</InputLabel>
      <Input value={input} onChange={event=>setInput(event.target.value)}/>
    </FormControl>
    {/* <input value={input} onChange={event=>setInput(event.target.value)}/>*/}
      <Button type='submit' onClick={addTodo}variant="contained" color="primary" disabled={!input}>
       Add todo
      </Button>
      {/*<button type='submit' onClick={addTodo}>Add todo</button>*/}
    </form>
    <ul>
      {todos.map(todo=>(
        <Todo todo={todo}/>
      //  <li>{todo}</li>
      ))}
    </ul>
    </div>
  );
}