import React, { useState, useEffect } from 'react';
import { tableData } from '../../DataUseForTable/TableData';
import arrowUp from '../../assets/images/arrow-down.svg';

const IssueTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 2;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = (currentPage - 1) * recordPerPage;
  const record = tableData.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(tableData.length / recordPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    let parentcontainer = document.querySelector('.parent-menu-table');
    let linkadmin = document.querySelectorAll('.table-admin');

    parentcontainer.addEventListener('click', function (e) {
      let click = e.target.closest('.table-admin');

      if (!click) return;

      linkadmin.forEach((t) => {
        t.classList.remove('table-manu-link');
      });
      click.classList.add('table-manu-link');
    });
  });
  return (
    <>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">
              <input
                className="form-check-input input-table-feild shadow-none mt-2"
                type="checkbox"
                value=""
                id="name"
              />
              <label className="form-label ps-3 table-label">Name </label>
              <img src={arrowUp} alt="" className="ps-2" />
            </th>
            <th scope="col">
              {' '}
              <div className="table-label">
                Email <img src={arrowUp} alt="" className="ps-2" />
              </div>
            </th>
            <th scope="col">
              {' '}
              <div className="table-label">
                Phone <img src={arrowUp} alt="" className="ps-2" />
              </div>
            </th>
            <th scope="col">
              <div className="table-label">
                Role <img src={arrowUp} alt="" className="ps-2" />
              </div>
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="parent-menu-table">
          {record.map((table) => (
            <tr
              className="table-tr align-items-center table-admin "
              key={table.id}
            >
              <td>
                <input
                  className="form-check-input input-table-feild shadow-none mt-2 me-3"
                  type="checkbox"
                  value=""
                  id="name"
                />
                <span className="table-form">{table.name}</span>
              </td>
              <td className="table-form pt-4">{table.email}</td>
              <td className="table-form pt-4">{table.phone}</td>
              <td className="table-form pt-4">{table.role}</td>
              <td className="table-form pt-4">
                <img src={table.trash} alt="" className="img-fluid" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-end align-items-center pt-4 ">
        <div className="me-5 record-font">
          Rows per page : {recordPerPage}{' '}
          <svg
            width="15"
            height="15"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ms-3"
          >
            <path
              d="M1.79297 0C1.16016 0 0.84375 0.773438 1.30078 1.23047L5.80078 5.73047C6.08203 6.01172 6.53906 6.01172 6.82031 5.73047L11.3203 1.23047C11.7773 0.773438 11.4609 0 10.8281 0H1.79297Z"
              fill="#666666"
            />
          </svg>
        </div>
        <div className="mx-5 record-font">1-1 of {totalPages}</div>
        <div className="page-item ms-5" style={{ cursor: 'pointer' }}>
          <a
            class="page-link"
            aria-label="Previous"
            onClick={handlePreviousPage}
          >
            <span aria-hidden="true">
              <i
                class="fa-solid fa-chevron-left"
                style={{ color: '#e7463f' }}
              ></i>
            </span>
          </a>
        </div>
        <div className="page-item ms-5 me-3" style={{ cursor: 'pointer' }}>
          <a class="page-link" aria-label="Next" onClick={handleNextPage}>
            <span aria-hidden="true">
              <i
                class="fa-solid fa-chevron-right"
                style={{ color: '#e7463f' }}
              ></i>
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default IssueTable;
