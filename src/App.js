import "./App.css";
import { Switch, Route } from "react-router-dom";
import NewForm from "./form/newForm";
import HomePage from "./pages/HomePage";
import UpdateForm from "./form/UpdateForm";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/register">
          <RegisterPage />
        </Route>

        <Route path="/edit/:id">
          <UpdateForm />
        </Route>

        <Route path="/login">
          <LoginPage />
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
