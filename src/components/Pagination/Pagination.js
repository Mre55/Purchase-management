import React from "react";

import './Pagination.css';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav>
      <ul className="pagination-container">
        <li className="">
          <button onClick={prevPage} href="#">
            Previous
          </button>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
          >
            {pgNumber}
          </li>
        ))}
        <li className="">
          <button onClick={nextPage} href="#">
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
