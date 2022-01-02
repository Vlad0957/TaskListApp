import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ChangeBar from '../components/changeForm'




const styles = {
  div: {
    height: 900,
    width: 840,
    border: 'solid black 1px',
    borderRadius: 10,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent:'center',
    padding: 5,
    margin: 5,
    fontSize: 24,
    fontWeight: 'bold',
    fontColor: '#E5E9F0',

  },
  divTwo: {
    
      height: 140,
      width: 350,
      border: 'solid black 1px',
      borderRadius: 10,
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent:'start',
      padding: 5,
      margin: 10,
      fontSize: 15,
      fontWeight: 'bold',
      fontColor: '#E5E9F0',
  
    
  },
  span: {
    margin: 5,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  form: {
    height: 350,
    width: 340,
    border: 'solid black 1px',
  }
}
export default function Note({note}){

  const user = useSelector(state=>state.user)
  return (
    <div style={styles.divTwo}>
 
    <span>name:{note.username}</span>
    <span>email:{note.email}</span>
    <span>Status:{note.status}</span>
    <span>Task:</span>
    <div>
    <span>{note.text}</span>
    </div>
    {user.token.length > 1 &&

   <ChangeBar note={note}/>
    }
    </div>
  )
  
}
