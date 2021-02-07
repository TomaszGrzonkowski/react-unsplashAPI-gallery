import React from "react";

import styles from "./PhotoList.module.scss";

const PhotoList = ({ children }) => {
  return <div className={styles.photoList_wrapper}>{children}</div>;
};

export default PhotoList;
