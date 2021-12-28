import React from "react";
import style from "./Pagination.module.css";

function Pagination({ pokemonsPerPage, totalPokemons, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log("PageNumbers", pageNumbers);
  return (
    <div>
      <ul>
        {pageNumbers.map((number) => {
          <li key={number}>
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </li>;
        })}
      </ul>
    </div>
  );
}

export default Pagination;
