import React from 'react';
import { useSelector } from 'react-redux';
import { stylePage } from '../styles.js';

export default function Pagination({ paginate }) {
  const styles = stylePage;
  const totalCount = useSelector((state) => state.page.total_count);
  const tasksPerPage = 3;
  const pagesTotal = [];
  const pageCount = Math.ceil(totalCount / tasksPerPage);

  for (let j = 1; j <= pageCount; j++) {
    pagesTotal.push(j);
  }

  return (

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

  );
}
