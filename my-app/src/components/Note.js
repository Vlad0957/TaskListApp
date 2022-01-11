import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChangeBar from './changeForm';
import { styleNote } from '../styles';

export default function Note({ note }) {
  const styles = styleNote;
  const [view, setView] = useState(false);
  const user = useSelector((state) => state.user);
  const statusDep = {
    0: 'не выполнено',
    1: 'не выполнено, отредактировано админом',
    10: 'выполнено',
    11: 'отредактировано админом, выполнено',
  };
  function handleClick(e) {
    e.preventDefault();

    setView(true);
  }
  const toChangeView = () => { setView(false); };

  return (

    <div style={styles.div}>
      <div style={styles.divTwo}>
        <span>
          name:
          {note.username}
        </span>
        <span>
          email:
          {note.email}
        </span>
        <span>
          Status:
          {statusDep[note.status]}
        </span>
        <span>Task:</span>
        <div>
          <span>{note.text}</span>
        </div>
      </div>

      {user.token.length > 10 && view != true
        && <button style={styles.button} type="submit" className="btn btn-primary btn-sm" onClick={handleClick}>Edit</button>}
      {view === true && user.token.length > 10
      && <ChangeBar note={note} toChangeView={toChangeView} />}
    </div>
  );
}
