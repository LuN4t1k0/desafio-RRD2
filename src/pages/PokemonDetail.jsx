import React from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetail = () => {
  const {name} = useParams()
  return (
    <div>
      <h1>Lista detalle</h1>
      <p>nombre : {name}</p>
      <p>Imagen :</p>
      <p>Estadistica:</p>
      <p>tipo</p>

    </div>
  )
}

export default PokemonDetail