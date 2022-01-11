import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../redux/actions/actionsUser';
import UserAuth from './UserAuth';
import {styleHeaderBar} from '../styles'



export default function HeaderBar() {
  const styles = styleHeaderBar
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    
    dispatch(deleteUser());
  }

  return (
    <div>
      {user.token.length > 0
      && (
      <div style={styles.div}>
        <span style={{ fontSize: 12 }} />
        <button onClick={handleClick} type="submit" className="btn btn-primary btn-sm">Quit</button>
      </div>
      )}
      {user.token.length == 0
      && <UserAuth />}

    </div>

  );
}
