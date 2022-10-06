import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'


const Home = () => {
const {data} = useContext(AppContext)
console.log(data)
  return (
    <div>Home</div>
    
  )
}

export default Home