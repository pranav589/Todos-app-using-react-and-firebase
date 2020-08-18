import React from 'react'
import {List,ListItem,ListItemText,Button} from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './firebase'

function Todo(props){
  return(
    <List className='todo_list'>
      <ListItem>
        <ListItemText primary={props.todo.todo}/>
        <DeleteForeverIcon onClick={event=>db.collection('todos').doc(props.todo.id).delete()}/>
      </ListItem>
    </List>
  )
}

export default Todo