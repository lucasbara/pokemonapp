import { React, useState } from "react";
import style from "./SearchBar.module.css";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

function SearchBar() {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <form>
        <div className={style.form}>
          <input
            type="text"
            value={search}
            placeholder="Search for a Pokemon"
            onChange={handleChange}
          />
          <button>
            <BiSearch />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
