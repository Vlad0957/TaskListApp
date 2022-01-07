import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTask } from '../redux/actions/actions';
import {styleChangeForm} from '../styles.js'



export default function ChangeBar({ note, toChangeView }) {
  const styles = styleChangeForm
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const state = useSelector((state) => state);
  function handleClick(e) {
    e.preventDefault();

    dispatch(changeTask({
      payload: {
        text: e.target.changeText.value,
        status: e.target.status.value,
        token: user.token,
        id: note.id,
        URL: state.URL
      },
    }));
    toChangeView();
  }

  return (
    <form onSubmit={handleClick}>
      <select
        style={styles.select}
        name="status"
        className="form-select"
        aria-label="Default select example"
      >
        <option>status</option>
        <option value="0">задача не выполнена</option>
        <option value="1">задача не выполнена, отредактирована админом</option>
        <option value="10">задача выполнена</option>
        <option value="11">задача отредактирована админом и выполнена</option>

      </select>
      <textarea
        style={styles.textAria}
        name="changeText"
        type="text"
        className="form-control"

        aria-label="Sizing example input"
        placeholder={note.text}
        varia-describedby="inputGroup-sizing-sm"
      />
      
      <button style={styles.button} type="submit" className="btn btn-primary btn-sm">Send changes</button>

    </form>
  );
}
