import "./App.css";
import { Switch, Route } from "react-router-dom";
import NewForm from "./form/newForm";
import HomePage from "./pages/HomePage";
import UpdateForm from "./form/UpdateForm";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/edit/:id">
          <UpdateForm />
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
