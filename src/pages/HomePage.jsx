import { useEffect, useState } from "react";
import Card from "../component/Card";
import axios from "axios";
import CreateButton from "./../component/CreateButton";

function HomePage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/posts").then((res) => {
      setPosts(res.data.data);
    });
  }, []);

  // useEffect(async () => {
  //   fetch("http://localhost:8000/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.data);
  //       setPosts(data.data);
  //     });
  // }, []);

  return (
    <div>
      <CreateButton />
      {posts.map((post, index) => (
        <Card key={index} post={post} />
      ))}
    </div>
  );
}

export default HomePage;
