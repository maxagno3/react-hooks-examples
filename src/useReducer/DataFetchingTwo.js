import Axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  post: {},
  error: "",
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, post: action.payload, error: "" };
    case "FETCH_FAILURE":
      return { loading: false, post: {}, error: "Something went wrong!" };
    default:
      return currentState;
  }
};

function DataFetchingTwo() {
  const [currentValue, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => dispatch({ type: "FETCH_FAILURE" }));
  });

  return (
    <div>
      {currentValue.loading ? "Loading..." : currentValue.post.title}
      {currentValue.error ? currentValue.error : null}
    </div>
  );
}

export default DataFetchingTwo;
