import React from "react";
import "./App.css";
import ChangeDocumentTitle from "./useEffect/ChangeDocumentTitle";
import FetchData from "./useEffect/FetchData";
import IntervalHookCounter from "./useEffect/IntervalHookCounter";
import MouseContainer from "./useEffect/MouseContainer";
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
      <IntervalHookCounter /> */}
      <FetchData />
    </div>
  );
}

export default App;
