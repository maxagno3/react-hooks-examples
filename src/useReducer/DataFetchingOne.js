import Axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetchingOne() {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setloading(false);
        setPost(res.data);
        seterror("");
      })
      .catch((err) => {
        setloading(false);
        setPost({});
        seterror("Something went wrong...");
      });
  }, []);

  return (
    <div>
      {loading ? "Loading..." : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingOne;
