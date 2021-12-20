import DeleteButton from "./DeleteButton";
import EditButton from "./EditeButton";

function Card({ post }) {
  return (
    <div className="container">
      <div>{post.name}</div>
      <div>{post.age}</div>
      <div>{post.email}</div>
      <div>{post.password}</div>
      <DeleteButton post={post} />
      <EditButton post={post} />
    </div>
  );
}

export default Card;
