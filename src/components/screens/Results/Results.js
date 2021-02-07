import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Modal from "../../Modal/Modal";
import PhotoItem from "../../PhotoItem/PhotoItem";
import PhotoList from "../../PhotoList/PhotoList";
import SearchBar from "../../SearchBar/SearchBar";

import styles from "./Results.module.scss";
import { fetchDataAsync } from "../../../actions/searchDataActions";

const Results = ({ match }) => {
  const { query } = match.params;
  const data = useSelector((state) => state.data.data);
  const [currentItem, setCurrentItem] = useState(null);
  const [modalVisibility, setModalVisibility] = useState(false);

  const dispatch = useDispatch();

  const handleFetchData = (query) => {
    dispatch(fetchDataAsync(query));
  };

  const handleOpenModal = (item) => {
    setCurrentItem(item);
    handleToggleModal();
  };

  const handleToggleModal = () => {
    setModalVisibility((prevstate) => !prevstate);
  };

  useEffect(() => {
    handleFetchData(query);
  }, [query]);

  return (
    <>
      {modalVisibility && (
        <Modal item={currentItem} onClose={handleToggleModal} />
      )}
      <div className={styles.main_wrapper}>
        <SearchBar results />
        <h1 className={styles.query}>{query}</h1>
        <PhotoList>
          {data ? (
            data.results.map((el, index) => (
              <PhotoItem key={index} item={el} onOpen={handleOpenModal} />
            ))
          ) : (
            <p>no data yet</p>
          )}
        </PhotoList>
      </div>
    </>
  );
};

export default Results;
