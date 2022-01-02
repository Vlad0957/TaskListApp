import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {changeTask} from '../redux/actions/actions'


const styles = {
  div: {
    height: 184,
    width: 340,
    border: 'solid black 1px',
    borderRadius: 10,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    padding: 5,
    margin: 5,
    fontSize: 24,
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
    height: 40,
    width: 280,
    // border: 'solid black 1px',
    borderRadius: 10,
    // overflow: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    fontSize: 12,
    fontWeight: 'bold',
    fontColor: '#E5E9F0',
  },
  select: {
    height: 30,
    width: 100,
    // border: 'solid black 1px',
    borderRadius: 10,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    margin: 2,
    fontSize: 12,
    fontWeight: 'bold',
    fontColor: '#E5E9F0',
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
  input: {
    height: 30,
    width: 100,
    borderRadius: 8,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    padding: 5,
    margin: 5,
    fontSize: 12,
    fontWeight: 'bold',
    fontColor: '#E5E9F0',
  }
}

export default function ChangeBar({note}){
const dispatch = useDispatch()
const user = useSelector(state=>state.user)
function handleClick(e){
  e.preventDefault()
  console.log({
    text: e.target.changeText.value,
    status: e.target.status.value,
    token: user.token,
    id: note.id
  })
dispatch(changeTask({
  payload: {
    text: e.target.changeText.value,
    status: e.target.status.value,
    token: user.token,
    id: note.id
  }
}))
}

return (
<form onSubmit={handleClick}>

  <input style={styles.input} name="changeText" type="text" className="form-control" 
  
  aria-label="Sizing example input" placeholder={note.text}
  varia-describedby="inputGroup-sizing-sm"></input>
  <select 
        style={styles.select}
        name="status" className="form-select" aria-label="Default select example">
  <option >status</option>
  <option value="0">задача не выполнена</option>
  <option value="1">задача не выполнена, отредактирована админом</option>
  <option value="10">задача выполнена</option>
  <option value="11">задача отредактирована админом и выполнена</option>

</select>
  <button style={styles.button} type="submit" className="btn btn-primary btn-sm" >Send changes</button>


</form>
)
}
