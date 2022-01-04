import React from 'react'
import {useDispatch} from 'react-redux'
import {addNewTask, addAnswer} from '../redux/actions/actions'


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
  label: {
    margin: 5,
    fontSize: 12,
    fontWeight: 'bold',
    // color: '#FFFFFF',
  },
  form: {
    height: 350,
    width: 220,
    border: 'solid black 1px',
    borderRadius: 10,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    padding: 7,
    margin: 5,
    marginLeft: 35,
    fontSize: 12,
    fontWeight: 'bold',
    fontColor: '#E5E9F0',
  },
  input: {
    height: 30,
    width: 120,
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
  },
  textarea: {
    height: 60,
    width: 180,
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
  },
  button:{
    height: 30,
    width: 60,
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
  }
}
export default function Form (){
  const dispatch = useDispatch() 

  function handleClick(e) {
    e.preventDefault()
    console.log('newTask', e.target.newTask.value)

    if(!e.target.userName.value.trim()||!e.target.newEmail.value.trim()||!e.target.newTask.value.trim()){
      dispatch(addAnswer(
        {
          status: 'error',
          message: 'All fields should be filled'
        }
      ))
    } else {
      dispatch(addNewTask({
        username: e.target.userName.value,
        email: e.target.newEmail.value,
        text: e.target.newTask.value,
        status: 0
      }))

    }
    e.target.userName.value = ''
    e.target.newEmail.value = ''
    e.target.newTask.value = ''
    
  }
  return(
    <form style={styles.form} onSubmit={handleClick} >
<div className="mb-3">
  <label style={styles.label} for="exampleFormControlInput1" className="form-label">User name</label>
  <input style={styles.input} type="user" className="form-control" id="exampleFormControlInput1" placeholder="user name"
  name='userName'></input>
  </div>
    <div className="mb-3">
  <label style={styles.label} for="exampleFormControlInput1" className="form-label">Email address</label>
  <input style={styles.input} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
  name="newEmail"></input>
  </div>
<div className="mb-3">
  <label style={styles.label} for="exampleFormControlTextarea1" className="form-label">Text</label>
  <textarea style={styles.textarea} className="form-control" id="exampleFormControlTextarea1" rows="3"
  name="newTask"></textarea>
</div>
 <button style={styles.button} type="submit" className="btn btn-primary btn-sm" >Create</button>
    </form>
  )
}
