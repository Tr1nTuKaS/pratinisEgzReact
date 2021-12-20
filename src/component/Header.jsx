import style from "./Header.module.css";
import { useAuthContext } from "../store/AuthContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CreateButton from "./CreateButton";

function Header() {
  const { authData, isLoggedIn, logout, login } = useAuthContext();

  return (
    <>
      <div className={style.containernav}>
        <Link to="/new">
          <CreateButton />
        </Link>

        {!isLoggedIn && (
          <Link className={style.link} to="/login">
            Login
          </Link>
        )}

        {!isLoggedIn && (
          <Link className={style.link} to="/register">
            Register
          </Link>
        )}

        {isLoggedIn && (
          <Link
            className={style.link}
            onClick={(e) => {
              e.preventDefault();
              logout();
            }}
          >
            LOGOUT ({authData.username})
          </Link>
        )}

        <Link className={style.link} to="/">
          Home
        </Link>

        <Link className={style.link} to="/user">
          User
        </Link>
      </div>
    </>
  );
}

export default Header;
