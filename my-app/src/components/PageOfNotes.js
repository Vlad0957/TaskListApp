import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortByParam, sortParamAdd } from '../redux/actions/actions';
import Notes from './Notes';
import Alert from './Alert';
import Pagination from './Pagination';
import { stylePage } from '../styles.js';

export default function Page() {
  const styles = stylePage;
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(sortParamAdd({
      field: state.currentPage.field,
      direct: state.currentPage.direct,
      pageNum: page,

    }));
    dispatch(sortByParam({
      value: {
        field: state.currentPage.field,
        direction: state.currentPage.direct,
      },
      num: page,
      URL: state.URL,
    }));
  }, [page]);

  const state = useSelector((state) => state);
  const answer = useSelector((state) => state.answer);
  const pageTasks = useSelector((state) => state.page);

  const paginate = (num) => {
    setPage(num);
  };
  return (
    <div>
      { answer.status !== ''

      && <Alert />}
      <div style={styles.divTwo}>

        <Notes page={pageTasks} />

      </div>
      <Pagination paginate={paginate} />

    </div>

  );
}
