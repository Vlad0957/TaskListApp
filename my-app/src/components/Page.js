import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearState, sortByParam, sortParamAdd } from '../redux/actions/actions';
import Notes from './Notes';
import Alert from './Alert';
import {stylePage} from '../styles.js'



export default function Page() {
  const styles = stylePage
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const tasksPerPage = 3;
  const pagesTotal = [];

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
    }));
  }, [page]);

  const state = useSelector((state) => state);
  const answer = useSelector((state) => state.answer);

  const totalCount = useSelector((state) => state.page.total_count);

  const pages = useSelector((state) => state.page);
  const pageCount = Math.ceil(totalCount / tasksPerPage);

  for (let j = 1; j <= pageCount; j++) {
    pagesTotal.push(j);
  }

  const paginate = (num) => {
    setPage(num);
  };
  const currentPage = pages;
  return (
    <div>
      { answer.status !== ''

      && <Alert />}
      <div style={styles.divTwo}>

        <Notes page={currentPage} />

      </div>
      <div style={{ width: 60 }}>
        <nav aria-label="Page navigation example">
          <ul style={styles.divThree} className="pagination">
            {pagesTotal

              .map((page) => (
                <li className="page-item">
                  <a
                    style={styles.a}
                    className="page-link"
                    href="#"
                    onClick={() => {
                      paginate(page);
                    }}
                  >
                    {page}
                  </a>
                </li>
              ))}

          </ul>
        </nav>
      </div>
    </div>

  );
}
