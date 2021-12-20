import { useContext, createContext, useState } from "react";
import { toast } from "react-hot-toast";

export const AuthContext = createContext({
  authData: {},
  setAuthData() {},
  isLoggedIn: false,
  login() {},
  logout() {},
});

/**
 * @returns {{
 * authData: {
 *      loading: boolean,
 *      username: string | null
 *      token: string | null
 *
 *  },
 * login: Function
 * logout: Function
 * }}
 */
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    loading: false,
    usersname: null,
    token: null,
  });
  const isLoggedIn = !!authData.token;

  const login = (token, username) => {
    setAuthData((s) => ({
      ...s,
      username: username,
      token: token,
    }));
    toast.success("Logged in");
    return true;
  };

  const logout = () => {
    setAuthData((s) => ({ ...s, token: null, username: null }));
    toast.success("Logged Out");
  };

  return (
    <AuthContext.Provider
      value={{ authData, isLoggedIn, setAuthData, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
