import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortByParam, sortParamAdd } from '../redux/actions/actions';
import {styleSortBar} from '../styles'



export default function SortBar() {
  const styles = styleSortBar
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  function handleClickSort(e) {
    e.preventDefault();
  
    dispatch(sortParamAdd({
      field: e.target.field.value,
      direct: e.target.direction.value,
      pageNum: state.currentPage.pageNum,

    }));

    dispatch(sortByParam({
      value: {
        field: e.target.field.value,
        direction: e.target.direction.value,
      },
      num: state.currentPage.pageNum,
    }));
  }
  return (
    <form onSubmit={handleClickSort} style={styles.form}>
      <select
        style={styles.select}

        name="field"
        className="form-select"
        aria-label="Default select example"
      >
        <option>Sort_field</option>
        <option value="id">id</option>
        <option value="username">username</option>
        <option value="email">email</option>
        <option value="status">status</option>
      </select>
      <select
        style={styles.select}

        name="direction"
        className="form-select"
        aria-label="Default select example"
      >
        <option>direction</option>
        <option value="asc">asc</option>
        <option value="desc">desc</option>

      </select>
      <button style={styles.button} type="submit" className="btn btn-secondary btn-sm">sort</button>

    </form>
  );
}
