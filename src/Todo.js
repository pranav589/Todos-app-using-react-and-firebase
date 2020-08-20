import React,{useState} from 'react'
import {List,ListItem,ListItemText,Button,Modal,Input,InputLabel} from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './firebase'
import {makeStyles} from '@material-ui/core/styles'


const useStyles=makeStyles((theme)=>({
  paper:{
    position:'absolute',
    width:400,
    backgroundColor:theme.palette.background.paper,
    border:'2px solid #000',
    boxShadow:theme.shadows[5],
    padding:theme.spacing(2,4,3),
  }
}))

function Todo(props){
  const classes=useStyles()
  const [open,setOpen]=useState(false)
  const [input,setInput]=useState('')

  const handleOpen=()=>{
    setOpen(true)
  }

  const updateTodo=()=>{
    db.collection('todos').doc(props.todo.id).set({
      todo:input
    },{merge:true})
    setOpen(false)
  }


  return(
    <>
    <Modal open={open} onClose={e=>setOpen(false)} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div className={classes.paper} style={{textAlign:"center"}}>
      <Input value={input} placeholder="Update your todo" onChange={event=>setInput(event.target.value)}/>
      <Button onClick={updateTodo}>Update</Button>
    </div>
    </Modal>
    <List className='todo_list'>
      <ListItem  className="todo_item">
      
        <ListItemText className="todoText" primary={props.todo.todo}/>
        <DeleteForeverIcon className="todoText"   onClick={event=>db.collection('todos').doc(props.todo.id).delete()}/>
        <input type="submit" className="todoButton" onClick={e=>setOpen(true)} value="Edit"/>
      
      </ListItem>
    </List>
    </>
  )
}

export default Todo