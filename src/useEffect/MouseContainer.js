import React, { useState } from "react";
import Mouse from "./Mouse";

function MouseContainer() {
  const [display, setdisplay] = useState(true);
  return (
    <>
      <button onClick={() => setdisplay(!display)}>Toggle Display</button>
      {display && <Mouse />}
    </>
  );
}

export default MouseContainer;
