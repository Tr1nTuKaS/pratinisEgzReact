import { useHistory } from "react-router";

function CreateButton() {
  const history = useHistory();

  const handle = () => {
    history.replace("/new");
  };

  return (
    <>
      <a href="https://google.com" target="_blank"></a>
      <button onClick={handle}>Sukurti</button>
    </>
  );
}

export default CreateButton;
