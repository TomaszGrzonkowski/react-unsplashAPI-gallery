import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./SearchBar.module.scss";
import { BsSearch } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";

const SearchBar = ({ results }) => {
  const [query, setQuery] = useState("");
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const history = useHistory();

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      history.push(`/results/${query}`);
      setQuery("");
    }
  };

  const handleResetQuery = () => {
    setQuery("");
  };

  const handleToggleDropdown = () => {
    setDropdownVisibility((prev) => !prev);
  };

  console.log(dropdownVisibility);

  return (
    <div
      className={
        results ? styles.search_wrapper_results : styles.search_wrapper
      }
    >
      <div className={styles.all}>
        <BsSearch className={styles.search_icon} />
        <input
          className={
            results ? styles.search_input_results : styles.search_input
          }
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={handleSearch}
          placeholder={"Search free high-resolution photos"}
          onFocus={handleToggleDropdown}
          onBlur={handleToggleDropdown}
        />
        <div className={styles.close_button} onClick={handleResetQuery}>
          <GrFormClose />
        </div>
        <Dropdown query={query} visible={dropdownVisibility} />
      </div>
    </div>
  );
};

export default SearchBar;
