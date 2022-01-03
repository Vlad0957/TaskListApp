import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {deleteUser} from '../redux/actions/actions'
import UserAuth from './UserAuth'

const styles = {
  div: {
    height: 80,
    width: 650,
    border: 'solid black 1px',
    borderRadius: 10,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
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
    height: 100,
    width: 650,
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
  }
}

export default function HeaderBar(){
const user = useSelector(state=>state.user)
const dispatch = useDispatch()

function handleClick(e){
  e.preventDefault()
  console.log('delete')
  dispatch(deleteUser())
}

  return(
    <div>
    {user.token.length>0 &&
      <div style={styles.div}>
      <span style={{fontSize: 12}}></span>
      <button onClick={handleClick} type="submit" className="btn btn-primary btn-sm" >Quit</button>
      </div>
}
{user.token.length==0 &&
      <UserAuth />
      
}

    </div>


  )
}
