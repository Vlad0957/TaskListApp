import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAuth } from '../redux/actions/actions';
import {styleUserAuth} from '../styles'



export default function AuthForm() {
  const styles = styleUserAuth
  const dispatch = useDispatch();
  const state = useSelector(state => state)

  function handleClick(e) {
    e.preventDefault();
    dispatch(userAuth({
      username: e.target.username.value,
      password: e.target.password.value,
      URL: state.URL
    }));
    e.target.username.value = '';
    e.target.password.value = '';
  }

  return (

    <form style={styles.form} onSubmit={handleClick}>
      <div className="mb-3">
        <label style={styles.span} htmlFor="exampleInputEmail1" className="form-label">User name</label>
        <input style={styles.input} name="username" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

      </div>
      <div style={styles.divInp} className="mb-3">
        <label style={styles.span} htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input style={styles.input} name="password" type="password" className="form-control" id="exampleInputPassword1" />
      </div>

      <button style={styles.button} type="submit" className="btn btn-primary btn-sm">Sign in</button>
    </form>

  );
}
