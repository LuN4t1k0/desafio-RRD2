import { useEffect, useState } from "react";

export const useFetchData = (BASE_URL) => {
  // const [fetch_data, setFetch_data] = useState([]);
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        console.log(data);
        // setFetch_data(data.results);
        setData(data.results)
      } catch (error) {
        console.error(error.message);
      }
    };
    getData();
  }, [])

  return data;
};
