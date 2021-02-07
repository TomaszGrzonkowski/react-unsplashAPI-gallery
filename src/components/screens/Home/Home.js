import React from "react";
import SearchBar from "../../SearchBar/SearchBar";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.search_wrapper}>
        <h1>Unsplash</h1>
        <h3>The internet's source of freely-usable images.</h3>
        <h3>Powered by creators everywhere.</h3>
        <SearchBar />
        <p>Trending: flower, wallpapers, backgrounds, happy, love</p>
      </div>
    </div>
  );
};

export default Home;
