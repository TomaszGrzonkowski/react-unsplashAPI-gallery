import React from "react";

import styles from "./Modal.module.scss";
import { FaUserAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const Modal = ({ item, onClose }) => {
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.img_wrapper}>
        <div className={styles.data_wrapper}>
          <FaUserAlt />
          <p>{`${item.user.first_name && item.user.first_name} ${
            item.user.last_name && item.user.last_name
          }`}</p>
        </div>

        <img
          className={styles.modal_img}
          src={`${item.urls.regular}`}
          alt={`${item.alt_description}`}
        />
        <div className={styles.data_wrapper}>
          {item.user.location && <GoLocation />}
          <p className={styles.user}>
            {item.user.location && item.user.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
