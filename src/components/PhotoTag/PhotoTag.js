import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchDataAsync } from "../../actions/searchDataActions";
import styles from "./PhotoTag.module.scss";

const PhotoTag = ({ tag }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearch = () => {
    dispatch(fetchDataAsync(tag));
    history.push(`/results/${tag}`);
  };
  return (
    <div onClick={handleSearch} className={styles.tag_wrapper}>
      <p>{tag}</p>
    </div>
  );
};

export default PhotoTag;
