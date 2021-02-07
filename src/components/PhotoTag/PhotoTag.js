import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./PhotoTag.module.scss";

const PhotoTag = ({ tag }) => {
  const history = useHistory();

  const handleSearch = () => {
    history.push(`/results/${tag}`);
  };
  return (
    <div onClick={handleSearch} className={styles.tag_wrapper}>
      <p>{tag}</p>
    </div>
  );
};

export default PhotoTag;
