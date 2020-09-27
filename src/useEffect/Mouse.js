import React, { useEffect, useState } from "react";

function Mouse() {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", moveMouse);

    return () => window.removeEventListener("mousemove", moveMouse);
  }, []);

  const moveMouse = (e) => {
    setx(e.clientX);
    sety(e.clientY);
  };

  return (
    <div>
      <h1>X: {x}</h1>
      <h1>Y: {y}</h1>
    </div>
  );
}

export default Mouse;
