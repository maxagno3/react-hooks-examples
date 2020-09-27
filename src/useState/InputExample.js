import React, { useState } from "react";

function InputExample() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>
        Full Name: <span>{name.firstName + " " + name.lastName}</span>
      </h2>
    </div>
  );
}

export default InputExample;
