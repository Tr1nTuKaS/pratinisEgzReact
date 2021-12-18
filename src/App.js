import "./App.css";
import { Switch, Route } from "react-router-dom";
import NewForm from "./form/newForm";
import HomePage from "./pages/HomePage";
import DeleteButton from "./component/DeleteButton";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/single/:id">
          <DeleteButton />
        </Route>

        <Route path="/new">
          <NewForm />
        </Route>

        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="*">
          <h2>Page does not exist</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
