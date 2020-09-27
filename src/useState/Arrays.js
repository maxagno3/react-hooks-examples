import React, { useState } from "react";

function Arrays() {
  const [items, setitems] = useState([]);

  const addItems = () => {
    setitems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };

  return (
    <>
      <button onClick={addItems}>Add</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </>
  );
}

export default Arrays;
