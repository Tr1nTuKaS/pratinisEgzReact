import { useContext, createContext, useState, useEffect } from "react";

export const DataContext = createContext({});

/**
 * @returns {{
 * Data: {
 *      loading: boolean,
 *      error: string | null,
 *      data: object | null
 *  },
 * setData: Function
 * }}
 */
export const useCoreContext = () => useContext(DataContext);

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    let isSubscribedHeader = true;
    fetch("http://localhost:8000/posts/all")
      .then((res) => res.json())
      .then((res) => {
        if (isSubscribedHeader)
          setData((s) => ({
            loading: false,
            data: res.data.data,
            error: null,
          }));
      })
      .catch((err) => {
        if (isSubscribedHeader)
          setData((s) => ({
            loading: false,
            data: null,
            error: err.message,
          }));
      });
    return () => {
      isSubscribedHeader = false;
    };
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
