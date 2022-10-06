import React, { createContext, useEffect, useState } from "react";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=1154";
      const response = await fetch(url);
      const {results} = await response.json();
      setData(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
