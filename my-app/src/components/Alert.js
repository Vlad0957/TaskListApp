import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideAlert, clearState, sortByParam } from '../redux/actions/actions';
import { styleAlert } from '../styles.js';

export default function Alert() {
  const styles = styleAlert;
  const answer = useSelector((state) => state.answer.message);
  const state = useSelector((state) => state);
  const curentSort = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();
  // const [someTest, setSomeTest] = useState(false)
  const [thisPage, setThisPage] = useState(state.currentPage.pageNum);
  if (answer == 'Task created' && state.currentPage.pageNum == Math.ceil(state.page[0].total_count / 3) && state.page[0].tasks.length == 3) {
    // setSomeTest(true)
    setThisPage(++state.currentPage.pageNum);
  }
  function handleClick(e) {
    e.preventDefault();

    dispatch(clearState({

    }));

    dispatch(sortByParam({
      value: {
        field: curentSort.field,
        direction: curentSort.direct,
      },
      num: thisPage,
    }));

    dispatch(hideAlert());
  }
  return (

    <div className="modal" role="alert" style={styles.div}>
      <span>{answer}</span>
      <button style={styles.button} onClick={handleClick} type="button" className="btn btn-secondary btn-sm">Ok</button>
    </div>

  );
}
