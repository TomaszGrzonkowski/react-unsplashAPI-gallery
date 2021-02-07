const fetchData = (data) => {
  return {
    type: "FETCHDATA",
    payload: data,
  };
};

export const fetchDataAsync = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&&per_page=25&query=${query}&orientation=landscape&client_id=_glDj1ms8FLbm9rJMiDfnQlS1SqDkuGhatnk_7xcAz4`
      );
      const data = await response.json();
      dispatch(fetchData(data));
    } catch (err) {
      console.log(err);
    }
  };
};
