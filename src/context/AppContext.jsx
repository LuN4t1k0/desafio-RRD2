import React, { createContext, useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetch";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  // const [data, setData] = useState([]);
  // const [data, set] = useState([])

  // const getData = async () => {
  //   try {
  //     const url = "https://pokeapi.co/api/v2/pokemon?limit=1154";
  //     const response = await fetch(url);
  //     const {results} = await response.json();
  //     setData(results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=1154"
const data = useFetchData(BASE_URL)

// console.log(data)



  return (
    <AppContext.Provider
      value={{
data
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
