import React, { useEffect, useState } from "react";

function IntervalHookCounter() {
  const [time, setTime] = useState(0);

  const timer = () => {
    setTime((prevTime) => prevTime + 1);
  };

  useEffect(() => {
    let intervalTime = setInterval(timer, 1000);
    return () => clearInterval(intervalTime);
  }, []);

  return <div>{time}</div>;
}

export default IntervalHookCounter;
