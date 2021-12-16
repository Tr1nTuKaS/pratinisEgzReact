import { useHistory } from "react-router";

function Button() {
  const history = useHistory();

  const handle = () => {
    history.replace("/new");
  };
  return (
    <>
      <button onClick={handle}>Create</button>
    </>
  );
}

export default Button;
