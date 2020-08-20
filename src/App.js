import React,{useState,useEffect} from "react";
import {Button,FormControl,Input,InputLabel} from '@material-ui/core'
import "./style.css";
import Todo from './Todo'
import db from './firebase'
import firebase from 'firebase'

export default function App() {

  const [todos,setTodos]=useState([])

  const [input,setInput]=useState('')
  //console.log(input)
  
  //when the app loads,we need to listen to thr database and fetch the new todo as it removed/added

  useEffect(
    //this code fires when the app.js loads
    ()=>{
       db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
        // console.log(snapshot.docs.map(doc=>doc.data()))
         setTodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))
       })
    },[]
  )


  const addTodo=(event)=>{
     //console.log('clicked')
     event.preventDefault()
    // setTodos([...todos,input])
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
     setInput('')
  }
  return (
    <div className='app'>
    <div className='head'>
    <h2 style={{}}>Todo's App 💬</h2>
    </div>
    <form className='input'>
    <FormControl>
      <input type='text'  placeholder="Write your todo" value={input} onChange={event=>setInput(event.target.value)} className='todoInput'/>
    </FormControl>
    {/* <input value={input} onChange={event=>setInput(event.target.value)}/>*/}
      <button type='submit' onClick={addTodo}variant="contained" className="todoAdd" color="primary" disabled={!input}>
       Add todo
      </button>
      {/*<button type='submit' onClick={addTodo}>Add todo</button>*/}
    </form>
    <ul>
      {todos.map(todo=>(
        <Todo todo={todo} key={todo.id}/>
      //  <li>{todo}</li>
      ))}
    </ul>
    </div>
  );
}