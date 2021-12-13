import { React, useState } from "react";
import style from "./SearchBar.module.css";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../actions/index.js";

function SearchBar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      dispatch(getPokemonByName(search));
      setSearch("");
    }
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
          <button onClick={handleSubmit}>
            <BiSearch />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
