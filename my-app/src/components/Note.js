import {React, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ChangeBar from '../components/changeForm'




const styles = {
  div: {
    height: 150,
      width: 380,
    border: 'solid black 1px',
    borderRadius: 10,
    // overflow: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'space-between',
   
    padding: 5,
    margin: 5,
    fontSize: 24,
    fontWeight: 'bold',
    fontColor: '#E5E9F0',

  },
  divTwo: {
    
      // height: 140,
      // width: 350,
      // border: 'solid black 1px',
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
  },
  button: {
    height: 30,
    width: 100,
    border: 'solid black 1px',
    borderRadius: 10,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5,
    fontSize: 12,
    fontWeight: 'bold',
    fontColor: '#E5E9F0',
  },
}
export default function Note({note}){
const [view, setView] = useState(false)
  const user = useSelector(state=>state.user)
  function handleClick(e){
    e.preventDefault()
    console.log('ClickNote')
    setView(true)
  }
  const toChangeView = () => {setView(false)}

  return (
    
    <div style={styles.div}>
 <div style={styles.divTwo}>
   <span>name:{note.username}</span>
    <span>email:{note.email}</span>
    <span>Status:{note.status}</span>
    <span>Task:</span>
    <div>
    <span>{note.text}</span>
    </div>
 </div>
    
    {user.token.length > 10 && view!=true &&
      <button style={styles.button} type="submit" className="btn btn-primary btn-sm" onClick={handleClick}>Edit</button>
    }
    {view === true && user.token.length > 10 &&

 <ChangeBar 
 note={note}
 toChangeView = {toChangeView}
  />
    }
    </div>
  )
  
}
