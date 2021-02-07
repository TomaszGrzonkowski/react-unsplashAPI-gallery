const initialState = {
  data: null,
};

const searchedDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHDATA":
      return { data: action.payload };
    default:
      return state;
  }
};

export default searchedDataReducer;
