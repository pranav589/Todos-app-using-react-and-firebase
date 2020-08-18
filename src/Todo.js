import React,{useState} from 'react'
import {List,ListItem,ListItemText,Button,Modal} from '@material-ui/core'
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
    padding:theme.spacing(2,4,3)
  }
}))

function Todo(props){
  const classes=useStyles()
  const [open,setOpen]=useState(false)

  const handleOpen=()=>{
    setOpen(true)
  }


  return(
    <>
    <Modal open={open} onClose={e=>setOpen(false)}>
    <div className={classes.paper}>
      <h4>I am modal</h4>
      <Button onClick={e=>setOpen(false)}>Update</Button>
    </div>
    </Modal>
    <List className='todo_list'>
      <ListItem>
        <ListItemText primary={props.todo.todo}/>
        <DeleteForeverIcon onClick={event=>db.collection('todos').doc(props.todo.id).delete()}/>
        <Button onClick={e=>setOpen(true)}>Edit</Button>
      </ListItem>
    </List>
    </>
  )
}

export default Todo