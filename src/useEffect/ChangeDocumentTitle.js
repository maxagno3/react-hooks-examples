import React, { useEffect, useState } from "react";

function ChangeDocumentTitle() {
  const [count, setcount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `You clicked ${count} time(s)`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setcount(count + 1)}>
        Clicked {count} time(s)
      </button>
    </div>
  );
}

export default ChangeDocumentTitle;
