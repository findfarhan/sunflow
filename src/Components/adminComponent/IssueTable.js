import React, { useState } from 'react';
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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
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
        <tbody>
          {record.map((table) => (
            <tr className="table-tr align-items-center" key={table.id}>
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
        <div className="d-flex justify-content-center align-items-center">
          <div className="page-item">
            <a
              class="page-link"
              aria-label="Previous"
              onClick={handlePreviousPage}
            >
              <span aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 7L7 11M7 11L11 15M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
                    stroke="#D75D39"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
          {Array.from({ length: totalPages }).map((_, index) => (
            <div className="page-item" key={index}>
              <a
                class={`page-link  mx-2 ${
                  currentPage === index + 1 ? 'page-num' : 'page-num1'
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </a>
            </div>
          ))}
          <div className="page-item">
            <a class="page-link" aria-label="Next" onClick={handleNextPage}>
              <span aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 15L15 11M15 11L11 7M15 11L7 11M1 11C1 5.47715 5.47715 0.999999 11 0.999999C16.5228 1 21 5.47715 21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11Z"
                    stroke="#D75D39"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </table>
    </>
  );
};

export default IssueTable;
