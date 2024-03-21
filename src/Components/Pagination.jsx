/** @format */

import React from "react";
import styled from "styled-components";

const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 10px;
  flex-wrap: wrap;
  padding-bottom: 100px;
`;

const PaginationButton = styled.li`
  font-size: 12px;
  font-weight: 600;
  color: #1976d2;
  background: whitesmoke;
  padding: 5px 10px;
  border-radius: 10px;
  font-family: "Roboto";
  list-style: none;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    color: #fff;
    background: #1976d2;
  }
`;

const PaginationNumber = styled.li`
  font-size: 12px;
  font-weight: 600;
  color: #1976d2;
  background: whitesmoke;
  padding: 5px 10px;
  border-radius: 10px;
  list-style: none;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    color: #fff;
    background: #1976d2;
  }

  &.active {
    background-color: #1976d2;
    color: whitesmoke;
  }
`;

const Paginate = ({
  postsPerPage,
  totalPosts,
  paginate,
  previousPage,
  nextPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationList>
      <PaginationButton onClick={previousPage}>Prev</PaginationButton>
      {pageNumbers.map((number) => (
        <PaginationNumber
          className={` ${currentPage === number ? "active" : ""}`}
          key={number}
          onClick={() => paginate(number)}
        >
          {number}
        </PaginationNumber>
      ))}
      <PaginationButton onClick={nextPage}>Next</PaginationButton>
    </PaginationList>
  );
};

export default Paginate;
