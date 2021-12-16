import "./App.css";
import { Switch, Route } from "react-router-dom";
import NewForm from "./form/newForm";
import Button from "./component/AddButton";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/new">
          <NewForm />
        </Route>

        <Route exact path="/">
          <Button />
        </Route>

        <Route path="*">
          <h2>Page does not exist</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
