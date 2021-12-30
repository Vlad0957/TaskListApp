import React from 'react'
import {useSelector} from 'react-redux'
import Note from './Note'





export default function Notes(){

const notes = useSelector((state) => state.tasks)
  return (
    <div className='notes'>
    <ul className="list-group">

    {notes.map(note=><li className="list-group-item"><Note note={note} key={note.id}/></li>)}
    </ul>
    

    </div>
  )
}
