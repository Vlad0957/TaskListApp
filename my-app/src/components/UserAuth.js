import React from 'react'
import {useDispatch} from 'react-redux'
import {userAuth} from '../redux/actions/actions'





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
    margin: 1,
    fontSize: 12,
    // fontWeight: 'bold',
    // color: '#FFFFFF',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  form: {
    height: 80,
    width: 650,
    border: 'solid black 1px',
    borderRadius: 10,
    // overflow: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'end',
    padding: 10,
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
  },
  button: {
    height: 30,
    width: 60,
    border: 'solid black 1px',
    borderRadius: 10,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    fontSize: 12,
    fontWeight: 'bold',
    fontColor: '#E5E9F0',
  },
  divInp: {
     alignItems: 'center',
    justifyContent: 'center',

  }
}

export default function AuthForm(){
const dispatch = useDispatch()

  function handleClick(e){
    e.preventDefault();
    console.log('hanClickdl', e.target.username.value)
    dispatch(userAuth({
      username: e.target.username.value,
      password: e.target.password.value
    }))
    e.target.username.value = ''
      e.target.password.value = ''
  }

  return (

    <form style={styles.form} onSubmit={handleClick}>
    <div className="mb-3">
    <label style={styles.span} for="exampleInputEmail1" className="form-label">User name</label>
    <input style={styles.input} name ="username" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
   
  </div>
  {/* <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
  </div> */}
  <div style={styles.divInp} className="mb-3">
    <label style={styles.span} for="exampleInputPassword1" className="form-label">Password</label>
    <input style={styles.input} name="password" type="password" className="form-control" id="exampleInputPassword1"></input>
  </div>
  
  <button style={styles.button} type="submit" className="btn btn-primary btn-sm">Sign in</button>
</form>
  
  )
}
