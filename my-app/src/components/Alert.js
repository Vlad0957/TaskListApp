import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideAlert, clearState, sortByParam } from '../redux/actions/actions';
import {styleAlert} from '../styles.js'



export default function Alert() {
  const styles = styleAlert
  const answer = useSelector((state) => state.answer.message);
  const state = useSelector((state) => state);
  const curentSort = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    
    dispatch(hideAlert());
    dispatch(clearState({

    }));

    dispatch(sortByParam({
      value: {
        field: curentSort.field,
        direction: curentSort.direct,
      },
      num: state.currentPage.pageNum,
    }));
  }
  return (

    <div className="modal" role="alert" style={styles.div}>
      <span>{answer}</span>
      <button style={styles.button} onClick={handleClick} type="button" className="btn btn-secondary btn-sm">Ok</button>
    </div>

  );
}
