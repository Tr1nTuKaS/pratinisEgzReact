import { useHistory } from "react-router";

function CreateButton() {
  const history = useHistory();

  const handle = () => {
    history.replace("/new");
  };
  return (
    <>
      <button onClick={handle}>Sukurti</button>
    </>
  );
}

export default CreateButton;
