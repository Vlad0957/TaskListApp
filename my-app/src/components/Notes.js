import React from 'react'
import Note from './Note'





export default function Notes({page}){

  return (
    
    <div >
    {page.tasks.length>0 &&
      page.tasks.map(note=><Note note={note} key={note.id}/>)
      }
    </div> 
    
  )
}
