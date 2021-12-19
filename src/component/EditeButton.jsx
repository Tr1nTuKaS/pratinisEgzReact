import React from "react";
import { useHistory } from "react-router";

function EditButton({ post }) {
  const history = useHistory();

  const handle = () => {
    history.replace(`/edit/${post.id}`);
  };
  return (
    <>
      <button onClick={() => handle(post.id)}>Atnaujinti</button>
    </>
  );
}

export default EditButton;
