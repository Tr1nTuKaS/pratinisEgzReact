import axios from "axios";
import React from "react";
import { useState } from "react";
const baseURL = "http://localhost:8000/posts/";

function DeleteButton({ post }) {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios.get(`${baseURL}/${post.id}`).then((response) => {
  //     console.log(response.data);
  //     setPosts(response.data);
  //   });
  // }, []);

  const postDelete = (id) => {
    axios.delete(`${baseURL}${id}`).then(() => {
      alert("Post deleted!");
      setPosts(posts.filter((item) => item.id !== id));
      window.location.reload();
    });
  };

  return (
    <>
      <button onClick={() => postDelete(post.id)}>Ištrinti</button>
    </>
  );
}

export default DeleteButton;
