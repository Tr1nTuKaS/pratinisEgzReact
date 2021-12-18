import { useHistory } from "react-router";

function CreateButton() {
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

export default CreateButton;
