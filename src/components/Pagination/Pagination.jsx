import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

const Pagination = ({ pageCount, pagination, setPagination }) => {
  const handlePageClick = async (selected) => {
    console.log(selected)
    let pageVisited = selected.selected * pagination.limit;
    setPagination({ ...pagination, start: pageVisited, pageNumber: selected });
  };
  return (
    <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      forcePage={pagination.pageNumber}
      pageCount={pageCount}
      onPageChange={handlePageClick}
      containerClassName={"navigationButtons"}
      previousLinkClassName={"previousButton"}
      nextLinkClassName={"nextButton"}
      disabledClassName={"navigationDisabled"}
      activeClassName={"navigationActive"}
    />
  );
};

export default Pagination;
