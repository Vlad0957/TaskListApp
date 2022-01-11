import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTask, addAnswer } from '../redux/actions/actionsTasks';
import {styleForm} from '../styles.js'



export default function Form({changeViewForm}) {
  const styles = styleForm
  const dispatch = useDispatch();
  const state = useSelector(state => state)

  function handleClick(e) {
    e.preventDefault();

    if (!e.target.userName.value.trim() || !e.target.newEmail.value.trim() || !e.target.newTask.value.trim()) {
      dispatch(addAnswer(
        {
          status: 'error',
          message: 'All fields should be filled',
        },
      ));
    } else {
      dispatch(addNewTask({
        username: e.target.userName.value,
        email: e.target.newEmail.value,
        text: e.target.newTask.value,
        status: 0,
        URL: state.URL
      }));
    }
    e.target.userName.value = '';
    e.target.newEmail.value = '';
    e.target.newTask.value = '';
    
    setTimeout(()=>{
      changeViewForm()
    }, 500)
  }
  return (
    <form style={styles.form} onSubmit={handleClick}>
      <div className="mb-3">
        <label style={styles.label} htmlFor="exampleFormControlInput1" className="form-label">User name</label>
        <input
          style={styles.input}
          type="user"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="user name"
          name="userName"
        />
      </div>
      <div className="mb-3">
        <label style={styles.label} htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input
          style={styles.input}
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          name="newEmail"
        />
      </div>
      <div className="mb-3">
        <label style={styles.label} htmlFor="exampleFormControlTextarea1" className="form-label">Text</label>
        <textarea
          style={styles.textarea}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          name="newTask"
        />
      </div>
      <button style={styles.button} type="submit" className="btn btn-primary btn-sm">Create</button>
    </form>
  );
}
