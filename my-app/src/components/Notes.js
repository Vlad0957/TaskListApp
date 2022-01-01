import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchTasks} from '../redux/actions/actions'
import Note from './Note'





export default function Notes({page}){
const dispatch = useDispatch()


  return (
    <div >
    <div >
    {page.tasks.length>0 &&
      page.tasks.map(note=><Note note={note} key={note.id}/>)
      }
    </div> 
    
    </div>
  )
}
