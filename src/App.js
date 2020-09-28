import React from "react";
import "./App.css";
import ChangeDocumentTitle from "./useEffect/ChangeDocumentTitle";
import FetchData from "./useEffect/FetchData";
import IntervalHookCounter from "./useEffect/IntervalHookCounter";
import MouseContainer from "./useEffect/MouseContainer";
import CounterOne from "./useReducer/CounterOne";
import CounterTwo from "./useReducer/CounterTwo";
import DataFetchingOne from "./useReducer/DataFetchingOne";
import DataFetchingTwo from "./useReducer/DataFetchingTwo";
import Arrays from "./useState/Arrays";
import Counter from "./useState/Counter";
import InputExample from "./useState/InputExample";

function App() {
  return (
    <div className="App">
      {/* <Arrays />
      <Counter />
      <InputExample />
      <ChangeDocumentTitle />
      <MouseContainer />
      <IntervalHookCounter />
      <FetchData />
      <CounterOne />
      <CounterTwo />
      <DataFetchingOne /> */}
      <DataFetchingTwo />
    </div>
  );
}

export default App;
