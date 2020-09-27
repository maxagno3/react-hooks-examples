import React, { useState } from "react";

function Counter() {
  let initialState = 0;
  const [counter, setcounter] = useState(initialState);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h3>
        Increment{" "}
        <button onClick={() => setcounter((prevsCount) => prevsCount + 1)}>
          +
        </button>
      </h3>
      <h3>
        Decrement{" "}
        <button onClick={() => setcounter((prevsCount) => prevsCount - 1)}>
          -
        </button>
      </h3>
      <h3 onClick={() => setcounter(initialState)}>Reset</h3>
    </div>
  );
}

export default Counter;
