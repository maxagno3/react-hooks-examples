import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 5,
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter + action.value,
      };
    case "decrement":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter - action.value,
      };
    case "increment2":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.value,
      };
    case "decrement2":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter - action.value,
      };
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

function CounterTwo() {
  const [currentValue, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>First Counter: {currentValue.firstCounter}</div>
      <div>Second Counter: {currentValue.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "increment2",
            value: 2,
          })
        }
      >
        Increment By 2
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement2",
            value: 2,
          })
        }
      >
        Decrement By 2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterTwo;
