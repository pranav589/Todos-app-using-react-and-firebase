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
    <div className={classes.paper}>
      <InputLabel>Update your todo</InputLabel>
      <Input value={input} onChange={event=>setInput(event.target.value)}/>
      <Button onClick={updateTodo}>Update</Button>
    </div>
    </Modal>
    <List className='todo_list'>
      <ListItem  className="todo_item">
      
        <ListItemText primary={props.todo.todo}/>
        <DeleteForeverIcon onClick={event=>db.collection('todos').doc(props.todo.id).delete()}/>
        <Button onClick={e=>setOpen(true)}>Edit</Button>
      
      </ListItem>
    </List>
    </>
  )
}

export default Todo