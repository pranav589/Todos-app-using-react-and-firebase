import React,{useState,useEffect} from "react";
import {Button,FormControl,Input,InputLabel} from '@material-ui/core'
import "./style.css";
import Todo from './Todo'
import db from './firebase'

export default function App() {

  const [todos,setTodos]=useState([])

  const [input,setInput]=useState('')
  //console.log(input)
  
  //when the app loads,we need to listen to thr database and fetch the new todo as it removed/added

  useEffect(
    //this code fires when the app.js loads
    ()=>{
       db.collection('todos').onSnapshot(snapshot=>{
         console.log(snapshot.docs.map(doc=>doc.data()))
         setTodos(snapshot.docs.map(doc=>doc.data().todo))
       })
    },[]
  )


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