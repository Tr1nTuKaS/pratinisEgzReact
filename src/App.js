import "./App.css";
import { Switch, Route } from "react-router-dom";
import NewForm from "./form/newForm";
import UpdateForm from "./form/UpdateForm";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import Header from "./component/Header";

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

        <Route exact path="/user">
          <UserPage />
        </Route>

        <Route path="/new">
          <NewForm />
        </Route>

        <Route exact path="/">
          <Header />
        </Route>

        <Route path="*">
          <h2>Page does not exist</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
