import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

function Card({ post }) {
  return (
    <div className="container">
      <div>{post.name}</div>
      <div>{post.age}</div>
      <p>{post.email}</p>
      <p>{post.password}</p>
      <DeleteButton post={post} />
      <UpdateButton post={post} />
    </div>
  );
}

export default Card;
