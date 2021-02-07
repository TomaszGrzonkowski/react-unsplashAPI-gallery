import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./DropdownItem.module.scss";

const DropdownItem = ({ hint }) => {
  const history = useHistory();

  const handleSearch = (query) => {
    if (!query) {
      return;
    }
    history.push(`/results/${query}`);
  };
  return (
    <li className={styles.dropdown_item} onClick={() => handleSearch(hint)}>
      {hint ? hint : "No hints for this Query"}
    </li>
  );
};

export default DropdownItem;
