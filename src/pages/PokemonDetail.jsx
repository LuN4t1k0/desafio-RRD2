import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchData } from '../hooks/useFetch'
import { useFetchData2 } from '../hooks/useFetch2'

const PokemonDetail = () => {
  // const {name} = useParams()
  // const BASE_URL = `https://pokeapi.co/api/v2/pokemon/ditto`
  // const data = useFetchData(BASE_URL)
  // console.log(data)
 

// const [pokemon, setPokemon] = useState([])

//   const getData = async () => {
//     try {
//       const url = "https://pokeapi.co/api/v2/pokemon/ditto";
//       const response = await fetch(url);
//       const info = await response.json();
//       setPokemon(info)
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

// console.log(pokemon.sprites.back_default)

const {name} = useParams()
const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${name}`
const data = useFetchData2(BASE_URL)
console.log(data)

  return (
    <div>
     
      <h1>Lista detalle</h1>
      <p>nombre : {name}</p>
      <p>Experiencie : {data.base_experience}</p>
      <p>peso : {data.weight}</p>
      <img src={data.sprites.other?.home.front_default} alt="" />
    
     






  

    </div>
  )
}

export default PokemonDetail



