import React, { useContext } from 'react'
import MyButton from '../components/MyButton'
import { AppContext } from '../context/AppContext'

const SearchPokemon = () => {
  const {data } = useContext(AppContext)
  return (
    <>
    <select name="" id="">
      {data.map(item => <option key={item.name} value={item.name}>{item.name}</option> )}
    </select>

    <MyButton text="Buscar Pokemon"/>

    </>
  )
}

export default SearchPokemon