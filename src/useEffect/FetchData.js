import Axios from "axios";
import React, { useEffect, useState } from "react";

function FetchData() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, [idFromButton]);

  const handleClick = () => {
    setIdFromButton(id);
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Search
      </button>
      <h4>{post.title}</h4>
    </div>
  );
}

export default FetchData;
