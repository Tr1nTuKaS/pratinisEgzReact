import { useEffect, useState } from "react";
import Card from "../component/Card";
import axios from "axios";
import Header from "./../component/Header";
import Loading from "../UI/Loading";
import { useCoreContext } from "../store/loadContext";

function UserPage() {
  const { data } = useCoreContext();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/posts/all").then((res) => {
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
      <Loading show={data.loading} />
      <div>
        <Header />
        <h1>--Posts--</h1>
      </div>
      {posts.map((post, index) => (
        <Card key={index} post={post} />
      ))}
    </div>
  );
}

export default UserPage;
