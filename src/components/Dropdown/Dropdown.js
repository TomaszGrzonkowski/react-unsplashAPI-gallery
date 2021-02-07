import React, { useEffect, useState } from "react";

import DropdownItem from "../DropdownItem/DropdownItem";
import DropdownList from "../DropdownList/DropdownList";

const Dropdown = ({ query, visible }) => {
  const [fetchedData, setFetchedData] = useState([]);

  const handleFetchHints = async (query) => {
    try {
      const fetchedHints = await fetch(
        `https://api.unsplash.com/search/photos?page=1&per_page=25&query=${query}&orientation=landscape&client_id=_glDj1ms8FLbm9rJMiDfnQlS1SqDkuGhatnk_7xcAz4`
      );
      const data = await fetchedHints.json();
      const hints = data.results.map((el) => el["alt_description"]);
      const filtered = hints.filter(
        (el) => el !== null && el.toLowerCase().includes(query.toLowerCase())
      );
      setFetchedData(filtered);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (query.length >= 3) {
      setFetchedData([]);
      handleFetchHints(query);
    }
  }, [query]);

  if (!visible) {
    return null;
  }

  if (fetchedData.length > 0 && query.length >= 3) {
    return (
      <DropdownList>
        {fetchedData.slice(0, 5).map((el, index) => (
          <DropdownItem hint={el} key={index} />
        ))}
      </DropdownList>
    );
  } else {
    if (query.length >= 3) {
      return (
        <DropdownList>
          <DropdownItem />
        </DropdownList>
      );
    }
    return null;
  }
};

export default Dropdown;
