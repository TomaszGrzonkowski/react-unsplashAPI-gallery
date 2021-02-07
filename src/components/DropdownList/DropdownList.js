import React from "react";

import styles from "./DropdownList.module.scss";

const DropdownList = ({ children }) => {
  return <ul className={styles.dropdown_list}>{children}</ul>;
};

export default DropdownList;
