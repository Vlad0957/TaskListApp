import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchTasks} from '../redux/actions/actions'
import Note from './Note'





export default function Notes(){
const dispatch = useDispatch()
const notes = useSelector((state) => state.tasks)
function buttonSubmit(e){
  e.preventDefault()
  console.log('YEES')
  dispatch(fetchTasks())
}
  return (
    <div className='notes'>
    <button type="button" className="btn btn-primary btn-lg" onClick={buttonSubmit}>Large button</button>

    <ul className="list-group">

    {notes.map(note=><li className="list-group-item"><Note note={note} key={note.id}/></li>)}
    </ul>
    

    </div>
  )
}
