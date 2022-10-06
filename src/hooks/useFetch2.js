import { useEffect, useState } from "react"

export const useFetchData2 = (BASE_URL) => {
  const [data, setData] = useState([])
  
  const getData = async () => {
    const response = await fetch(BASE_URL)
    const data = await response.json()
    setData(data)
    // console.log(data)
  }

  useEffect(() => {
    getData()
  }, [BASE_URL])
  
  return data
}