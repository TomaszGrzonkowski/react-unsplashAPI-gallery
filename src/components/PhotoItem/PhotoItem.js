import React from "react";
import PhotoTag from "../PhotoTag/PhotoTag";

import styles from "./PhotoItem.module.scss";

const PhotoItem = ({ item, onOpen }) => {
  return (
    <div className={styles.photo_content}>
      <div onClick={() => onOpen(item)}>
        <img src={`${item.urls.small}`} alt={`${item.alt_description}`} />
      </div>
      <div className={styles.tags}>
        {item.tags &&
          item.tags.map((el, index) => <PhotoTag key={index} tag={el.title} />)}
      </div>
    </div>
  );
};

export default PhotoItem;
